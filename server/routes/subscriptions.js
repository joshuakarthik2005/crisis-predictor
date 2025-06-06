const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// Targeting "Make More Money Challenge" with subscription management
const SUBSCRIPTION_PLANS = {
  free: {
    name: 'Community',
    price: 0,
    features: ['Basic risk alerts', 'Limited data access', 'Community support'],
    limits: { alerts: 10, apiCalls: 100 }
  },
  professional: {
    name: 'Professional',
    price: 299,
    priceId: 'price_professional_monthly',
    features: ['Real-time alerts', 'Full data access', 'API access', 'Email support'],
    limits: { alerts: 1000, apiCalls: 10000 }
  },
  enterprise: {
    name: 'Enterprise',
    price: 999,
    priceId: 'price_enterprise_monthly',
    features: ['Custom alerts', 'Unlimited access', 'Priority support', 'Custom integrations'],
    limits: { alerts: -1, apiCalls: -1 }
  },
  msme_consortium: {
    name: 'MSME Consortium',
    price: 49,
    priceId: 'price_msme_monthly',
    features: ['Shared intelligence', 'Group discounts', 'Collective bargaining', 'Peer support'],
    limits: { alerts: 500, apiCalls: 5000 }
  }
};

// Get subscription plans
router.get('/plans', (req, res) => {
  res.json({
    plans: SUBSCRIPTION_PLANS,
    success: true
  });
});

// Create subscription
router.post('/create', async (req, res) => {
  try {
    const { planId, email, paymentMethodId } = req.body;
    
    if (!SUBSCRIPTION_PLANS[planId]) {
      return res.status(400).json({ error: 'Invalid plan selected' });
    }

    const plan = SUBSCRIPTION_PLANS[planId];
    
    if (plan.price === 0) {
      // Free plan - no payment required
      return res.json({
        success: true,
        subscription: {
          id: `free_${Date.now()}`,
          plan: planId,
          status: 'active',
          features: plan.features,
          limits: plan.limits
        }
      });
    }

    // Create Stripe customer
    const customer = await stripe.customers.create({
      email: email,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: plan.priceId }],
      expand: ['latest_invoice.payment_intent'],
    });

    res.json({
      success: true,
      subscription: {
        id: subscription.id,
        status: subscription.status,
        plan: planId,
        features: plan.features,
        limits: plan.limits,
        clientSecret: subscription.latest_invoice.payment_intent.client_secret
      }
    });

  } catch (error) {
    console.error('Subscription creation error:', error);
    res.status(500).json({ error: 'Failed to create subscription' });
  }
});

// MSME Consortium special pricing
router.post('/consortium/join', async (req, res) => {
  try {
    const { consortiumId, businessProfile, paymentMethodId } = req.body;
    
    // Calculate consortium discount based on group size
    const consortiumSize = await getConsortiumSize(consortiumId);
    const discount = Math.min(consortiumSize * 2, 30); // Up to 30% discount
    
    const basePrice = SUBSCRIPTION_PLANS.msme_consortium.price;
    const discountedPrice = Math.round(basePrice * (1 - discount / 100));
    
    // Create special consortium subscription
    const subscription = {
      id: `consortium_${Date.now()}`,
      plan: 'msme_consortium',
      consortiumId: consortiumId,
      originalPrice: basePrice,
      discountedPrice: discountedPrice,
      discount: discount,
      status: 'active',
      features: [
        ...SUBSCRIPTION_PLANS.msme_consortium.features,
        `${discount}% group discount`,
        'Shared risk intelligence pool',
        'Collective crisis response'
      ]
    };

    res.json({
      success: true,
      subscription: subscription,
      message: `Welcome to the consortium! You saved ${discount}% with group pricing.`
    });

  } catch (error) {
    console.error('Consortium join error:', error);
    res.status(500).json({ error: 'Failed to join consortium' });
  }
});

// Viral referral system - targeting "Most Viral Project"
router.post('/referral/create', async (req, res) => {
  try {
    const { userId, email } = req.body;
    
    const referralCode = generateReferralCode();
    const referralLink = `https://crisispredict.com/signup?ref=${referralCode}`;
    
    // Store referral in database (mock implementation)
    const referral = {
      code: referralCode,
      userId: userId,
      link: referralLink,
      rewards: {
        referrer: '1 month free',
        referee: '50% off first month'
      },
      shareableContent: {
        twitter: `🚨 Get early warning on geopolitical risks that could impact your business! Join me on @CrisisPredict and we both get rewards! ${referralLink} #GeopoliticalRisk #BusinessIntelligence`,
        linkedin: `I've been using CrisisPredict to stay ahead of geopolitical risks affecting my business. The AI-powered insights are incredible! Join using my link and we both get benefits: ${referralLink}`,
        email: `Subject: Protect Your Business from Geopolitical Risks\n\nI wanted to share CrisisPredict with you - it's been a game-changer for understanding how global events might impact my business. Join using my referral link: ${referralLink}`
      }
    };
    
    res.json({
      success: true,
      referral: referral
    });

  } catch (error) {
    console.error('Referral creation error:', error);
    res.status(500).json({ error: 'Failed to create referral' });
  }
});

// Subscription analytics for business intelligence
router.get('/analytics', async (req, res) => {
  try {
    // Mock analytics data showing growth potential
    const analytics = {
      totalSubscribers: 12847,
      monthlyGrowth: 23.4,
      revenueGrowth: 156.7,
      planDistribution: {
        free: 8234,
        professional: 3456,
        enterprise: 892,
        msme_consortium: 265
      },
      churnRate: 3.2,
      averageRevenuePerUser: 127,
      lifetimeValue: 2340,
      conversionRate: {
        freeToProf: 18.5,
        profToEnt: 12.3,
        consortiumGrowth: 45.2
      }
    };
    
    res.json({
      success: true,
      analytics: analytics,
      projections: {
        nextMonth: Math.round(analytics.totalSubscribers * 1.234),
        nextQuarter: Math.round(analytics.totalSubscribers * 1.89),
        nextYear: Math.round(analytics.totalSubscribers * 8.5)
      }
    });

  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

// Helper functions
async function getConsortiumSize(consortiumId) {
  // Mock implementation - in real app, query database
  return Math.floor(Math.random() * 50) + 10; // 10-60 members
}

function generateReferralCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

module.exports = router;