export default [
  {
    inputs: [],
    name: "AccessController__CallerIsNotIPAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessController__IPAccountIsNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessController__IPAccountIsZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessController__PermissionIsNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessController__SignerIsZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ArbitrationPolicySP__NotDisputeModule",
    type: "error",
  },
  {
    inputs: [],
    name: "ArbitrationPolicySP__ZeroDisputeModule",
    type: "error",
  },
  {
    inputs: [],
    name: "ArbitrationPolicySP__ZeroPaymentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseParamVerifier__Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "DerivativesParamVerifier__InvalidDerivativesConfig",
    type: "error",
  },
  {
    inputs: [],
    name: "DerivativesParamVerifier__ZeroShare",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotAbleToResolve",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotDisputeInitiator",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotInDisputeState",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotWhitelistedArbitrationPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotWhitelistedArbitrationRelayer",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__NotWhitelistedDisputeTag",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__ZeroArbitrationPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__ZeroArbitrationRelayer",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__ZeroDisputeTag",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputeModule__ZeroLinkToDisputeEvidence",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__InconsistentState",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__NewStateIsTheSameWithOldState",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__OnlyProtocolAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__ProtocolPaused",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "interfaceName",
        type: "string",
      },
    ],
    name: "Governance__UnsupportedInterface",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccount__ExpiredSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccount__InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccount__InvalidSigner",
    type: "error",
  },
  {
    inputs: [],
    name: "IPRecordRegistry_AlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "IPRecordRegistry_IPAccountAlreadyCreated",
    type: "error",
  },
  {
    inputs: [],
    name: "IPRecordRegistry_NotYetRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "IPRecordRegistry_ResolverInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "IPRecordRegistry_Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "IPResolver_InvalidIP",
    type: "error",
  },
  {
    inputs: [],
    name: "IPResolver_Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__EmptyLicenseUrl",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__FrameworkNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__InvalidLicensor",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__InvalidParamVerifierType",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__LicensorDoesntHaveThisPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__LinkParentParamFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__NotLicensee",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__ParamVerifierAlreadySet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "verifierType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "verifier",
        type: "address",
      },
    ],
    name: "LicenseRegistry__ParamVerifierFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__ParamVerifierLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__ParentIdEqualThanChild",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__PolicyAlreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__PolicyAlreadySetForIpId",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry__PolicyNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "MetadataProvider_Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__ModuleAddressNotContract",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__ModuleAddressZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__ModuleAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__ModuleNotRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__NameAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__NameDoesNotMatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry__NameEmptyString",
    type: "error",
  },
  {
    inputs: [],
    name: "Module_Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule__InvalidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__AlreadySetRoyaltyPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__NotWhitelistedRoyaltyPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyModule__ZeroRoyaltyPolicy",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__NotRoyaltyModule",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__ZeroLiquidSplitFactory",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__ZeroLiquidSplitMain",
    type: "error",
  },
  {
    inputs: [],
    name: "RoyaltyPolicyLS__ZeroRoyaltyModule",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__DstIpIdDoesNotHaveDstTag",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__InvalidRelationTypeName",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__RelationTypeAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__RelationTypeDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "TaggingModule__SrcIpIdDoesNotHaveSrcTag",
    type: "error",
  },
] as const;
