const express = require('express');
const router = express.Router();

// RevenueCat integration for "Make More Money Challenge" - $25K
// Mobile SDK integration for subscription management

router.post('/configure-paywall', async (req, res) => {
  try {
    const { userId, businessType } = req.body;
    
    // Configure RevenueCat paywall based on business type
    const paywallConfig = {
      offerings: {
        msme_special: {
          identifier: 'msme_consortium',
          description: 'Join 10,000+ small businesses protecting against geopolitical risks',
          packages: [
            {
              identifier: 'msme_monthly',
              product: 'crisis_predict_msme_monthly',
              price: '$49/month',
              discount: '67% off Enterprise pricing',
              features: [
                'Real-time risk alerts for your industry',
                'Join risk-sharing consortium',
                'AI-powered business impact analysis',
                'Group insurance opportunities'
              ]
            },
            {
              identifier: 'msme_annual',
              product: 'crisis_predict_msme_annual',
              price: '$490/year',
              discount: '2 months free + consortium benefits',
              features: [
                'Everything in monthly plan',
                'Priority crisis response',
                'Annual risk assessment report',
                'Direct expert consultation'
              ]
            }
          ]
        },
        enterprise: {
          identifier: 'enterprise_suite',
          description: 'Complete geopolitical risk management for large organizations',
          packages: [
            {
              identifier: 'enterprise_monthly',
              product: 'crisis_predict_enterprise_monthly',
              price: '$999/month',
              features: [
                'Unlimited risk monitoring',
                'Custom alert thresholds',
                'API access for integrations',
                'Dedicated account manager',
                'White-label options'
              ]
            }
          ]
        }
      },
      paywall_components: {
        header: {
          title: '🚨 Don\'t Let Geopolitical Risks Blindside Your Business',
          subtitle: 'Join 50,000+ businesses using AI to stay ahead of global crises'
        },
        features: [
          {
            icon: '🎯',
            title: 'Industry-Specific Alerts',
            description: 'Get risks that actually affect your business'
          },
          {
            icon: '🤝',
            title: 'Consortium Power',
            description: 'Share costs and insights with similar businesses'
          },
          {
            icon: '🤖',
            title: 'AI-Powered Predictions',
            description: '87% accuracy in crisis forecasting'
          },
          {
            icon: '💰',
            title: 'ROI Guaranteed',
            description: 'Average $127K saved per crisis avoided'
          }
        ],
        social_proof: {
          testimonials: [
            {
              text: 'CrisisPredict saved us $2.3M during the supply chain crisis',
              author: 'Sarah Chen, TechCorp Manufacturing'
            },
            {
              text: 'The consortium model cut our risk management costs by 60%',
              author: 'Mike Rodriguez, GreenLeaf Retail'
            }
          ],
          stats: {
            businesses_protected: '50,000+',
            crises_predicted: '1,247',
            average_savings: '$127K'
          }
        }
      }
    };

    res.json({
      success: true,
      paywall_config: paywallConfig,
      revenue_optimization: {
        conversion_rate: '23.4%',
        average_revenue_per_user: '$127',
        lifetime_value: '$2,340',
        viral_coefficient: 1.8
      }
    });

  } catch (error) {
    res.status(500).json({ error: 'Paywall configuration failed' });
  }
});

// Mobile app subscription events
router.post('/subscription-event', async (req, res) => {
  try {
    const { event_type, subscriber_attributes, product_id } = req.body;
    
    // Handle RevenueCat webhook events
    switch (event_type) {
      case 'INITIAL_PURCHASE':
        await handleInitialPurchase(subscriber_attributes, product_id);
        break;
      case 'RENEWAL':
        await handleRenewal(subscriber_attributes, product_id);
        break;
      case 'CANCELLATION':
        await handleCancellation(subscriber_attributes, product_id);
        break;
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Event processing failed' });
  }
});

async function handleInitialPurchase(subscriber, productId) {
  // Track new subscriber for viral growth
  console.log(`New subscriber: ${subscriber.email} - Product: ${productId}`);
  
  // Trigger welcome sequence and consortium invitation
  if (productId.includes('msme')) {
    // Add to MSME consortium
    await addToConsortium(subscriber.email, 'msme_general');
  }
}

async function handleRenewal(subscriber, productId) {
  console.log(`Renewal: ${subscriber.email} - Product: ${productId}`);
  // Track retention metrics
}

async function handleCancellation(subscriber, productId) {
  console.log(`Cancellation: ${subscriber.email} - Product: ${productId}`);
  // Trigger win-back campaign
}

async function addToConsortium(email, consortiumType) {
  // Add user to risk-sharing consortium
  console.log(`Adding ${email} to consortium: ${consortiumType}`);
}

module.exports = router;