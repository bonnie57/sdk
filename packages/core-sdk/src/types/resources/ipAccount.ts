import { Address, Hex } from "viem";

import { TxOptions } from "../options";
import { EncodedTxData } from "../../abi/generated";

export type IPAccountExecuteRequest = {
  ipId: Address;
  to: Address;
  value: number;
  data: Address;
  txOptions?: TxOptions;
};

export type IPAccountExecuteResponse = {
  txHash?: Hex;
  encodedTxData?: EncodedTxData;
};

export type IPAccountExecuteWithSigRequest = {
  ipId: Address;
  to: Address;
  data: Address;
  signer: Address;
  deadline: number | bigint | string;
  signature: Address;
  value?: number | bigint | string;
  txOptions?: TxOptions;
};

export type IPAccountExecuteWithSigResponse = {
  txHash?: Hex;
  encodedTxData?: EncodedTxData;
};

export type IpAccountStateResponse = Hex;

export type TokenResponse = {
  chainId: bigint;
  tokenContract: Address;
  tokenId: bigint;
};

export type SetIpMetadataRequest = {
  ipId: Address;
  /** The metadataURI to set for the IP asset. */
  metadataURI: string;
  /** The hash of metadata at metadataURI. */
  metadataHash: Hex;
  txOptions?: Omit<TxOptions, "encodedTxDataOnly">;
};
