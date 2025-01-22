import { Address } from "viem";

import { TxOptions } from "../options";
import { EncodedTxData } from "../../abi/generated";
import { InnerLicensingConfig, IpMetadataAndTxOption, LicensingConfig } from "../common";

export type LicenseData = {
  licenseTermsId: string | bigint | number;
  licensingConfig: LicensingConfig;
  licenseTemplate?: Address;
};

export type InnerLicenseData = {
  licenseTermsId: bigint;
  licensingConfig: InnerLicensingConfig;
  licenseTemplate: Address;
};

export type MintAndRegisterIpAndAttachLicenseAndAddToGroupRequest = {
  spgNftContract: Address;
  groupId: Address;
  allowDuplicates: boolean;
  recipient?: Address;
  deadline?: string | number | bigint;
  licenseData: LicenseData[];
} & IpMetadataAndTxOption;

export type MintAndRegisterIpAndAttachLicenseAndAddToGroupResponse = {
  txHash?: string;
  encodedTxData?: EncodedTxData;
  ipId?: Address;
  tokenId?: bigint;
};
export type RegisterGroupRequest = {
  groupPool: Address;
  txOptions?: TxOptions;
};

export type RegisterGroupResponse = {
  txHash?: string;
  encodedTxData?: EncodedTxData;
  groupId?: Address;
};

export type RegisterIpAndAttachLicenseAndAddToGroupRequest = {
  nftContract: Address;
  tokenId: bigint | string | number;
  groupId: Address;
  deadline?: bigint;
  licenseData: LicenseData[];
} & IpMetadataAndTxOption;

export type RegisterIpAndAttachLicenseAndAddToGroupResponse = {
  txHash?: string;
  encodedTxData?: EncodedTxData;
  ipId?: Address;
  tokenId?: bigint;
};
export type RegisterGroupAndAttachLicenseRequest = {
  groupPool: Address;
  licenseData: LicenseData;
  txOptions?: TxOptions;
};

export type RegisterGroupAndAttachLicenseResponse = {
  txHash?: string;
  encodedTxData?: EncodedTxData;
  groupId?: Address;
};

export type RegisterGroupAndAttachLicenseAndAddIpsRequest = {
  groupPool: Address;
  ipIds: Address[];
  licenseData: LicenseData;
  txOptions?: TxOptions;
};

export type RegisterGroupAndAttachLicenseAndAddIpsResponse = {
  txHash?: string;
  encodedTxData?: EncodedTxData;
  groupId?: Address;
};
