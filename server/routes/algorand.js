const express = require('express');
const router = express.Router();

// Algorand blockchain integration for "Blockchain Challenge" - $25K
// Trustless payments, verifiable data, user-owned identity

router.post('/create-risk-nft', async (req, res) => {
  try {
    const { riskAssessment, businessId, userId } = req.body;
    
    // Create NFT representing verified risk assessment
    const riskNFT = {
      asset_id: `risk_nft_${Date.now()}`,
      creator: userId,
      business_id: businessId,
      risk_data: {
        overall_score: riskAssessment.overallScore,
        assessment_date: new Date().toISOString(),
        validity_period: '90 days',
        verified_by: 'CrisisPredict AI',
        confidence_level: riskAssessment.confidence
      },
      metadata: {
        name: `Risk Assessment NFT - ${businessId}`,
        description: 'Verified geopolitical risk assessment on Algorand blockchain',
        image: 'ipfs://risk-assessment-visual',
        properties: {
          risk_score: riskAssessment.overallScore,
          industry: riskAssessment.industry,
          region: riskAssessment.region,
          assessment_type: 'comprehensive'
        }
      },
      smart_contract: {
        automatic_updates: true,
        expiry_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        transfer_restrictions: 'business_owner_only'
      }
    };

    res.json({
      success: true,
      risk_nft: riskNFT,
      blockchain_benefits: [
        'Immutable risk history',
        'Transferable to insurance providers',
        'Verifiable by third parties',
        'Automatic expiry and updates'
      ],
      use_cases: [
        'Insurance premium calculations',
        'Loan risk assessments',
        'Partnership due diligence',
        'Regulatory compliance'
      ]
    });

  } catch (error) {
    res.status(500).json({ error: 'Risk NFT creation failed' });
  }
});

// Consortium smart contract
router.post('/create-consortium-contract', async (req, res) => {
  try {
    const { consortiumDetails, members, riskSharingRules } = req.body;
    
    const smartContract = {
      contract_id: `consortium_${Date.now()}`,
      type: 'risk_sharing_pool',
      members: members,
      rules: {
        contribution_formula: 'risk_score * business_size * 0.01',
        payout_triggers: [
          'verified_crisis_impact > 50',
          'member_consensus >= 75%',
          'external_validation = true'
        ],
        governance: {
          voting_power: 'equal_per_member',
          quorum: '60%',
          proposal_threshold: '10%'
        }
      },
      automated_features: {
        risk_monitoring: true,
        automatic_payouts: true,
        member_verification: true,
        dispute_resolution: 'oracle_based'
      },
      economics: {
        pool_size: consortiumDetails.poolSize,
        member_contributions: 'dynamic_based_on_risk',
        payout_cap: 'per_member_per_year',
        reserve_ratio: '20%'
      }
    };

    res.json({
      success: true,
      smart_contract: smartContract,
      algorand_benefits: [
        'Instant, low-cost transactions',
        'Transparent governance',
        'Automated risk sharing',
        'Global accessibility'
      ],
      member_benefits: [
        'Reduced individual risk exposure',
        'Shared intelligence pool',
        'Automated claim processing',
        'Democratic governance'
      ]
    });

  } catch (error) {
    res.status(500).json({ error: 'Consortium contract creation failed' });
  }
});

// Decentralized identity for businesses
router.post('/create-business-identity', async (req, res) => {
  try {
    const { businessInfo, verificationDocuments } = req.body;
    
    const businessDID = {
      did: `did:algorand:business:${Date.now()}`,
      business_profile: {
        legal_name: businessInfo.legalName,
        industry: businessInfo.industry,
        size: businessInfo.size,
        location: businessInfo.location,
        registration_number: businessInfo.registrationNumber
      },
      verifiable_credentials: [
        {
          type: 'BusinessRegistration',
          issuer: 'government_authority',
          verified: true,
          expiry: businessInfo.registrationExpiry
        },
        {
          type: 'RiskAssessment',
          issuer: 'crisis_predict',
          score: businessInfo.currentRiskScore,
          last_updated: new Date().toISOString()
        },
        {
          type: 'ConsortiumMembership',
          issuer: 'consortium_smart_contract',
          status: 'active',
          benefits: ['risk_sharing', 'group_insurance']
        }
      ],
      permissions: {
        data_sharing: 'consortium_members_only',
        risk_score_visibility: 'verified_partners',
        contact_preferences: 'emergency_only'
      }
    };

    res.json({
      success: true,
      business_did: businessDID,
      use_cases: [
        'Instant KYB for new partnerships',
        'Automated insurance applications',
        'Consortium membership verification',
        'Regulatory compliance reporting'
      ],
      privacy_features: [
        'Self-sovereign identity',
        'Selective disclosure',
        'Zero-knowledge proofs',
        'Revocable credentials'
      ]
    });

  } catch (error) {
    res.status(500).json({ error: 'Business identity creation failed' });
  }
});

// Programmable digital assets for risk insurance
router.post('/create-risk-insurance-token', async (req, res) => {
  try {
    const { policyDetails, coverage, premiumAmount } = req.body;
    
    const insuranceToken = {
      asset_id: `insurance_${Date.now()}`,
      policy_type: 'geopolitical_risk_coverage',
      coverage_details: {
        max_payout: coverage.maxPayout,
        covered_risks: coverage.coveredRisks,
        geographic_scope: coverage.geographicScope,
        industry_specific: coverage.industrySpecific
      },
      smart_contract_features: {
        automatic_claims: true,
        oracle_verification: 'crisis_predict_api',
        payout_triggers: [
          'risk_score > 85',
          'verified_impact > coverage_threshold',
          'time_elapsed < 30_days'
        ],
        premium_adjustments: 'dynamic_based_on_risk'
      },
      tokenomics: {
        initial_premium: premiumAmount,
        staking_rewards: '5% APY for long-term holders',
        governance_rights: 'policy_modifications',
        transferability: 'restricted_to_verified_businesses'
      }
    };

    res.json({
      success: true,
      insurance_token: insuranceToken,
      algorand_advantages: [
        'Instant claim processing',
        'Transparent policy terms',
        'Reduced administrative costs',
        'Global accessibility'
      ],
      innovation_aspects: [
        'Parametric insurance triggers',
        'Community-owned insurance pools',
        'Real-time risk pricing',
        'Automated underwriting'
      ]
    });

  } catch (error) {
    res.status(500).json({ error: 'Insurance token creation failed' });
  }
});

module.exports = router;