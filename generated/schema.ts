// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get transactionCount(): i32 {
    let value = this.get("transactionCount");
    return value.toI32();
  }

  set transactionCount(value: i32) {
    this.set("transactionCount", Value.fromI32(value));
  }
}

export class UserCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserCounter", id.toString(), this);
  }

  static load(id: string): UserCounter | null {
    return store.get("UserCounter", id) as UserCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }
}

export class TransferCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferCounter", id.toString(), this);
  }

  static load(id: string): TransferCounter | null {
    return store.get("TransferCounter", id) as TransferCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get totalTransferred(): BigInt {
    let value = this.get("totalTransferred");
    return value.toBigInt();
  }

  set totalTransferred(value: BigInt) {
    this.set("totalTransferred", Value.fromBigInt(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Approval entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Approval entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Approval", id.toString(), this);
  }

  static load(id: string): Approval | null {
    return store.get("Approval", id) as Approval | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class DelegateChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DelegateChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DelegateChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DelegateChanged", id.toString(), this);
  }

  static load(id: string): DelegateChanged | null {
    return store.get("DelegateChanged", id) as DelegateChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegator(): Bytes {
    let value = this.get("delegator");
    return value.toBytes();
  }

  set delegator(value: Bytes) {
    this.set("delegator", Value.fromBytes(value));
  }

  get fromDelegate(): Bytes {
    let value = this.get("fromDelegate");
    return value.toBytes();
  }

  set fromDelegate(value: Bytes) {
    this.set("fromDelegate", Value.fromBytes(value));
  }

  get toDelegate(): Bytes {
    let value = this.get("toDelegate");
    return value.toBytes();
  }

  set toDelegate(value: Bytes) {
    this.set("toDelegate", Value.fromBytes(value));
  }
}

export class DelegateVotesChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save DelegateVotesChanged entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DelegateVotesChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DelegateVotesChanged", id.toString(), this);
  }

  static load(id: string): DelegateVotesChanged | null {
    return store.get("DelegateVotesChanged", id) as DelegateVotesChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegate(): Bytes {
    let value = this.get("delegate");
    return value.toBytes();
  }

  set delegate(value: Bytes) {
    this.set("delegate", Value.fromBytes(value));
  }

  get previousBalance(): BigInt {
    let value = this.get("previousBalance");
    return value.toBigInt();
  }

  set previousBalance(value: BigInt) {
    this.set("previousBalance", Value.fromBigInt(value));
  }

  get newBalance(): BigInt {
    let value = this.get("newBalance");
    return value.toBigInt();
  }

  set newBalance(value: BigInt) {
    this.set("newBalance", Value.fromBigInt(value));
  }
}



export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}