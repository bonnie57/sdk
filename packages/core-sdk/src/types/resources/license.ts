import { Address, TransactionReceipt } from "viem";

import { WithTxOptions, TxOptions, WithWipOptions } from "../options";
import { EncodedTxData } from "../../abi/generated";
import { LicensingConfig } from "../common";

export type LicenseApiResponse = {
  data: License;
};

export type License = {
  id: string;
  policyId: string;
  licensorIpId: Address;
};

export type RegisterNonComSocialRemixingPILRequest = {
  txOptions?: TxOptions;
};

/**
 * This structure defines the terms for a Programmable IP License (PIL). These terms can be attached to IP Assets. The legal document of the PIL can be found in this repository.
 * @type LicenseTerms
 **/
export type LicenseTerms = {
  /*Indicates whether the license is transferable or not.*/
  transferable: boolean;
  /*The address of the royalty policy contract which required to StoryProtocol in advance.*/
  royaltyPolicy: Address;
  /*The default minting fee to be paid when minting a license.*/
  defaultMintingFee: bigint;
  /*The expiration period of the license.*/
  expiration: bigint;
  /*Indicates whether the work can be used commercially or not.*/
  commercialUse: boolean;
  /*Whether attribution is required when reproducing the work commercially or not.*/
  commercialAttribution: boolean;
  /*Commercializers that are allowed to commercially exploit the work. If zero address, then no restrictions is enforced.*/
  commercializerChecker: Address;
  /*The data to be passed to the commercializer checker contract.*/
  commercializerCheckerData: Address;
  /**Percentage of revenue that must be shared with the licensor. Must be from 0-100.*/
  commercialRevShare: number;
  /*The maximum revenue that can be generated from the commercial use of the work.*/
  commercialRevCeiling: bigint;
  /*Indicates whether the licensee can create derivatives of his work or not.*/
  derivativesAllowed: boolean;
  /*Indicates whether attribution is required for derivatives of the work or not.*/
  derivativesAttribution: boolean;
  /*Indicates whether the licensor must approve derivatives of the work before they can be linked to the licensor IP ID or not.*/
  derivativesApproval: boolean;
  /*Indicates whether the licensee must license derivatives of the work under the same terms or not.*/
  derivativesReciprocal: boolean;
  /*The maximum revenue that can be generated from the derivative use of the work.*/
  derivativeRevCeiling: bigint;
  /*The ERC20 token to be used to pay the minting fee. the token must be registered in story protocol.*/
  currency: Address;
  /*The URI of the license terms, which can be used to fetch the offchain license terms.*/
  uri: string;
};
export type RegisterPILTermsRequest = Omit<
  LicenseTerms,
  "defaultMintingFee" | "expiration" | "commercialRevCeiling" | "derivativeRevCeiling"
> & {
  defaultMintingFee: bigint | string | number;
  expiration: bigint | string | number;
  commercialRevCeiling: bigint | string | number;
  derivativeRevCeiling: bigint | string | number;
  txOptions?: TxOptions;
};
export type LicenseTermsIdResponse = bigint;

export type RegisterPILResponse = {
  licenseTermsId?: bigint;
  txHash?: string;
  encodedTxData?: EncodedTxData;
};

export type RegisterCommercialUsePILRequest = {
  defaultMintingFee: string | number | bigint;
  currency: Address;
  royaltyPolicyAddress?: Address;
  txOptions?: TxOptions;
};

export type RegisterCommercialRemixPILRequest = {
  defaultMintingFee: string | number | bigint;
  commercialRevShare: number;
  currency: Address;
  royaltyPolicyAddress?: Address;
  txOptions?: TxOptions;
};

export type AttachLicenseTermsRequest = {
  ipId: Address;
  licenseTermsId: string | number | bigint;
  licenseTemplate?: Address;
  txOptions?: TxOptions;
};

export type AttachLicenseTermsResponse = {
  txHash?: string;
  encodedTxData?: EncodedTxData;
  success?: boolean;
};

export type MintLicenseTokensRequest = {
  licensorIpId: Address;
  licenseTermsId: string | number | bigint;
  licenseTemplate?: Address;
  maxMintingFee: bigint | string | number;
  maxRevenueShare: number | string;
  amount?: number | string | bigint;
  receiver?: Address;
} & WithTxOptions &
  WithWipOptions;

export type MintLicenseTokensResponse = {
  licenseTokenIds?: bigint[];
  receipt?: TransactionReceipt;
  txHash?: string;
  encodedTxData?: EncodedTxData;
};

export enum PIL_TYPE {
  NON_COMMERCIAL_REMIX,
  COMMERCIAL_USE,
  COMMERCIAL_REMIX,
}

export type LicenseTermsId = string | number | bigint;

export type PredictMintingLicenseFeeRequest = {
  licensorIpId: Address;
  licenseTermsId: LicenseTermsId;
  amount: string | number | bigint;
  licenseTemplate?: Address;
  receiver?: Address;
  txOptions?: TxOptions;
};

export type SetLicensingConfigRequest = {
  /** The address of the IP for which the configuration is being set. */
  ipId: Address;
  /** The ID of the license terms within the license template. */
  licenseTermsId: string | number | bigint;
  /** The address of the license template used. */
  licenseTemplate: Address;
  /** The licensing configuration for the license. */
  licensingConfig: LicensingConfig;
  txOptions?: TxOptions;
};

export type SetLicensingConfigResponse = {
  txHash?: string;
  encodedTxData?: EncodedTxData;
  success?: boolean;
};
