/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPowered } from "../IPowered";

export class IPowered__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPowered {
    return new Contract(address, _abi, signerOrProvider) as IPowered;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getPowerController",
    outputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPowerSwitch",
    outputs: [
      {
        internalType: "address",
        name: "powerSwitch",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOffline",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOnline",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isShutdown",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
