"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingUp, Globe, Shield, Eye, ArrowRight } from "lucide-react"
import { GlobalMap } from "./global-map"

export function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [showCountryDetail, setShowCountryDetail] = useState(false)
  const [showPredictionDetail, setShowPredictionDetail] = useState(false)
  const [selectedPrediction, setSelectedPrediction] = useState<any>(null)

  const highRiskCountries = [
    {
      name: "Ukraine",
      risk: 95,
      trend: "+8",
      details: {
        politicalRisk: 98,
        economicRisk: 89,
        securityRisk: 97,
        reasons: [
          "Active military conflict with Russia",
          "Infrastructure destruction affecting economy",
          "Refugee crisis and population displacement",
          "International sanctions impact on trade",
          "Energy infrastructure targeted attacks",
        ],
        keyFactors: [
          "Ongoing war with Russia since February 2022",
          "GDP contracted by 35% in 2022",
          "Critical infrastructure under constant threat",
          "International aid dependency for stability",
        ],
      },
    },
    {
      name: "Russia",
      risk: 87,
      trend: "+12",
      details: {
        politicalRisk: 85,
        economicRisk: 92,
        securityRisk: 84,
        reasons: [
          "Comprehensive international sanctions regime",
          "Economic isolation from Western markets",
          "Military mobilization affecting workforce",
          "Currency volatility and inflation pressures",
          "Political opposition suppression",
        ],
        keyFactors: [
          "Over 11,000 sanctions imposed since 2022",
          "Ruble volatility and capital flight",
          "Energy export restrictions affecting revenue",
          "Increasing authoritarianism and civil unrest",
        ],
      },
    },
    {
      name: "Iran",
      risk: 78,
      trend: "+5",
      details: {
        politicalRisk: 82,
        economicRisk: 76,
        securityRisk: 75,
        reasons: [
          "Nuclear program tensions with international community",
          "Widespread civil unrest and protests",
          "Economic sanctions limiting trade opportunities",
          "Regional proxy conflicts involvement",
          "Currency devaluation and inflation",
        ],
        keyFactors: [
          "Nuclear enrichment beyond JCPOA limits",
          "Women's rights protests since September 2022",
          "Oil export restrictions affecting economy",
          "Regional tensions with Israel and Saudi Arabia",
        ],
      },
    },
    {
      name: "China",
      risk: 52,
      trend: "+3",
      details: {
        politicalRisk: 45,
        economicRisk: 58,
        securityRisk: 53,
        reasons: [
          "Taiwan tensions and military exercises",
          "Trade disputes with Western countries",
          "COVID-19 policy impacts on economy",
          "Property sector debt crisis",
          "Technology transfer restrictions",
        ],
        keyFactors: [
          "Increased military activity around Taiwan",
          "Youth unemployment reaching 20%+",
          "Real estate sector representing 25% of GDP under stress",
          "Technology decoupling with US and allies",
        ],
      },
    },
  ]

  const criticalPredictions = [
    {
      id: 1,
      title: "Russia-Ukraine Conflict Escalation",
      probability: 78,
      timeframe: "Next 45 days",
      impact: "$2.3B",
      details: {
        description:
          "Intelligence indicates potential for significant escalation in the Russia-Ukraine conflict within the next 45 days, with implications for global energy markets and supply chains.",
        keyIndicators: [
          "Increased military buildup along contested borders",
          "Diplomatic communications breakdown",
          "Energy infrastructure targeting patterns",
          "International aid and weapons shipment schedules",
        ],
        potentialTriggers: [
          "NATO weapons delivery announcements",
          "Russian mobilization expansion",
          "Critical infrastructure attacks",
          "International sanctions escalation",
        ],
        globalImpacts: [
          "Energy prices could spike 15-25%",
          "Grain exports further disrupted",
          "European manufacturing slowdown",
          "Increased refugee flows to neighboring countries",
        ],
        businessImplications: [
          "Supply chain disruptions in Eastern Europe",
          "Energy cost increases for manufacturing",
          "Currency volatility affecting international trade",
          "Insurance premiums rising for European operations",
        ],
        recommendedActions: [
          "Review and diversify energy suppliers",
          "Assess supply chain vulnerabilities in affected regions",
          "Consider hedging strategies for commodity exposure",
          "Update crisis communication plans",
        ],
      },
    },
    {
      id: 2,
      title: "China-Taiwan Military Exercise",
      probability: 41,
      timeframe: "Next 60 days",
      impact: "$890M",
      details: {
        description:
          "Satellite imagery and intelligence sources suggest China may conduct large-scale military exercises around Taiwan, potentially disrupting semiconductor supply chains and regional trade.",
        keyIndicators: [
          "Military vessel movements in South China Sea",
          "Increased rhetoric from Beijing officials",
          "Taiwan's defensive preparations",
          "US naval presence adjustments",
        ],
        potentialTriggers: [
          "High-level US-Taiwan diplomatic meetings",
          "Taiwan independence statements",
          "US arms sales announcements",
          "Regional alliance strengthening activities",
        ],
        globalImpacts: [
          "Semiconductor shortage affecting tech industry",
          "Shipping route disruptions in Asia-Pacific",
          "Stock market volatility in tech sector",
          "Increased military spending in region",
        ],
        businessImplications: [
          "Technology manufacturing delays",
          "Increased component costs",
          "Supply chain rerouting expenses",
          "Market access restrictions potential",
        ],
        recommendedActions: [
          "Diversify semiconductor suppliers",
          "Build inventory buffers for critical components",
          "Develop alternative shipping routes",
          "Monitor Taiwan-dependent supply chains",
        ],
      },
    },
  ]

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country)
    setShowCountryDetail(true)
  }

  const handlePredictionClick = (prediction: any) => {
    setSelectedPrediction(prediction)
    setShowPredictionDetail(true)
  }

  return (
    <div className="space-y-6">
      {/* Global Risk Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Global Risk Index</p>
                <p className="text-2xl font-bold text-white">67.3</p>
              </div>
              <Globe className="w-8 h-8 text-blue-500" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-red-400 mr-1" />
              <span className="text-red-400 text-sm">+2.8 this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Crises</p>
                <p className="text-2xl font-bold text-white">7</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-slate-400 text-sm mt-2">Requiring monitoring</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Companies at Risk</p>
                <p className="text-2xl font-bold text-white">2,845</p>
              </div>
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-slate-400 text-sm mt-2">Fortune 500 companies</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Prediction Accuracy</p>
                <p className="text-2xl font-bold text-white">87%</p>
              </div>
              <Eye className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-slate-400 text-sm mt-2">Last 90 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Global Risk Map */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Global Risk Heat Map</CardTitle>
        </CardHeader>
        <CardContent>
          <GlobalMap onCountrySelect={setSelectedCountry} selectedCountry={selectedCountry} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Highest Risk Countries */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Highest Risk Countries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {highRiskCountries.map((country, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors"
                onClick={() => handleCountryClick(country)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-white font-medium">{country.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">{country.risk}</span>
                  <span className="text-red-400 text-sm">{country.trend}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Critical Predictions */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Critical Predictions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {criticalPredictions.map((prediction) => (
              <div
                key={prediction.id}
                className="border border-slate-700 rounded-lg p-4 hover:border-slate-600 cursor-pointer transition-colors"
                onClick={() => handlePredictionClick(prediction)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-medium">{prediction.title}</h4>
                  <Badge className="bg-red-600">{prediction.probability}%</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>{prediction.timeframe}</span>
                  <span>Impact: {prediction.impact}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Country Detail Modal */}
      {showCountryDetail && selectedCountry && (
        <Card className="bg-slate-800 border-blue-600 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{selectedCountry.name} Risk Analysis</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowCountryDetail(false)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedCountry.details.politicalRisk}</div>
                <div className="text-sm text-slate-400">Political Risk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedCountry.details.economicRisk}</div>
                <div className="text-sm text-slate-400">Economic Risk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedCountry.details.securityRisk}</div>
                <div className="text-sm text-slate-400">Security Risk</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Key Risk Factors</h4>
              <ul className="space-y-2">
                {selectedCountry.details.reasons.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Critical Factors</h4>
              <ul className="space-y-2">
                {selectedCountry.details.keyFactors.map((factor: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Prediction Detail Modal */}
      {showPredictionDetail && selectedPrediction && (
        <Card className="bg-slate-800 border-orange-600 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{selectedPrediction.title}</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowPredictionDetail(false)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedPrediction.probability}%</div>
                <div className="text-sm text-slate-400">Probability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedPrediction.timeframe}</div>
                <div className="text-sm text-slate-400">Timeframe</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedPrediction.impact}</div>
                <div className="text-sm text-slate-400">Potential Impact</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Description</h4>
              <p className="text-slate-300 text-sm">{selectedPrediction.details.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-medium mb-3">Key Indicators</h4>
                <ul className="space-y-2">
                  {selectedPrediction.details.keyIndicators.map((indicator: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{indicator}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium mb-3">Potential Triggers</h4>
                <ul className="space-y-2">
                  {selectedPrediction.details.potentialTriggers.map((trigger: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{trigger}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Business Implications</h4>
              <ul className="space-y-2">
                {selectedPrediction.details.businessImplications.map((implication: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{implication}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Recommended Actions</h4>
              <ul className="space-y-2">
                {selectedPrediction.details.recommendedActions.map((action: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
