/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { InstanceRegistry } from "../InstanceRegistry";

export class InstanceRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InstanceRegistry> {
    return super.deploy(overrides || {}) as Promise<InstanceRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InstanceRegistry {
    return super.attach(address) as InstanceRegistry;
  }
  connect(signer: Signer): InstanceRegistry__factory {
    return super.connect(signer) as InstanceRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InstanceRegistry {
    return new Contract(address, _abi, signerOrProvider) as InstanceRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    name: "InstanceAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    name: "InstanceRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "instanceAt",
    outputs: [
      {
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "instanceCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
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
        name: "instance",
        type: "address",
      },
    ],
    name: "isInstance",
    outputs: [
      {
        internalType: "bool",
        name: "validity",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061024e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311d8293e146100465780636b44e6be1461008c578063ec56c716146100d3575b600080fd5b6100636004803603602081101561005c57600080fd5b50356100ed565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100bf600480360360208110156100a257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100ff565b604080519115158252519081900360200190f35b6100db61010b565b60408051918252519081900360200190f35b60006100f9818361011c565b92915050565b60006100f9818361012f565b60006101176000610151565b905090565b6000610128838361015c565b9392505050565b60006101288373ffffffffffffffffffffffffffffffffffffffff84166101da565b60006100f9826101f2565b815460009082106101b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806101f76022913960400191505060405180910390fd5b8260000182815481106101c757fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b549056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473a2646970667358221220ccbd15fb8d4d3158f8f46acb8b1065b1a84af2623200ed5a6b13858d39e2478764736f6c63430007060033";
