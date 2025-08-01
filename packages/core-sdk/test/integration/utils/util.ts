import {
  Address,
  createPublicClient,
  createWalletClient,
  Hex,
  http,
  WalletClient,
  zeroHash,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";

import { ChainIds, StoryClient, StoryConfig } from "../../../src";
import {
  licenseTokenAbi,
  licenseTokenAddress,
  spgnftBeaconAddress,
  SpgnftImplEventClient,
} from "../../../src/abi/generated";
import { chainStringToViemChain, waitTx } from "../../../src/utils/utils";

export const RPC = "https://aeneid.storyrpc.io";
export const aeneid: ChainIds = 1315;
export const mockERC721 = "0xa1119092ea911202E0a65B743a13AE28C5CF2f21";
export const licenseToken = licenseTokenAddress[aeneid];
export const spgNftBeacon = spgnftBeaconAddress[aeneid];
export const TEST_WALLET_ADDRESS = process.env.TEST_WALLET_ADDRESS! as Address;
export const TEST_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY! as Hex;

const baseConfig = {
  chain: chainStringToViemChain("aeneid"),
  transport: http(RPC),
} as const;
export const publicClient = createPublicClient(baseConfig);
export const walletClient: WalletClient = createWalletClient({
  ...baseConfig,
  account: privateKeyToAccount(TEST_PRIVATE_KEY),
});

export const getTokenId = async (): Promise<number | undefined> => {
  const { request } = await publicClient.simulateContract({
    abi: [
      {
        inputs: [{ internalType: "address", name: "to", type: "address" }],
        name: "mint",
        outputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: mockERC721,
    functionName: "mint",
    args: [process.env.TEST_WALLET_ADDRESS as Hex],
    account: walletClient.account,
  });
  const hash = await walletClient.writeContract(request);
  const { logs } = await publicClient.waitForTransactionReceipt({
    hash,
  });
  if (logs[0].topics[3]) {
    return parseInt(logs[0].topics[3], 16);
  }
};

export const mintBySpg = async (
  spgNftContract: Hex,
  nftMetadataURI?: string,
  nftMetadataHash?: Hex,
): Promise<bigint> => {
  const { request } = await publicClient.simulateContract({
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "nftMetadataURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "nftMetadataHash",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "allowDuplicates",
            type: "bool",
          },
        ],
        name: "mint",
        outputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: spgNftContract,
    functionName: "mint",
    args: [TEST_WALLET_ADDRESS, nftMetadataURI || "", nftMetadataHash || zeroHash, true],
    account: walletClient.account,
  });

  const hash = await walletClient.writeContract(request);
  const receipt = await publicClient.waitForTransactionReceipt({
    hash,
  });
  const spgnftImplEventClient = new SpgnftImplEventClient(publicClient);
  const events = spgnftImplEventClient.parseTxTransferEvent(receipt);
  return events[0].tokenId;
};

export const approveForLicenseToken = async (address: Address, tokenId: bigint): Promise<void> => {
  const { request: call } = await publicClient.simulateContract({
    abi: licenseTokenAbi,
    address: licenseToken,
    functionName: "approve",
    account: walletClient.account,
    args: [address, tokenId],
  });
  const hash = await walletClient.writeContract(call);
  await waitTx(publicClient, hash);
};

export const getStoryClient = (privateKey?: Address): StoryClient => {
  const config: StoryConfig = {
    chainId: "aeneid",
    transport: http(RPC),
    account: privateKeyToAccount(privateKey ?? (process.env.WALLET_PRIVATE_KEY as Address)),
  };

  return StoryClient.newClient(config);
};
