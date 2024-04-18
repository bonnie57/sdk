import { defineConfig } from "@wagmi/cli";
import { blockExplorer } from "@wagmi/cli/plugins";
import { sdk } from "./sdk";
import type { Evaluate } from "@wagmi/cli/src/types";
import type { ContractConfig } from "@wagmi/cli/src/config";
import { resolveProxyContracts } from "./resolveProxyContracts";

const sepoliaChainId = 11155111;

export default defineConfig(async () => {
  const contracts: Evaluate<Omit<ContractConfig, "abi">>[] = [
    {
      name: "AccessController",
      address: {
        [sepoliaChainId]: "0xbb265920D0cb2039504493c76e8516502E75E128",
      },
    },
    {
      name: "DisputeModule",
      address: {
        [sepoliaChainId]: "0x3e75614342e42C728fF57408d0B37E7e5CBb5957",
      },
    },
    {
      name: "IPAccountImpl",
      address: {
        [sepoliaChainId]: "0xbCB5115E4Ed32EC902520E673efa50556dB080Ce",
      },
    },
    {
      name: "IPAssetRegistry",
      address: {
        [sepoliaChainId]: "0x945eeBB5C419bBb84F76f181a462580CfC8CB1c2",
      },
    },
    {
      name: "IpRoyaltyVaultImpl",
      address: {
        [sepoliaChainId]: "0x99E4321793d25467333F1c82d2C9BD803c955E5D",
      },
    },
    {
      name: "LicenseRegistry",
      address: {
        [sepoliaChainId]: "0x0BBDF088D26Fa76713a9F05AF3A7a86fbBB52EEB",
      },
    },
    {
      name: "LicenseToken",
      address: {
        [sepoliaChainId]: "0x9CB626A37Cb59d1676673aCC858D0790C777CDB3",
      },
    },
    {
      name: "LicensingModule",
      address: {
        [sepoliaChainId]: "0x2863c12344c440DdA89C7a930833825227ab12fa",
      },
    },
    {
      name: "PILicenseTemplate",
      address: {
        [sepoliaChainId]: "0x406adf3940DbDF5bE2B0C2A3129B34553e876E86",
      },
    },
    {
      name: "ModuleRegistry",
      address: {
        [sepoliaChainId]: "0xCdF6892CEc284A8312843ca03052c6365c6ecf75",
      },
    },
    {
      name: "RoyaltyModule",
      address: {
        [sepoliaChainId]: "0xb2CD61740d224040d3D025C8E45Ce5FE370472aa",
      },
    },
    {
      name: "RoyaltyPolicyLAP",
      address: {
        [sepoliaChainId]: "0x9882EB3D48b2F3646C87046Fc324e4F88dF01Fde",
      },
    },
  ];

  return {
    out: "../core-sdk/src/abi/generated.ts",
    contracts: [],
    plugins: [
      blockExplorer({
        baseUrl: "https://api-sepolia.etherscan.io/api",
        name: "Etherscan",
        getAddress: await resolveProxyContracts({
          baseUrl: "https://rpc.sepolia.org",
          contracts: contracts,
          chainId: sepoliaChainId,
        }),
        contracts: contracts,
      }),
      sdk({
        permissionLessSDK: true,
        whiteList: {
          AccessController: ["PermissionSet", "setPermission"],
          DisputeModule: [
            "DisputeCancelled",
            "DisputeRaised",
            "DisputeResolved",
            "cancelDispute",
            "raiseDispute",
            "resolveDispute",
          ],
          IPAccountImpl: ["execute", "executeWithSig"],
          IPAssetRegistry: ["IPRegistered", "ipId", "isRegistered", "register"],
          IpRoyaltyVaultImpl: [
            "claimRevenueBySnapshotBatch",
            "claimRevenueByTokenBatch",
            "claimableRevenue",
            "collectRoyaltyTokens",
            "ipId",
            "RoyaltyTokensCollected",
            "snapshot",
            "SnapshotCompleted",
            "RevenueTokenClaimed",
          ],
          PiLicenseTemplate: [
            "getLicenseTermsId",
            "registerLicenseTerms",
            "LicenseTermsRegistered",
          ],
          LicensingModule: [
            "attachLicenseTerms",
            "mintLicenseTokens",
            "LicenseTokensMinted",
            "registerDerivativeWithLicenseTokens",
            "registerDerivative",
          ],
          ModuleRegistry: ["isRegistered"],
          RoyaltyModule: ["payRoyaltyOnBehalf"],
          RoyaltyPolicyLAP: ["onRoyaltyPayment", "getRoyaltyData"],
          LicenseToken: ["ownerOf"],
        },
      }),
    ],
  };
});
