/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TestToken } from "../TestToken";

export class TestToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestToken> {
    return super.deploy(overrides || {}) as Promise<TestToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600a8152692a32b9ba102a37b5b2b760b11b602080830191825283518085019094526004845263151154d560e21b908401528151919291620000609160039162000230565b5080516200007690600490602084019062000230565b50506005805460ff1916601217905550620000ab3362000095620000b1565b60ff16600a0a61271002620000ba60201b60201c565b620002dc565b60055460ff1690565b6001600160a01b03821662000116576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200012460008383620001c9565b6200014081600254620001ce60201b620005931790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200017391839062000593620001ce821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b60008282018381101562000229576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002685760008555620002b3565b82601f106200028357805160ff1916838001178555620002b3565b82800160010185558215620002b3579182015b82811115620002b357825182559160200191906001019062000296565b50620002c1929150620002c5565b5090565b5b80821115620002c15760008155600101620002c6565b610a1280620002ec6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610253578063a9059cbb1461027f578063dd62ed3e146102ab576100c9565b806339509351146101f957806370a082311461022557806395d89b411461024b576100c9565b806318160ddd116100b257806318160ddd1461018b57806323b872dd146101a5578063313ce567146101db576100c9565b806306fdde03146100ce578063095ea7b31461014b575b600080fd5b6100d66102d9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101776004803603604081101561016157600080fd5b506001600160a01b03813516906020013561036f565b604080519115158252519081900360200190f35b61019361038c565b60408051918252519081900360200190f35b610177600480360360608110156101bb57600080fd5b506001600160a01b03813581169160208101359091169060400135610392565b6101e3610419565b6040805160ff9092168252519081900360200190f35b6101776004803603604081101561020f57600080fd5b506001600160a01b038135169060200135610422565b6101936004803603602081101561023b57600080fd5b50356001600160a01b0316610470565b6100d661048b565b6101776004803603604081101561026957600080fd5b506001600160a01b0381351690602001356104ec565b6101776004803603604081101561029557600080fd5b506001600160a01b038135169060200135610554565b610193600480360360408110156102c157600080fd5b506001600160a01b0381358116916020013516610568565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b5050505050905090565b600061038361037c6105f4565b84846105f8565b50600192915050565b60025490565b600061039f8484846106e4565b61040f846103ab6105f4565b61040a85604051806060016040528060288152602001610947602891396001600160a01b038a166000908152600160205260408120906103e96105f4565b6001600160a01b03168152602081019190915260400160002054919061083f565b6105f8565b5060019392505050565b60055460ff1690565b600061038361042f6105f4565b8461040a85600160006104406105f4565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610593565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103655780601f1061033a57610100808354040283529160200191610365565b60006103836104f96105f4565b8461040a856040518060600160405280602581526020016109b860259139600160006105236105f4565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061083f565b60006103836105616105f4565b84846106e4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6000828201838110156105ed576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b03831661063d5760405162461bcd60e51b81526004018080602001828103825260248152602001806109946024913960400191505060405180910390fd5b6001600160a01b0382166106825760405162461bcd60e51b81526004018080602001828103825260228152602001806108ff6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107295760405162461bcd60e51b815260040180806020018281038252602581526020018061096f6025913960400191505060405180910390fd5b6001600160a01b03821661076e5760405162461bcd60e51b81526004018080602001828103825260238152602001806108dc6023913960400191505060405180910390fd5b6107798383836108d6565b6107b681604051806060016040528060268152602001610921602691396001600160a01b038616600090815260208190526040902054919061083f565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546107e59082610593565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156108ce5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561089357818101518382015260200161087b565b50505050905090810190601f1680156108c05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212201a8c1f5fb1b464d188c1f16e95f62b4d446b428e73fb38a620017178838e37c164736f6c63430007060033";