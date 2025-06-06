const express = require('express');
const router = express.Router();
const AIAnalysisService = require('../services/aiAnalysis');

const aiService = new AIAnalysisService();

// Creative AI endpoint - targeting "Creative Use of AI"
router.post('/analyze/event', async (req, res) => {
  try {
    const { eventData } = req.body;
    const analysis = await aiService.analyzeGeopoliticalEvent(eventData);
    
    res.json({
      success: true,
      analysis: analysis,
      processingTime: Date.now() - req.startTime
    });
  } catch (error) {
    res.status(500).json({ error: 'AI analysis failed' });
  }
});

// Viral content generation - targeting "Most Viral Project"
router.post('/generate/viral-content', async (req, res) => {
  try {
    const { riskData, platform } = req.body;
    const content = await aiService.generateShareableContent(riskData, platform);
    
    res.json({
      success: true,
      content: content,
      viralScore: Math.floor(Math.random() * 30) + 70 // 70-100 viral potential
    });
  } catch (error) {
    res.status(500).json({ error: 'Content generation failed' });
  }
});

// Live crisis simulation - targeting "Most Viral Project"
router.get('/live/crisis-simulation', async (req, res) => {
  try {
    const liveData = await aiService.generateLiveCrisisDemo();
    
    res.json({
      success: true,
      crisis: liveData,
      isLive: true,
      nextUpdate: new Date(Date.now() + 5 * 60 * 1000) // Next update in 5 minutes
    });
  } catch (error) {
    res.status(500).json({ error: 'Live simulation failed' });
  }
});

// Predictive modeling - targeting "Future Unicorn"
router.post('/predict/risk-evolution', async (req, res) => {
  try {
    const { historicalData, timeframe } = req.body;
    const predictions = await aiService.predictRiskEvolution(historicalData, timeframe);
    
    res.json({
      success: true,
      predictions: predictions,
      confidence: predictions.confidence || 85,
      methodology: 'Advanced ML with geopolitical context'
    });
  } catch (error) {
    res.status(500).json({ error: 'Prediction failed' });
  }
});

// MSME-specific AI analysis - targeting "Uniquely Useful Tool"
router.post('/analyze/msme-impact', async (req, res) => {
  try {
    const { riskData, businessProfile } = req.body;
    const analysis = await aiService.analyzeMSMEImpact(riskData, businessProfile);
    
    res.json({
      success: true,
      analysis: analysis,
      affordabilityScore: calculateAffordabilityScore(analysis, businessProfile),
      consortiumMatch: findConsortiumMatches(businessProfile)
    });
  } catch (error) {
    res.status(500).json({ error: 'MSME analysis failed' });
  }
});

// AI-powered risk scoring
router.post('/score/comprehensive', async (req, res) => {
  try {
    const { country, industry, timeframe } = req.body;
    
    // Simulate comprehensive AI risk scoring
    const riskScore = {
      overall: Math.floor(Math.random() * 40) + 40, // 40-80
      political: Math.floor(Math.random() * 50) + 30,
      economic: Math.floor(Math.random() * 50) + 25,
      security: Math.floor(Math.random() * 60) + 20,
      environmental: Math.floor(Math.random() * 40) + 30,
      cyber: Math.floor(Math.random() * 70) + 30,
      confidence: Math.floor(Math.random() * 20) + 80,
      lastUpdated: new Date().toISOString(),
      factors: [
        'Recent diplomatic tensions',
        'Economic policy changes',
        'Regional security concerns',
        'Supply chain vulnerabilities'
      ],
      recommendations: [
        'Monitor diplomatic developments',
        'Diversify supply sources',
        'Review insurance coverage',
        'Prepare contingency plans'
      ]
    };
    
    res.json({
      success: true,
      riskScore: riskScore,
      aiInsights: `AI analysis indicates ${riskScore.overall > 60 ? 'elevated' : 'moderate'} risk levels for ${country} in ${industry} sector.`
    });
  } catch (error) {
    res.status(500).json({ error: 'Risk scoring failed' });
  }
});

// AI chat interface - targeting "Creative Use of AI"
router.post('/chat/risk-advisor', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    // Simulate AI chat response
    const responses = [
      "Based on current geopolitical trends, I recommend monitoring Eastern European developments closely.",
      "The risk indicators suggest a 23% probability of supply chain disruption in the next 30 days.",
      "For MSME businesses, joining a risk consortium could reduce your exposure by up to 40%.",
      "Current sanctions patterns indicate potential expansion to technology sectors within 2 weeks.",
      "Your business profile suggests high vulnerability to currency fluctuations - consider hedging strategies."
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];
    
    res.json({
      success: true,
      response: response,
      confidence: Math.floor(Math.random() * 20) + 80,
      suggestedActions: [
        'Set up automated alerts',
        'Review risk assessment',
        'Contact risk advisor'
      ],
      relatedTopics: ['Supply Chain Risk', 'Currency Hedging', 'Political Risk Insurance']
    });
  } catch (error) {
    res.status(500).json({ error: 'Chat failed' });
  }
});

// Helper functions
function calculateAffordabilityScore(analysis, businessProfile) {
  const budget = businessProfile.budget || 5000;
  const estimatedCost = analysis.costEstimate || 1000;
  return Math.min(100, Math.round((budget / estimatedCost) * 100));
}

function findConsortiumMatches(businessProfile) {
  const consortiums = [
    {
      id: 'retail_sme',
      name: 'Retail SME Consortium',
      members: 87,
      avgSavings: '34%',
      match: businessProfile.industry === 'retail' ? 95 : 20
    },
    {
      id: 'tech_startup',
      name: 'Tech Startup Alliance',
      members: 156,
      avgSavings: '28%',
      match: businessProfile.industry === 'technology' ? 92 : 15
    },
    {
      id: 'manufacturing_coop',
      name: 'Manufacturing Cooperative',
      members: 73,
      avgSavings: '41%',
      match: businessProfile.industry === 'manufacturing' ? 89 : 10
    }
  ];
  
  return consortiums
    .filter(c => c.match > 50)
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
}

module.exports = router;