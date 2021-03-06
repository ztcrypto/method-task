/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TaskInterface extends ethers.utils.Interface {
  functions: {
    "factory()": FunctionFragment;
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "mintAndStake(address,uint256)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "rescueERC20(address,address)": FunctionFragment;
    "rescueERC721(address,uint256,address)": FunctionFragment;
    "staker()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rescueERC20",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rescueERC721",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "staker", values?: undefined): string;

  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "staker", data: BytesLike): Result;

  events: {
    "ERC721Received(address,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC721Received"): EventFragment;
}

export class Task extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TaskInterface;

  functions: {
    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    isValidSignature(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { magicValue: string }>;

    "isValidSignature(bytes32,bytes)"(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { magicValue: string }>;

    mintAndStake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mintAndStake(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rescueERC20(
      token: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "rescueERC20(address,address)"(
      token: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rescueERC721(
      token: string,
      tokenId: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "rescueERC721(address,uint256,address)"(
      token: string,
      tokenId: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    staker(overrides?: CallOverrides): Promise<[string]>;

    "staker()"(overrides?: CallOverrides): Promise<[string]>;
  };

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  isValidSignature(
    _messageHash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "isValidSignature(bytes32,bytes)"(
    _messageHash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  mintAndStake(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mintAndStake(address,uint256)"(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rescueERC20(
    token: string,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "rescueERC20(address,address)"(
    token: string,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rescueERC721(
    token: string,
    tokenId: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "rescueERC721(address,uint256,address)"(
    token: string,
    tokenId: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  staker(overrides?: CallOverrides): Promise<string>;

  "staker()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    isValidSignature(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "isValidSignature(bytes32,bytes)"(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    mintAndStake(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintAndStake(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    rescueERC20(
      token: string,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "rescueERC20(address,address)"(
      token: string,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rescueERC721(
      token: string,
      tokenId: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "rescueERC721(address,uint256,address)"(
      token: string,
      tokenId: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    staker(overrides?: CallOverrides): Promise<string>;

    "staker()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ERC721Received(
      operator: null,
      from: null,
      tokenId: null,
      data: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { operator: string; from: string; tokenId: BigNumber; data: string }
    >;
  };

  estimateGas: {
    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    isValidSignature(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidSignature(bytes32,bytes)"(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintAndStake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mintAndStake(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rescueERC20(
      token: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "rescueERC20(address,address)"(
      token: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rescueERC721(
      token: string,
      tokenId: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "rescueERC721(address,uint256,address)"(
      token: string,
      tokenId: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    staker(overrides?: CallOverrides): Promise<BigNumber>;

    "staker()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isValidSignature(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidSignature(bytes32,bytes)"(
      _messageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintAndStake(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mintAndStake(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rescueERC20(
      token: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "rescueERC20(address,address)"(
      token: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rescueERC721(
      token: string,
      tokenId: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "rescueERC721(address,uint256,address)"(
      token: string,
      tokenId: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    staker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "staker()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
