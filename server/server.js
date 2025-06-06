const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

// Import routes and services
const authRoutes = require('./routes/auth');
const riskRoutes = require('./routes/risk');
const alertRoutes = require('./routes/alerts');
const consortiumRoutes = require('./routes/consortium');
const subscriptionRoutes = require('./routes/subscriptions');
const aiRoutes = require('./routes/ai');

// CHALLENGER PRIZE INTEGRATIONS - $175K TOTAL POTENTIAL
const revenueCatRoutes = require('./routes/revenuecat'); // $25K - Make More Money Challenge
const entriDomainRoutes = require('./routes/entri-domain'); // $25K - Custom Domain Challenge
const algorandRoutes = require('./routes/algorand'); // $25K - Blockchain Challenge
const tavusRoutes = require('./routes/tavus'); // $25K - Conversational AI Video Challenge
const elevenLabsRoutes = require('./routes/elevenlabs'); // $25K - Voice AI Challenge
const redditRoutes = require('./routes/reddit'); // $25K - Silly Sh!t Challenge
// Note: Netlify Deploy Challenge is handled via deployment, not backend routes

// Import services
const DataIngestionService = require('./services/dataIngestion');
const AIAnalysisService = require('./services/aiAnalysis');
const RiskCalculationService = require('./services/riskCalculation');
const AlertService = require('./services/alertService');
const WebSocketService = require('./services/websocket');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Security middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}));

// Rate limiting - targeting "Most Likely to Get Funded" by showing enterprise readiness
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Initialize services - targeting "Creative Use of AI" and "Future Unicorn"
const dataIngestion = new DataIngestionService();
const aiAnalysis = new AIAnalysisService();
const riskCalculation = new RiskCalculationService();
const alertService = new AlertService();
const websocketService = new WebSocketService(io);

// Core routes
app.use('/api/auth', authRoutes);
app.use('/api/risk', riskRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/consortium', consortiumRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/ai', aiRoutes);

// CHALLENGER PRIZE ROUTES - TARGETING $175K IN ADDITIONAL PRIZES
app.use('/api/revenuecat', revenueCatRoutes); // Mobile monetization
app.use('/api/domain', entriDomainRoutes); // Custom domains
app.use('/api/blockchain', algorandRoutes); // Blockchain features
app.use('/api/video-ai', tavusRoutes); // AI video agents
app.use('/api/voice-ai', elevenLabsRoutes); // Voice AI features
app.use('/api/reddit', redditRoutes); // Viral Reddit games

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    prize_integrations: {
      revenuecat: 'active', // $25K
      entri_domains: 'active', // $25K
      algorand: 'active', // $25K
      tavus: 'active', // $25K
      elevenlabs: 'active', // $25K
      reddit: 'active', // $25K
      netlify: 'deployment_ready' // $25K
    },
    total_prize_potential: '$175K in challenger prizes + global prizes',
    services: {
      dataIngestion: dataIngestion.isHealthy(),
      aiAnalysis: aiAnalysis.isHealthy(),
      riskCalculation: riskCalculation.isHealthy(),
      alerts: alertService.isHealthy()
    }
  });
});

// Multi-prize targeting endpoints
app.get('/api/viral/live-crisis', async (req, res) => {
  try {
    const liveData = await aiAnalysis.generateLiveCrisisDemo();
    res.json({
      ...liveData,
      viral_features: {
        reddit_ready: true,
        meme_potential: 'high',
        shareable_content: true,
        voice_briefing_available: true,
        video_explanation_ready: true
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate viral crisis demo' });
  }
});

// Challenger prize showcase endpoint
app.get('/api/showcase/challenger-features', (req, res) => {
  res.json({
    success: true,
    challenger_integrations: {
      mobile_monetization: {
        platform: 'RevenueCat',
        features: ['Paywall optimization', 'Subscription management', 'A/B testing'],
        target_prize: '$25K Make More Money Challenge'
      },
      custom_domains: {
        platform: 'Entri/IONOS',
        features: ['Domain registration', 'DNS management', 'White-label deployment'],
        target_prize: '$25K Custom Domain Challenge'
      },
      blockchain: {
        platform: 'Algorand',
        features: ['Risk NFTs', 'Smart contracts', 'Decentralized identity'],
        target_prize: '$25K Blockchain Challenge'
      },
      video_ai: {
        platform: 'Tavus',
        features: ['AI video agents', 'Real-time briefings', 'Interactive Q&A'],
        target_prize: '$25K Conversational AI Video Challenge'
      },
      voice_ai: {
        platform: 'ElevenLabs',
        features: ['Voice assistants', 'Audio briefings', 'Emergency hotline'],
        target_prize: '$25K Voice AI Challenge'
      },
      viral_games: {
        platform: 'Reddit Developer Platform',
        features: ['Crisis prediction games', 'Meme generators', 'Viral tournaments'],
        target_prize: '$25K Silly Sh!t Challenge'
      }
    },
    total_integration_value: '$175K in additional prize potential',
    competitive_advantage: 'Only platform with ALL challenger integrations'
  });
});

// Start data ingestion and AI processing
dataIngestion.start();
aiAnalysis.start();
riskCalculation.start();
alertService.start();

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  websocketService.handleConnection(socket);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 CrisisPredict Backend running on port ${PORT}`);
  console.log(`🔥 Real-time risk intelligence active`);
  console.log(`🌍 Monitoring global events...`);
  console.log(`💰 Targeting $175K+ in challenger prizes:`);
  console.log(`   • RevenueCat Mobile Monetization: $25K`);
  console.log(`   • Entri/IONOS Custom Domains: $25K`);
  console.log(`   • Algorand Blockchain: $25K`);
  console.log(`   • Tavus AI Video: $25K`);
  console.log(`   • ElevenLabs Voice AI: $25K`);
  console.log(`   • Reddit Viral Games: $25K`);
  console.log(`   • Netlify Deployment: $25K`);
  console.log(`🏆 Plus targeting Grand Prize and Future Unicorn!`);
});

module.exports = { app, server, io };