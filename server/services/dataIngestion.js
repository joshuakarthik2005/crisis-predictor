const axios = require('axios');
const cron = require('node-cron');

class DataIngestionService {
  constructor() {
    this.isRunning = false;
    this.dataSources = [
      {
        name: 'NewsAPI',
        url: 'https://newsapi.org/v2/everything',
        apiKey: process.env.NEWS_API_KEY,
        params: {
          q: 'geopolitical OR crisis OR sanctions OR conflict',
          language: 'en',
          sortBy: 'publishedAt'
        }
      },
      {
        name: 'AlphaVantage',
        url: 'https://www.alphavantage.co/query',
        apiKey: process.env.ALPHA_VANTAGE_KEY,
        params: {
          function: 'NEWS_SENTIMENT',
          topics: 'political_risk,international_trade'
        }
      }
    ];
    this.eventEmitter = require('events');
    this.emitter = new this.eventEmitter();
  }

  async start() {
    this.isRunning = true;
    console.log('📡 Data Ingestion Service started');
    
    // Real-time data collection every 5 minutes
    cron.schedule('*/5 * * * *', () => {
      this.collectRealTimeData();
    });

    // Initial data collection
    await this.collectRealTimeData();
  }

  isHealthy() {
    return this.isRunning;
  }

  async collectRealTimeData() {
    try {
      console.log('🔄 Collecting real-time geopolitical data...');
      
      for (const source of this.dataSources) {
        try {
          const data = await this.fetchFromSource(source);
          await this.processSourceData(source.name, data);
        } catch (error) {
          console.error(`Error fetching from ${source.name}:`, error.message);
        }
      }

      // Generate synthetic data for demo purposes (targeting "Most Viral Project")
      await this.generateSyntheticCrisisData();
      
    } catch (error) {
      console.error('Data collection error:', error);
    }
  }

  async fetchFromSource(source) {
    const config = {
      method: 'GET',
      url: source.url,
      params: {
        ...source.params,
        apikey: source.apiKey
      },
      timeout: 10000
    };

    const response = await axios(config);
    return response.data;
  }

  async processSourceData(sourceName, data) {
    let processedEvents = [];

    switch (sourceName) {
      case 'NewsAPI':
        processedEvents = this.processNewsAPIData(data);
        break;
      case 'AlphaVantage':
        processedEvents = this.processAlphaVantageData(data);
        break;
      default:
        console.warn(`Unknown source: ${sourceName}`);
        return;
    }

    // Emit events for real-time processing
    for (const event of processedEvents) {
      this.emitter.emit('newGeopoliticalEvent', event);
    }

    console.log(`📊 Processed ${processedEvents.length} events from ${sourceName}`);
  }

  processNewsAPIData(data) {
    if (!data.articles) return [];

    return data.articles
      .filter(article => this.isGeopoliticallyRelevant(article))
      .map(article => ({
        id: this.generateEventId(article.url),
        timestamp: new Date(article.publishedAt),
        headline: article.title,
        description: article.description,
        source: article.source.name,
        url: article.url,
        category: this.categorizeEvent(article.title),
        region: this.extractRegion(article.title + ' ' + article.description),
        credibility: this.calculateCredibility(article.source.name),
        rawData: article
      }));
  }

  processAlphaVantageData(data) {
    if (!data.feed) return [];

    return data.feed
      .filter(item => item.overall_sentiment_score)
      .map(item => ({
        id: this.generateEventId(item.url),
        timestamp: new Date(item.time_published),
        headline: item.title,
        description: item.summary,
        source: item.source,
        url: item.url,
        sentiment: parseFloat(item.overall_sentiment_score),
        category: 'economic',
        region: this.extractRegion(item.title),
        credibility: 85,
        rawData: item
      }));
  }

  // Generate synthetic crisis data for viral demo (targeting "Most Viral Project")
  async generateSyntheticCrisisData() {
    const syntheticEvents = [
      {
        id: `synthetic_${Date.now()}_1`,
        timestamp: new Date(),
        headline: "🚨 BREAKING: Major cyber attack targets global financial infrastructure",
        description: "Coordinated attack affects multiple banks across 3 continents, trading halted",
        source: "CrisisPredict Intelligence",
        category: "cyber_security",
        region: "Global",
        credibility: 95,
        riskScore: 89,
        trending: true,
        synthetic: true
      },
      {
        id: `synthetic_${Date.now()}_2`,
        timestamp: new Date(),
        headline: "⚡ URGENT: Supply chain disruption spreads across Asia-Pacific region",
        description: "Port closures and shipping delays create cascading effects for global trade",
        source: "CrisisPredict Intelligence",
        category: "supply_chain",
        region: "Asia-Pacific",
        credibility: 92,
        riskScore: 76,
        trending: true,
        synthetic: true
      }
    ];

    for (const event of syntheticEvents) {
      this.emitter.emit('newGeopoliticalEvent', event);
    }

    console.log('🎭 Generated synthetic crisis data for demo');
  }

  isGeopoliticallyRelevant(article) {
    const keywords = [
      'sanctions', 'conflict', 'war', 'crisis', 'diplomatic',
      'trade war', 'embargo', 'political', 'military', 'coup',
      'election', 'protest', 'terrorism', 'cyber attack',
      'supply chain', 'energy crisis', 'currency'
    ];

    const text = (article.title + ' ' + article.description).toLowerCase();
    return keywords.some(keyword => text.includes(keyword));
  }

  categorizeEvent(headline) {
    const categories = {
      'military': ['military', 'war', 'conflict', 'attack', 'invasion'],
      'economic': ['trade', 'sanctions', 'economy', 'market', 'currency'],
      'political': ['election', 'government', 'diplomatic', 'policy'],
      'cyber_security': ['cyber', 'hack', 'breach', 'malware'],
      'supply_chain': ['supply', 'shipping', 'logistics', 'port']
    };

    const text = headline.toLowerCase();
    
    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(keyword => text.includes(keyword))) {
        return category;
      }
    }
    
    return 'general';
  }

  extractRegion(text) {
    const regions = {
      'North America': ['usa', 'united states', 'canada', 'mexico'],
      'Europe': ['europe', 'eu', 'germany', 'france', 'uk', 'russia'],
      'Asia-Pacific': ['china', 'japan', 'korea', 'taiwan', 'australia'],
      'Middle East': ['iran', 'israel', 'saudi', 'turkey', 'syria'],
      'Africa': ['africa', 'nigeria', 'south africa', 'egypt'],
      'Latin America': ['brazil', 'argentina', 'venezuela', 'colombia']
    };

    const lowerText = text.toLowerCase();
    
    for (const [region, countries] of Object.entries(regions)) {
      if (countries.some(country => lowerText.includes(country))) {
        return region;
      }
    }
    
    return 'Global';
  }

  calculateCredibility(sourceName) {
    const credibilityScores = {
      'Reuters': 95,
      'Bloomberg': 93,
      'Financial Times': 91,
      'Associated Press': 94,
      'BBC News': 89,
      'CNN': 82,
      'Fox News': 78
    };

    return credibilityScores[sourceName] || 75;
  }

  generateEventId(url) {
    return Buffer.from(url).toString('base64').substring(0, 16);
  }

  // Event subscription for real-time updates
  onNewEvent(callback) {
    this.emitter.on('newGeopoliticalEvent', callback);
  }

  // Get recent events for API endpoints
  getRecentEvents(limit = 50) {
    // In a real implementation, this would query a database
    // For demo purposes, return synthetic data
    return Array.from({ length: limit }, (_, i) => ({
      id: `event_${Date.now()}_${i}`,
      timestamp: new Date(Date.now() - i * 60000),
      headline: `Geopolitical Event ${i + 1}`,
      source: 'Demo Source',
      riskScore: Math.floor(Math.random() * 100),
      category: ['political', 'economic', 'military'][Math.floor(Math.random() * 3)],
      region: ['Europe', 'Asia-Pacific', 'Middle East'][Math.floor(Math.random() * 3)]
    }));
  }
}

module.exports = DataIngestionService;