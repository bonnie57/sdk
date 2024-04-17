import { defineConfig } from "@wagmi/cli";
import { blockExplorer } from "@wagmi/cli/plugins";
import { sdk } from "./sdk";
import type { Evaluate } from "@wagmi/cli/src/types";
import type { ContractConfig } from "@wagmi/cli/src/config";
import { resolveProxyContracts } from "./resolveProxyContracts";

const storyTestnetChainId = 1513;
const sepoliaChainId = 11155111;

export default defineConfig(async () => {
  const contracts: Evaluate<Omit<ContractConfig, "abi">>[] = [
    {
      name: "AccessController",
      address: {
        // [sepoliaChainId]: "0xbb265920D0cb2039504493c76e8516502E75E128",
        [storyTestnetChainId]: "0x76918764D089459cb4a1375cD7F992Cc55212Dc4",
      },
    },
    {
      name: "DisputeModule",
      address: {
        // [sepoliaChainId]: "0x3e75614342e42C728fF57408d0B37E7e5CBb5957",
        [storyTestnetChainId]: "0xc639C11fACf94b169C3Cc1aeE47266F375b813e6",
      },
    },
    // {
    //   name: "IPAccountImpl",
    //   address: {
    //     //?
    //     // [sepoliaChainId]: "0xbCB5115E4Ed32EC902520E673efa50556dB080Ce",
    //     [storyTestnetChainId]: "0x66f7029fb06CEB00d7f27AEdfCf945ff74130D97",
    //   },
    // },
    {
      name: "IPAssetRegistry",
      address: {
        // [sepoliaChainId]: "0x945eeBB5C419bBb84F76f181a462580CfC8CB1c2",
        [storyTestnetChainId]: "0x2d3dAdfc784432AfFD7a474543F91BD6EB5f4fb8",
      },
    },
    {
      name: "IpRoyaltyVaultImpl",
      address: {
        // [sepoliaChainId]: "0x99E4321793d25467333F1c82d2C9BD803c955E5D",
        [storyTestnetChainId]: "0x31Be7ffeA5f8AFd18B4e172FD72CE25071e84E29",
      },
    },
    {
      name: "LicenseRegistry",
      address: {
        [sepoliaChainId]: "0x0BBDF088D26Fa76713a9F05AF3A7a86fbBB52EEB",
        [storyTestnetChainId]: "0xC76FC2D90b84cA3323B2BBFC7536bE26d930F8D2",
      },
    },
    {
      name: "LicenseToken",
      address: {
        // [sepoliaChainId]: "0x9CB626A37Cb59d1676673aCC858D0790C777CDB3",
        [storyTestnetChainId]: "0xb9BdFF92f126649caEa4f5Cf128B5b00b51aA6Ea",
      },
    },
    {
      name: "LicensingModule",
      address: {
        // [sepoliaChainId]: "0x2863c12344c440DdA89C7a930833825227ab12fa",
        [storyTestnetChainId]: "0x8f6217F9D266E9350ed2aEb81B00ad740Ca16f3e",
      },
    },
    {
      name: "PILicenseTemplate",
      address: {
        [sepoliaChainId]: "0x406adf3940DbDF5bE2B0C2A3129B34553e876E86",
        [storyTestnetChainId]: "0x3743462DD6e6e1234aEE23335c3e2CDa3962090f",
      },
    },
    {
      name: "ModuleRegistry",
      address: {
        // [sepoliaChainId]: "0xCdF6892CEc284A8312843ca03052c6365c6ecf75",
        [storyTestnetChainId]: "0x8Cc4AA887b5B98396d8BBF5bd89edb650b1D23E3",
      },
    },
    {
      name: "RoyaltyModule",
      address: {
        // [sepoliaChainId]: "0xb2CD61740d224040d3D025C8E45Ce5FE370472aa",
        [storyTestnetChainId]: "0x96289749967d2aEb0E47436746eA65A0F8A52751",
      },
    },
    {
      name: "RoyaltyPolicyLAP",
      address: {
        // [sepoliaChainId]: "0x9882EB3D48b2F3646C87046Fc324e4F88dF01Fde",
        [storyTestnetChainId]: "0x5DEAcA8E9C2d604e29a3f9A1fFa6cE9d3b64c3A2",
      },
    },
  ];

  return {
    out: "../core-sdk/src/abi/generated.ts",
    contracts: [],
    plugins: [
      blockExplorer({
        baseUrl: "https://story-network.explorer.caldera.xyz/api",
        name: "StoryScan",
        getAddress: await resolveProxyContracts({
          baseUrl: "https://story-network.rpc.caldera.xyz/http",
          contracts: contracts,
          chainId: storyTestnetChainId,
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
          //   IPAccountImpl: ["execute", "executeWithSig"],
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
