// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.7.6;
pragma abicoder v2;

import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import {IUniStaker} from "./staking/UniStaker.sol";


interface IFactory {
    function create() external returns (address instance);
}

interface IUniversalVault {
    /* user events */

    event Locked(address delegate, address token, uint256 amount);
    event Unlocked(address delegate, address token, uint256 amount);
    event RageQuit(address delegate, address token, bool notified, string reason);

    /* data types */

    struct LockData {
        address delegate;
        address token;
        uint256 balance;
    }

    function lock(
        address token,
        uint256 amount,
        bytes calldata permission
    ) external;

    function unlock(
        address token,
        uint256 amount,
        bytes calldata permission
    ) external;

    function lockERC721(
        address token,
        uint256 tokenId,
        bytes calldata permission
    ) external;
    
    function unlockERC721(
        address token,
        uint256 amount,
        bytes calldata permission
    ) external;

    function transferERC20(
        address token,
        address to,
        uint256 amount
    ) external;

    function transferETH(address to, uint256 amount) external payable;

    /* pure functions */

    function calculateLockID(address delegate, address token)
        external
        pure
        returns (bytes32 lockID);

    /* getter functions */

    function getPermissionHash(
        bytes32 eip712TypeHash,
        address delegate,
        address token,
        uint256 amount,
        uint256 nonce
    ) external view returns (bytes32 permissionHash);

    function getNonce() external view returns (uint256 nonce);

    function owner() external view returns (address ownerAddress);

    function getLockSetCount() external view returns (uint256 count);

    function getLockAt(uint256 index) external view returns (LockData memory lockData);

    function getBalanceDelegated(address token, address delegate)
        external
        view
        returns (uint256 balance);

    function getBalanceLocked(address token) external view returns (uint256 balance);

    function checkBalances() external view returns (bool validity);
}

contract Task is IERC721Receiver {

    using SafeMath for uint256;

    IFactory public factory;
    IUniStaker public staker;

    constructor(IFactory _factory, IUniStaker _staker) {
        factory = _factory;
        staker = _staker;
    }

    function mintAndStake(ERC20 token, uint256 amount) external {
        require(token.balanceOf(address(this)) >= amount);

        address vault1 = factory.create();
        address vault2 = factory.create();

        token.transfer(vault1, amount.div(2));
        IUniversalVault(vault1).lock(address(token), amount.div(2), bytes(abi.encode(vault1)));

        token.approve(address(staker), amount.div(2));
        staker.stake(vault1, address(factory), address(token), amount.div(2), bytes(abi.encode(vault1)));

        IERC721(address(factory)).transferFrom(address(this), vault1, uint256(vault2));
        IUniversalVault(vault1).lockERC721(address(factory), uint256(vault2), bytes(abi.encode(vault1)));
        IUniversalVault(vault1).unlockERC721(address(factory), uint256(vault2), bytes(abi.encode(vault1)));
    }

    function rescueERC20(ERC20 token, address receiver) external {
        token.transfer(receiver, token.balanceOf(address(this)));
    }

    function rescueERC721(IERC721 token, uint256 tokenId, address receiver) external {
        token.transferFrom(address(this), receiver, tokenId);
    }

    function isValidSignature(bytes32 _messageHash, bytes memory _signature) 
        external
        view
        returns (bytes4 magicValue) {
            if (keccak256(_signature) == keccak256(bytes(abi.encode(msg.sender)))) return bytes4(keccak256("isValidSignature(bytes32,bytes)"));
            else return bytes4(0);
    }

    function onERC721Received(address operator, address from, uint256 tokenId, bytes calldata data) external override returns (bytes4) {
       emit ERC721Received(operator, from, tokenId, data);
       return IERC721Receiver(0).onERC721Received.selector;
    }

    event ERC721Received(address operator, address from, uint256 tokenId, bytes data);
}