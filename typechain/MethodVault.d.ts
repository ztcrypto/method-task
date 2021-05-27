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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MethodVaultInterface extends ethers.utils.Interface {
  functions: {
    "LOCK_TYPEHASH()": FunctionFragment;
    "RAGEQUIT_GAS()": FunctionFragment;
    "UNLOCK_TYPEHASH()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "calculateLockID(address,address)": FunctionFragment;
    "checkBalances()": FunctionFragment;
    "getBalanceDelegated(address,address)": FunctionFragment;
    "getBalanceLocked(address)": FunctionFragment;
    "getLockAt(uint256)": FunctionFragment;
    "getLockSetCount()": FunctionFragment;
    "getNonce()": FunctionFragment;
    "getPermissionHash(bytes32,address,address,uint256,uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "initializeLock()": FunctionFragment;
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "lock(address,uint256,bytes)": FunctionFragment;
    "nft()": FunctionFragment;
    "owner()": FunctionFragment;
    "rageQuit(address,address)": FunctionFragment;
    "transferERC20(address,address,uint256)": FunctionFragment;
    "transferETH(address,uint256)": FunctionFragment;
    "unlock(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "LOCK_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RAGEQUIT_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNLOCK_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateLockID",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkBalances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalanceDelegated",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalanceLocked",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLockAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLockSetCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPermissionHash",
    values: [BytesLike, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeLock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rageQuit",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferETH",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "LOCK_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RAGEQUIT_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNLOCK_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateLockID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalanceDelegated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalanceLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getLockAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLockSetCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPermissionHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rageQuit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;

  events: {
    "Locked(address,address,uint256)": EventFragment;
    "RageQuit(address,address,bool,string)": EventFragment;
    "Unlocked(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Locked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RageQuit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlocked"): EventFragment;
}

export class MethodVault extends Contract {
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

  interface: MethodVaultInterface;

  functions: {
    LOCK_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    "LOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<[string]>;

    RAGEQUIT_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "RAGEQUIT_GAS()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    UNLOCK_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    "UNLOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<[string]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    "VERSION()"(overrides?: CallOverrides): Promise<[string]>;

    calculateLockID(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { lockID: string }>;

    "calculateLockID(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { lockID: string }>;

    checkBalances(
      overrides?: CallOverrides
    ): Promise<[boolean] & { validity: boolean }>;

    "checkBalances()"(
      overrides?: CallOverrides
    ): Promise<[boolean] & { validity: boolean }>;

    getBalanceDelegated(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    "getBalanceDelegated(address,address)"(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getBalanceLocked(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    "getBalanceLocked(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getLockAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, BigNumber] & {
          delegate: string;
          token: string;
          balance: BigNumber;
        }
      ] & {
        lockData: [string, string, BigNumber] & {
          delegate: string;
          token: string;
          balance: BigNumber;
        };
      }
    >;

    "getLockAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, BigNumber] & {
          delegate: string;
          token: string;
          balance: BigNumber;
        }
      ] & {
        lockData: [string, string, BigNumber] & {
          delegate: string;
          token: string;
          balance: BigNumber;
        };
      }
    >;

    getLockSetCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    "getLockSetCount()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    getNonce(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    "getNonce()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    getPermissionHash(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { permissionHash: string }>;

    "getPermissionHash(bytes32,address,address,uint256,uint256)"(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { permissionHash: string }>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initializeLock()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isValidSignature(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "isValidSignature(bytes32,bytes)"(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "lock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nft(overrides?: CallOverrides): Promise<[string] & { nftAddress: string }>;

    "nft()"(
      overrides?: CallOverrides
    ): Promise<[string] & { nftAddress: string }>;

    owner(
      overrides?: CallOverrides
    ): Promise<[string] & { ownerAddress: string }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<[string] & { ownerAddress: string }>;

    rageQuit(
      delegate: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "rageQuit(address,address)"(
      delegate: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferETH(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferETH(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unlock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  LOCK_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  "LOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;

  RAGEQUIT_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  "RAGEQUIT_GAS()"(overrides?: CallOverrides): Promise<BigNumber>;

  UNLOCK_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  "UNLOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  "VERSION()"(overrides?: CallOverrides): Promise<string>;

  calculateLockID(
    delegate: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "calculateLockID(address,address)"(
    delegate: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  checkBalances(overrides?: CallOverrides): Promise<boolean>;

  "checkBalances()"(overrides?: CallOverrides): Promise<boolean>;

  getBalanceDelegated(
    token: string,
    delegate: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBalanceDelegated(address,address)"(
    token: string,
    delegate: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBalanceLocked(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBalanceLocked(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLockAt(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      delegate: string;
      token: string;
      balance: BigNumber;
    }
  >;

  "getLockAt(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      delegate: string;
      token: string;
      balance: BigNumber;
    }
  >;

  getLockSetCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getLockSetCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getNonce(overrides?: CallOverrides): Promise<BigNumber>;

  "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  getPermissionHash(
    eip712TypeHash: BytesLike,
    delegate: string,
    token: string,
    amount: BigNumberish,
    nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPermissionHash(bytes32,address,address,uint256,uint256)"(
    eip712TypeHash: BytesLike,
    delegate: string,
    token: string,
    amount: BigNumberish,
    nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeLock(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initializeLock()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isValidSignature(
    permissionHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "isValidSignature(bytes32,bytes)"(
    permissionHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  lock(
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "lock(address,uint256,bytes)"(
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nft(overrides?: CallOverrides): Promise<string>;

  "nft()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  rageQuit(
    delegate: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "rageQuit(address,address)"(
    delegate: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferERC20(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferERC20(address,address,uint256)"(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferETH(
    to: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferETH(address,uint256)"(
    to: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlock(
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unlock(address,uint256,bytes)"(
    token: string,
    amount: BigNumberish,
    permission: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    LOCK_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    "LOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;

    RAGEQUIT_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    "RAGEQUIT_GAS()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNLOCK_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    "UNLOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    "VERSION()"(overrides?: CallOverrides): Promise<string>;

    calculateLockID(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "calculateLockID(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    checkBalances(overrides?: CallOverrides): Promise<boolean>;

    "checkBalances()"(overrides?: CallOverrides): Promise<boolean>;

    getBalanceDelegated(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceDelegated(address,address)"(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalanceLocked(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceLocked(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        delegate: string;
        token: string;
        balance: BigNumber;
      }
    >;

    "getLockAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        delegate: string;
        token: string;
        balance: BigNumber;
      }
    >;

    getLockSetCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getLockSetCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionHash(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPermissionHash(bytes32,address,address,uint256,uint256)"(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    initializeLock(overrides?: CallOverrides): Promise<void>;

    "initializeLock()"(overrides?: CallOverrides): Promise<void>;

    isValidSignature(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "isValidSignature(bytes32,bytes)"(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    lock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "lock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    nft(overrides?: CallOverrides): Promise<string>;

    "nft()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    rageQuit(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { notified: boolean; error: string }>;

    "rageQuit(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { notified: boolean; error: string }>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferETH(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferETH(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unlock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "unlock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Locked(
      delegate: null,
      token: null,
      amount: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { delegate: string; token: string; amount: BigNumber }
    >;

    RageQuit(
      delegate: null,
      token: null,
      notified: null,
      reason: null
    ): TypedEventFilter<
      [string, string, boolean, string],
      { delegate: string; token: string; notified: boolean; reason: string }
    >;

    Unlocked(
      delegate: null,
      token: null,
      amount: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { delegate: string; token: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    LOCK_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    "LOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<BigNumber>;

    RAGEQUIT_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    "RAGEQUIT_GAS()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNLOCK_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    "UNLOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    "VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;

    calculateLockID(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateLockID(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkBalances(overrides?: CallOverrides): Promise<BigNumber>;

    "checkBalances()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBalanceDelegated(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceDelegated(address,address)"(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalanceLocked(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceLocked(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLockAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockSetCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getLockSetCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPermissionHash(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPermissionHash(bytes32,address,address,uint256,uint256)"(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initializeLock()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isValidSignature(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidSignature(bytes32,bytes)"(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "lock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    "nft()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    rageQuit(
      delegate: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "rageQuit(address,address)"(
      delegate: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferETH(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferETH(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unlock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LOCK_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LOCK_TYPEHASH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RAGEQUIT_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "RAGEQUIT_GAS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNLOCK_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNLOCK_TYPEHASH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateLockID(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateLockID(address,address)"(
      delegate: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkBalances(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "checkBalances()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBalanceDelegated(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBalanceDelegated(address,address)"(
      token: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBalanceLocked(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBalanceLocked(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLockAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLockAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLockSetCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLockSetCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPermissionHash(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPermissionHash(bytes32,address,address,uint256,uint256)"(
      eip712TypeHash: BytesLike,
      delegate: string,
      token: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initializeLock()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isValidSignature(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidSignature(bytes32,bytes)"(
      permissionHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "lock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nft()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rageQuit(
      delegate: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "rageQuit(address,address)"(
      delegate: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferETH(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferETH(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlock(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unlock(address,uint256,bytes)"(
      token: string,
      amount: BigNumberish,
      permission: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
