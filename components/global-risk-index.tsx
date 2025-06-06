"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, TrendingDown, AlertTriangle, Globe, Calendar, Target, ArrowRight } from "lucide-react"

const historicalData = [
  { month: "Jan", risk: 62.1 },
  { month: "Feb", risk: 58.7 },
  { month: "Mar", risk: 71.2 },
  { month: "Apr", risk: 69.8 },
  { month: "May", risk: 65.4 },
  { month: "Jun", risk: 67.3 },
]

const categoryRisks = [
  { category: "Political", score: 72, change: +5.2, color: "bg-red-500" },
  { category: "Economic", score: 64, change: -2.1, color: "bg-orange-500" },
  { category: "Security", score: 71, change: +8.7, color: "bg-red-600" },
  { category: "Environmental", score: 58, change: +1.3, color: "bg-yellow-500" },
]

const topContributors = [
  {
    event: "Ukraine-Russia Conflict",
    impact: +8.5,
    region: "Europe",
    details: {
      description:
        "The ongoing conflict between Ukraine and Russia continues to be the largest contributor to global geopolitical risk, affecting energy markets, food security, and international relations.",
      keyFactors: [
        "Energy infrastructure attacks disrupting European supply",
        "Grain export blockades affecting global food prices",
        "International sanctions creating economic fragmentation",
        "Military escalation risks spreading to NATO territories",
      ],
      globalImpacts: [
        "Energy prices increased 40% since conflict began",
        "Wheat prices up 25% affecting food security globally",
        "European manufacturing slowdown due to energy costs",
        "Increased defense spending across NATO countries",
      ],
      timeline: "Ongoing since February 2022, no clear resolution in sight",
    },
  },
  {
    event: "China-Taiwan Tensions",
    impact: +6.2,
    region: "Asia-Pacific",
    details: {
      description:
        "Rising tensions between China and Taiwan, exacerbated by increased military exercises and diplomatic pressure, pose significant risks to global semiconductor supply chains and regional stability.",
      keyFactors: [
        "Increased Chinese military exercises around Taiwan",
        "US-Taiwan diplomatic and military cooperation",
        "Semiconductor industry concentration in Taiwan",
        "Regional alliance building in response to tensions",
      ],
      globalImpacts: [
        "Semiconductor supply chain vulnerabilities exposed",
        "Technology sector facing potential disruptions",
        "Regional military buildup increasing tensions",
        "Trade route security concerns in South China Sea",
      ],
      timeline: "Tensions escalating since 2020, potential flashpoints in 2024",
    },
  },
  {
    event: "Middle East Instability",
    impact: +4.8,
    region: "Middle East",
    details: {
      description:
        "Ongoing conflicts in Syria, Yemen, and tensions between Iran and Israel continue to create regional instability with global implications for energy markets and security.",
      keyFactors: [
        "Iran nuclear program advancement",
        "Israel-Palestine conflict escalation",
        "Regional proxy wars and sectarian tensions",
        "Energy infrastructure vulnerability",
      ],
      globalImpacts: [
        "Oil price volatility affecting global markets",
        "Refugee flows creating humanitarian crises",
        "Terrorism risks and security concerns",
        "Regional alliance shifts affecting global balance",
      ],
      timeline: "Multiple ongoing conflicts with varying intensities",
    },
  },
  {
    event: "US-China Trade Relations",
    impact: +3.1,
    region: "Global",
    details: {
      description:
        "Continued trade tensions and technology competition between the US and China create uncertainty for global supply chains and economic cooperation.",
      keyFactors: [
        "Technology transfer restrictions and export controls",
        "Tariff policies affecting bilateral trade",
        "Supply chain decoupling initiatives",
        "Competition for global influence and alliances",
      ],
      globalImpacts: [
        "Global supply chain reorganization costs",
        "Technology sector fragmentation",
        "Increased costs for businesses operating globally",
        "Pressure on allies to choose sides",
      ],
      timeline: "Ongoing since 2018, likely to continue regardless of leadership changes",
    },
  },
]

const scenarios = [
  {
    name: "Optimistic",
    probability: 25,
    risk: 58.2,
    description: "De-escalation in major conflicts",
    details: {
      keyAssumptions: [
        "Negotiated ceasefire in Ukraine within 6 months",
        "China-Taiwan tensions reduced through diplomatic engagement",
        "Iran nuclear deal revival",
        "US-China trade relationship stabilization",
      ],
      likelihood: "Low probability due to entrenched positions",
      implications: [
        "Energy prices normalize to pre-conflict levels",
        "Global supply chains stabilize and costs decrease",
        "Increased international cooperation on global challenges",
        "Reduced defense spending allows focus on development",
      ],
      risks: [
        "Temporary nature of agreements",
        "Underlying issues remain unresolved",
        "Potential for rapid deterioration if agreements fail",
      ],
    },
  },
  {
    name: "Current Trends",
    probability: 50,
    risk: 69.8,
    description: "Status quo continues",
    details: {
      keyAssumptions: [
        "Ukraine conflict continues at current intensity",
        "China-Taiwan tensions remain elevated but stable",
        "Middle East conflicts persist without major escalation",
        "US-China competition continues with limited cooperation",
      ],
      likelihood: "Most likely scenario based on current trajectories",
      implications: [
        "Continued elevated energy and commodity prices",
        "Supply chain vulnerabilities persist",
        "Increased global fragmentation and bloc formation",
        "Sustained high defense spending globally",
      ],
      risks: [
        "Gradual escalation in multiple theaters",
        "Economic costs of sustained tensions",
        "Potential for miscalculation leading to escalation",
      ],
    },
  },
  {
    name: "Pessimistic",
    probability: 25,
    risk: 78.5,
    description: "Multiple crisis escalation",
    details: {
      keyAssumptions: [
        "Ukraine conflict spreads to NATO territories",
        "China initiates military action against Taiwan",
        "Iran-Israel conflict escalates to regional war",
        "Global economic recession triggered by multiple crises",
      ],
      likelihood: "Significant risk due to interconnected nature of conflicts",
      implications: [
        "Global economic recession and market crashes",
        "Massive supply chain disruptions worldwide",
        "Energy and food crises affecting billions",
        "Potential for wider military conflicts",
      ],
      risks: [
        "Nuclear escalation possibilities",
        "Complete breakdown of international order",
        "Humanitarian crises on unprecedented scale",
      ],
    },
  },
]

export function GlobalRiskIndex() {
  const [selectedContributor, setSelectedContributor] = useState<any>(null)
  const [selectedScenario, setSelectedScenario] = useState<any>(null)
  const [showContributorDetail, setShowContributorDetail] = useState(false)
  const [showScenarioDetail, setShowScenarioDetail] = useState(false)

  const currentRisk = 67.3
  const riskChange = +2.8
  const lastUpdated = "2 minutes ago"

  const handleContributorClick = (contributor: any) => {
    setSelectedContributor(contributor)
    setShowContributorDetail(true)
  }

  const handleScenarioClick = (scenario: any) => {
    setSelectedScenario(scenario)
    setShowScenarioDetail(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Globe className="w-8 h-8 text-blue-400" />
            Global Risk Index™
          </h1>
          <p className="text-slate-400 mt-1">Real-time worldwide stability assessment</p>
        </div>
        <Badge variant="outline" className="text-green-400 border-green-400">
          Live • Updated {lastUpdated}
        </Badge>
      </div>

      {/* Main Risk Score */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            Current Global Risk Score
            <div className="flex items-center gap-2">
              {riskChange > 0 ? (
                <TrendingUp className="w-5 h-5 text-red-400" />
              ) : (
                <TrendingDown className="w-5 h-5 text-green-400" />
              )}
              <span className={`text-sm ${riskChange > 0 ? "text-red-400" : "text-green-400"}`}>
                {riskChange > 0 ? "+" : ""}
                {riskChange}
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">{currentRisk}</div>
            <div className="text-slate-400 mb-4">out of 100 (Higher = More Risk)</div>
            <Progress value={currentRisk} className="h-3 mb-4" />
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-green-400 font-semibold">0-33</div>
                <div className="text-slate-400">Low Risk</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-semibold">34-66</div>
                <div className="text-slate-400">Moderate Risk</div>
              </div>
              <div className="text-center">
                <div className="text-red-400 font-semibold">67-100</div>
                <div className="text-slate-400">High Risk</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Trend */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            6-Month Historical Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" domain={[50, 80]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
              />
              <Line
                type="monotone"
                dataKey="risk"
                stroke="#EF4444"
                strokeWidth={3}
                dot={{ fill: "#EF4444", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Breakdown */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Risk Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryRisks.map((category) => (
                <div key={category.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="text-white font-medium">{category.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">{category.score}</span>
                    <span className={`text-sm ${category.change > 0 ? "text-red-400" : "text-green-400"}`}>
                      {category.change > 0 ? "+" : ""}
                      {category.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Contributors */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Top Risk Contributors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topContributors.map((contributor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 cursor-pointer transition-colors"
                  onClick={() => handleContributorClick(contributor)}
                >
                  <div>
                    <div className="text-white font-medium">{contributor.event}</div>
                    <div className="text-slate-400 text-sm">{contributor.region}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-red-400 font-bold">+{contributor.impact}</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Predictive Scenarios */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="w-5 h-5" />
            90-Day Predictive Scenarios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="p-4 bg-slate-700 rounded-lg hover:bg-slate-600 cursor-pointer transition-colors"
                onClick={() => handleScenarioClick(scenario)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{scenario.name}</h3>
                  <Badge variant="outline">{scenario.probability}%</Badge>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{scenario.risk}</div>
                <p className="text-slate-400 text-sm mb-3">{scenario.description}</p>
                <div className="flex items-center justify-between">
                  <Progress value={scenario.risk} className="h-2 flex-1 mr-2" />
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Methodology */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Methodology & Data Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Calculation Method</h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• GDP-weighted country risk aggregation</li>
                <li>• Real-time event impact integration</li>
                <li>• 7-day rolling average for stability</li>
                <li>• Peer-reviewed academic validation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Data Sources (50+)</h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Reuters, Bloomberg, AP News</li>
                <li>• World Bank, IMF Economic Data</li>
                <li>• Satellite imagery & Social sentiment</li>
                <li>• Academic research & Expert analysis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contributor Detail Modal */}
      {showContributorDetail && selectedContributor && (
        <Card className="bg-slate-800 border-red-600 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{selectedContributor.event} - Detailed Analysis</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowContributorDetail(false)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">+{selectedContributor.impact}</div>
                <div className="text-sm text-slate-400">Risk Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedContributor.region}</div>
                <div className="text-sm text-slate-400">Primary Region</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Ongoing</div>
                <div className="text-sm text-slate-400">Status</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Description</h4>
              <p className="text-slate-300 text-sm">{selectedContributor.details.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-medium mb-3">Key Factors</h4>
                <ul className="space-y-2">
                  {selectedContributor.details.keyFactors.map((factor: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium mb-3">Global Impacts</h4>
                <ul className="space-y-2">
                  {selectedContributor.details.globalImpacts.map((impact: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700 rounded p-3">
              <h4 className="text-blue-300 font-medium mb-2">Timeline</h4>
              <p className="text-blue-200 text-sm">{selectedContributor.details.timeline}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Scenario Detail Modal */}
      {showScenarioDetail && selectedScenario && (
        <Card className="bg-slate-800 border-purple-600 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{selectedScenario.name} Scenario - Detailed Analysis</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowScenarioDetail(false)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedScenario.probability}%</div>
                <div className="text-sm text-slate-400">Probability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedScenario.risk}</div>
                <div className="text-sm text-slate-400">Risk Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">90 Days</div>
                <div className="text-sm text-slate-400">Timeframe</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Scenario Description</h4>
              <p className="text-slate-300 text-sm">{selectedScenario.description}</p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Key Assumptions</h4>
              <ul className="space-y-2">
                {selectedScenario.details.keyAssumptions.map((assumption: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{assumption}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-medium mb-3">Implications</h4>
                <ul className="space-y-2">
                  {selectedScenario.details.implications.map((implication: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{implication}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-medium mb-3">Key Risks</h4>
                <ul className="space-y-2">
                  {selectedScenario.details.risks.map((risk: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-700 rounded p-3">
              <h4 className="text-purple-300 font-medium mb-2">Likelihood Assessment</h4>
              <p className="text-purple-200 text-sm">{selectedScenario.details.likelihood}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
