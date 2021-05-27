// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.7.6;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor() ERC20("Test Token", "TEST") {
        _mint(msg.sender, 10000 * (10 ** decimals()));
    }
}