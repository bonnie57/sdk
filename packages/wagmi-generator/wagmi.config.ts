import { defineConfig } from "@wagmi/cli";
import { sdk } from "./sdk";
import type { Evaluate } from "@wagmi/cli/src/types";
import type { ContractConfig } from "@wagmi/cli/src/config";
import { resolveProxyContracts } from "./resolveProxyContracts";
import { optimizedBlockExplorer } from "./optimizedBlockExplorer";
const aeneidChainId = 1315;
const mainnetChainId = 1514;
import "dotenv/config";

export default defineConfig(async () => {
  const contracts: Evaluate<Omit<ContractConfig, "abi">>[] = [
    {
      name: "AccessController",
      address: {
        [aeneidChainId]: "0xcCF37d0a503Ee1D4C11208672e622ed3DFB2275a",
        [mainnetChainId]: "0xcCF37d0a503Ee1D4C11208672e622ed3DFB2275a",
      },
    },
    {
      name: "DisputeModule",
      address: {
        [aeneidChainId]: "0x9b7A9c70AFF961C799110954fc06F3093aeb94C5",
        [mainnetChainId]: "0x9b7A9c70AFF961C799110954fc06F3093aeb94C5",
      },
    },
    {
      name: "IPAccountImpl",
      address: {
        [aeneidChainId]: "0x7343646585443F1c3F64E4F08b708788527e1C77",
        [mainnetChainId]: "0x7343646585443F1c3F64E4F08b708788527e1C77",
      },
    },
    {
      name: "IPAssetRegistry",
      address: {
        [aeneidChainId]: "0x77319B4031e6eF1250907aa00018B8B1c67a244b",
        [mainnetChainId]: "0x77319B4031e6eF1250907aa00018B8B1c67a244b",
      },
    },
    {
      name: "IpRoyaltyVaultImpl",
      address: {
        [aeneidChainId]: "0x73e2D097F71e5103824abB6562362106A8955AEc",
        [mainnetChainId]: "0x63cC7611316880213f3A4Ba9bD72b0EaA2010298",
      },
    },
    {
      name: "LicenseRegistry",
      address: {
        [aeneidChainId]: "0x529a750E02d8E2f15649c13D69a465286a780e24",
        [mainnetChainId]: "0x529a750E02d8E2f15649c13D69a465286a780e24",
      },
    },
    {
      name: "LicenseToken",
      address: {
        [aeneidChainId]: "0xFe3838BFb30B34170F00030B52eA4893d8aAC6bC",
        [mainnetChainId]: "0xFe3838BFb30B34170F00030B52eA4893d8aAC6bC",
      },
    },
    {
      name: "LicensingModule",
      address: {
        [aeneidChainId]: "0x04fbd8a2e56dd85CFD5500A4A4DfA955B9f1dE6f",
        [mainnetChainId]: "0x04fbd8a2e56dd85CFD5500A4A4DfA955B9f1dE6f",
      },
    },
    {
      name: "PILicenseTemplate",
      address: {
        [aeneidChainId]: "0x2E896b0b2Fdb7457499B56AAaA4AE55BCB4Cd316",
        [mainnetChainId]: "0x2E896b0b2Fdb7457499B56AAaA4AE55BCB4Cd316",
      },
    },
    {
      name: "ModuleRegistry",
      address: {
        [aeneidChainId]: "0x022DBAAeA5D8fB31a0Ad793335e39Ced5D631fa5",
        [mainnetChainId]: "0x022DBAAeA5D8fB31a0Ad793335e39Ced5D631fa5",
      },
    },
    {
      name: "RoyaltyModule",
      address: {
        [aeneidChainId]: "0xD2f60c40fEbccf6311f8B47c4f2Ec6b040400086",
        [mainnetChainId]: "0xD2f60c40fEbccf6311f8B47c4f2Ec6b040400086",
      },
    },
    {
      name: "RoyaltyPolicyLAP",
      address: {
        [aeneidChainId]: "0xBe54FB168b3c982b7AaE60dB6CF75Bd8447b390E",
        [mainnetChainId]: "0xBe54FB168b3c982b7AaE60dB6CF75Bd8447b390E",
      },
    },
    {
      name: "ArbitrationPolicyUMA",
      address: {
        [aeneidChainId]: "0xfFD98c3877B8789124f02C7E8239A4b0Ef11E936",
        [mainnetChainId]: "0xfFD98c3877B8789124f02C7E8239A4b0Ef11E936",
      },
    },
    {
      name: "RoyaltyPolicyLRP",
      address: {
        [aeneidChainId]: "0x9156e603C949481883B1d3355c6f1132D191fC41",
        [mainnetChainId]: "0x9156e603C949481883B1d3355c6f1132D191fC41",
      },
    },
    {
      name: "SPGNFTBeacon",
      address: {
        [aeneidChainId]: "0xD2926B9ecaE85fF59B6FB0ff02f568a680c01218",
        [mainnetChainId]: "0xD2926B9ecaE85fF59B6FB0ff02f568a680c01218",
      },
    },
    {
      name: "SPGNFTImpl",
      address: {
        [aeneidChainId]: "0x5266215a00c31AaA2f2BB7b951Ea0028Ea8b4e37",
        [mainnetChainId]: "0x6Cfa03Bc64B1a76206d0Ea10baDed31D520449F5",
      },
    },
    {
      name: "CoreMetadataModule",
      address: {
        [aeneidChainId]: "0x6E81a25C99C6e8430aeC7353325EB138aFE5DC16",
        [mainnetChainId]: "0x6E81a25C99C6e8430aeC7353325EB138aFE5DC16",
      },
    },
    {
      name: "DerivativeWorkflows",
      address: {
        [aeneidChainId]: "0x9e2d496f72C547C2C535B167e06ED8729B374a4f",
        [mainnetChainId]: "0x9e2d496f72C547C2C535B167e06ED8729B374a4f",
      },
    },
    {
      name: "GroupingWorkflows",
      address: {
        [aeneidChainId]: "0xD7c0beb3aa4DCD4723465f1ecAd045676c24CDCd",
        [mainnetChainId]: "0xD7c0beb3aa4DCD4723465f1ecAd045676c24CDCd",
      },
    },
    {
      name: "RegistrationWorkflows",
      address: {
        [aeneidChainId]: "0xbe39E1C756e921BD25DF86e7AAa31106d1eb0424",
        [mainnetChainId]: "0xbe39E1C756e921BD25DF86e7AAa31106d1eb0424",
      },
    },
    {
      name: "RoyaltyWorkflows",
      address: {
        [aeneidChainId]: "0x9515faE61E0c0447C6AC6dEe5628A2097aFE1890",
        [mainnetChainId]: "0x9515faE61E0c0447C6AC6dEe5628A2097aFE1890",
      },
    },
    {
      name: "LicenseAttachmentWorkflows",
      address: {
        [aeneidChainId]: "0xcC2E862bCee5B6036Db0de6E06Ae87e524a79fd8",
        [mainnetChainId]: "0xcC2E862bCee5B6036Db0de6E06Ae87e524a79fd8",
      },
    },
    {
      name: "RoyaltyTokenDistributionWorkflows",
      address: {
        [aeneidChainId]: "0xa38f42B8d33809917f23997B8423054aAB97322C",
        [mainnetChainId]: "0xa38f42B8d33809917f23997B8423054aAB97322C",
      },
    },
    {
      name: "GroupingModule",
      address: {
        [aeneidChainId]: "0x69D3a7aa9edb72Bc226E745A7cCdd50D947b69Ac",
        [mainnetChainId]: "0x69D3a7aa9edb72Bc226E745A7cCdd50D947b69Ac",
      },
    },
    {
      name: "EvenSplitGroupPool",
      address: {
        [aeneidChainId]: "0xf96f2c30b41Cb6e0290de43C8528ae83d4f33F89",
        [mainnetChainId]: "0xf96f2c30b41Cb6e0290de43C8528ae83d4f33F89",
      },
    },
    // IMPORTANT: This ERC20 contract must have an ABI that exactly matches Viem's ERC20 ABI implementation.
    // This contract's ABI will be used as the standard ERC20 ABI throughout the application for
    // common operations like balanceOf, allowance, approve, etc.
    {
      name: "ERC20",
      address: {
        [aeneidChainId]: "0xF2104833d386a2734a4eB3B8ad6FC6812F29E38E",
        [mainnetChainId]: "0xF2104833d386a2734a4eB3B8ad6FC6812F29E38E",
      },
    },
    {
      name: "WrappedIP",
      address: {
        [aeneidChainId]: "0x1514000000000000000000000000000000000000",
        [mainnetChainId]: "0x1514000000000000000000000000000000000000",
      },
    },
    {
      name: "Multicall3",
      address: {
        [aeneidChainId]: "0xca11bde05977b3631167028862be2a173976ca11",
        [mainnetChainId]: "0xca11bde05977b3631167028862be2a173976ca11",
      },
    },
    {
      name: "TotalLicenseTokenLimitHook",
      address: {
        [aeneidChainId]: "0xaBAD364Bfa41230272b08f171E0Ca939bD600478",
        [mainnetChainId]: "0xB72C9812114a0Fc74D49e01385bd266A75960Cda",
      },
    },
  ];
  return {
    out: "../core-sdk/src/abi/generated.ts",
    contracts: [],
    plugins: [
      optimizedBlockExplorer({
        baseUrl: "https://aeneid.storyscan.xyz/api",
        name: "aeneid",
        getAddress: await resolveProxyContracts({
          baseUrl: "https://aeneid.storyrpc.io",
          contracts: contracts,
          chainId: aeneidChainId,
        }),
        contracts: contracts,
      }),
      sdk({
        permissionLessSDK: true,
        whiteList: {
          AccessController: [
            "PermissionSet",
            "setPermission",
            "setAllPermissions",
            "setBatchPermissions",
          ],
          DisputeModule: [
            "DisputeCancelled",
            "DisputeRaised",
            "DisputeResolved",
            "cancelDispute",
            "raiseDispute",
            "resolveDispute",
            "isWhitelistedDisputeTag",
            "tagIfRelatedIpInfringed",
          ],
          IPAccountImpl: [
            "execute",
            "executeWithSig",
            "state",
            "token",
            "owner",
            "executeBatch",
          ],
          IPAssetRegistry: [
            "IPRegistered",
            "ipId",
            "isRegistered",
            "register",
            "IPAccountRegistered",
          ],
          IpRoyaltyVaultImpl: [
            "claimableRevenue",
            "ipId",
            "RoyaltyTokensCollected",
            "RevenueTokenClaimed",
            "balanceOf",
          ],
          PiLicenseTemplate: [
            "getLicenseTermsId",
            "registerLicenseTerms",
            "LicenseTermsRegistered",
            "getLicenseTerms",
          ],
          LicensingModule: [
            "attachLicenseTerms",
            "mintLicenseTokens",
            "LicenseTokensMinted",
            "registerDerivativeWithLicenseTokens",
            "registerDerivative",
            "getLicenseTerms",
            "LicenseTermsAttached",
            "predictMintingLicenseFee",
            "setLicensingConfig",
          ],
          ModuleRegistry: ["isRegistered", "getDefaultLicenseTerms"],
          RoyaltyModule: [
            "payRoyaltyOnBehalf",
            "isWhitelistedRoyaltyPolicy",
            "isWhitelistedRoyaltyToken",
            "ipRoyaltyVaults",
            "IpRoyaltyVaultDeployed",
            "RoyaltyPaid",
          ],
          RoyaltyPolicyLAP: ["onRoyaltyPayment", "getRoyaltyData"],
          LicenseToken: ["ownerOf"],
          SPG: ["CollectionCreated", "mintFee", "mintFeeToken"],
          GroupingWorkflows: [
            "mintAndRegisterIpAndAttachLicenseAndAddToGroup",
            "registerIpAndAttachLicenseAndAddToGroup",
            "registerGroupAndAttachLicense",
            "registerGroupAndAttachLicenseAndAddIps",
            "collectRoyaltiesAndClaimReward",
          ],
          DerivativeWorkflows: [
            "mintAndRegisterIpAndMakeDerivativeWithLicenseTokens",
            "registerIpAndMakeDerivative",
            "mintAndRegisterIpAndMakeDerivative",
            "registerIpAndMakeDerivativeWithLicenseTokens",
            "mintAndRegisterIpAndMakeDerivativeWithLicenseTokens",
            "multicall",
          ],
          RegistrationWorkflows: [
            "createCollection",
            "mintAndRegisterIp",
            "registerIp",
            "CollectionCreated",
            "multicall",
          ],
          LicenseAttachmentWorkflows: [
            "registerPILTermsAndAttach",
            "registerIpAndAttachPILTerms",
            "mintAndRegisterIpAndAttachPILTerms",
            "multicall",
          ],
          RoyaltyWorkflows: ["claimAllRevenue", "multicall"],
          Multicall3: ["aggregate3"],
          RoyaltyTokenDistributionWorkflows: [
            "mintAndRegisterIpAndAttachPILTermsAndDistributeRoyaltyTokens",
            "mintAndRegisterIpAndMakeDerivativeAndDistributeRoyaltyTokens",
            "registerIpAndAttachPILTermsAndDeployRoyaltyVault",
            "distributeRoyaltyTokens",
            "registerIpAndMakeDerivativeAndDeployRoyaltyVault",
            "multicall",
          ],
          ArbitrationPolicyUMA: [
            "maxBonds",
            "maxLiveness",
            "minLiveness",
            "disputeIdToAssertionId",
            "disputeAssertion",
            "oov3",
          ],
          WrappedIP: [
            "deposit",
            "approve",
            "transferFrom",
            "transfer",
            "balanceOf",
            "withdraw",
            "allowance",
          ],
          ERC20: [
            "approve",
            "balanceOf",
            "allowance",
            "transferFrom",
            "mint",
            "transfer",
          ],
          GroupingModule: [
            "CollectedRoyaltiesToGroupPool",
            "registerGroup",
            "IPGroupRegistered",
            "addIp",
            "claimReward",
            "ClaimedReward",
            "getClaimableReward",
            "removeIp",
            "collectRoyalties",
            "CollectedRoyaltiesToGroupPool",
          ],
          LicenseRegistry: [
            "getLicensingConfig",
            "hasIpAttachedLicenseTerms",
            "getDefaultLicenseTerms",
            "getRoyaltyPercent",
          ],
          SPGNFTImpl: [
            "publicMinting",
            "mintFeeToken",
            "mintFee",
            "setTokenURI",
            "tokenURI",
            "Transfer",
          ],
          TotalLicenseTokenLimitHook: ["setTotalLicenseTokenLimit"],
        },
      }),
    ],
  };
});
