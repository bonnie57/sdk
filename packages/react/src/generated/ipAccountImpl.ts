import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPAccountImpl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ipAccountImplAbi = [
  { stateMutability: 'payable', type: 'receive' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'accessController',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'execute',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'executeWithSig',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'accessController_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'signer_', internalType: 'address', type: 'address' },
      { name: 'data_', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSigner',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'state',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'interfaceId_', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'nonce',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Executed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'nonce',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'deadline',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'signer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'signature',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'ExecutedWithSig',
  },
  { type: 'error', inputs: [], name: 'IPAccount__ExpiredSignature' },
  { type: 'error', inputs: [], name: 'IPAccount__InvalidCalldata' },
  { type: 'error', inputs: [], name: 'IPAccount__InvalidSignature' },
  { type: 'error', inputs: [], name: 'IPAccount__InvalidSigner' },
] as const

export const ipAccountImplAddress =
  '0x2d861075F6B4965F181b57D3F54bd0E5094068Aa' as const

export const ipAccountImplConfig = {
  address: ipAccountImplAddress,
  abi: ipAccountImplAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__
 */
export const useReadIpAccountImpl = /*#__PURE__*/ createUseReadContract({
  abi: ipAccountImplAbi,
  address: ipAccountImplAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"accessController"`
 */
export const useReadIpAccountImplAccessController =
  /*#__PURE__*/ createUseReadContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'accessController',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"isValidSigner"`
 */
export const useReadIpAccountImplIsValidSigner =
  /*#__PURE__*/ createUseReadContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'isValidSigner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useReadIpAccountImplOnErc1155BatchReceived =
  /*#__PURE__*/ createUseReadContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useReadIpAccountImplOnErc1155Received =
  /*#__PURE__*/ createUseReadContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useReadIpAccountImplOnErc721Received =
  /*#__PURE__*/ createUseReadContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"owner"`
 */
export const useReadIpAccountImplOwner = /*#__PURE__*/ createUseReadContract({
  abi: ipAccountImplAbi,
  address: ipAccountImplAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"state"`
 */
export const useReadIpAccountImplState = /*#__PURE__*/ createUseReadContract({
  abi: ipAccountImplAbi,
  address: ipAccountImplAddress,
  functionName: 'state',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIpAccountImplSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"token"`
 */
export const useReadIpAccountImplToken = /*#__PURE__*/ createUseReadContract({
  abi: ipAccountImplAbi,
  address: ipAccountImplAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ipAccountImplAbi}__
 */
export const useWriteIpAccountImpl = /*#__PURE__*/ createUseWriteContract({
  abi: ipAccountImplAbi,
  address: ipAccountImplAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteIpAccountImplExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"executeWithSig"`
 */
export const useWriteIpAccountImplExecuteWithSig =
  /*#__PURE__*/ createUseWriteContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'executeWithSig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIpAccountImplInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ipAccountImplAbi}__
 */
export const useSimulateIpAccountImpl = /*#__PURE__*/ createUseSimulateContract(
  { abi: ipAccountImplAbi, address: ipAccountImplAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateIpAccountImplExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"executeWithSig"`
 */
export const useSimulateIpAccountImplExecuteWithSig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'executeWithSig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ipAccountImplAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIpAccountImplInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ipAccountImplAbi}__
 */
export const useWatchIpAccountImplEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ipAccountImplAbi}__ and `eventName` set to `"Executed"`
 */
export const useWatchIpAccountImplExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    eventName: 'Executed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ipAccountImplAbi}__ and `eventName` set to `"ExecutedWithSig"`
 */
export const useWatchIpAccountImplExecutedWithSigEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ipAccountImplAbi,
    address: ipAccountImplAddress,
    eventName: 'ExecutedWithSig',
  })