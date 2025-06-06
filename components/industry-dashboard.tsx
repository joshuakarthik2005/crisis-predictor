"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Zap, Heart, Cpu, TrendingUp, Satellite, Brain, Shield } from "lucide-react"

export function IndustryDashboard() {
  const dummyIndustries = [
    { name: "Energy Transition", icon: Zap, riskScore: 78, color: "text-yellow-400", bgColor: "bg-yellow-900/20" },
    { name: "Healthcare Supply", icon: Heart, riskScore: 85, color: "text-red-400", bgColor: "bg-red-900/20" },
    { name: "Technology Sovereignty", icon: Cpu, riskScore: 73, color: "text-blue-400", bgColor: "bg-blue-900/20" },
  ]

  const dummyMetrics = {
    industriesMonitored: 12,
    riskFactors: 247,
    dataPoints: "2.3M",
    accuracy: 94,
  }

  const dummySpecializedMetrics = {
    "Renewable Project Risk": 82,
    "Grid Stability Risk": 65,
    "Carbon Policy Risk": 71,
    "Resource Availability": 58,
  }

  const dummyKeyRisks = [
    "China rare earth export restrictions affecting solar panel production",
    "EU carbon border tax implementation disrupting supply chains",
    "Russia-Ukraine conflict impacting European energy security",
    "Texas grid instability during extreme weather events",
  ]

  const dummyOpportunities = [
    "India's $20B green hydrogen initiative creating new partnerships",
    "US Inflation Reduction Act incentives for clean energy projects",
    "European REPowerEU plan accelerating renewable adoption",
    "Corporate renewable energy procurement reaching record highs",
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Industry-Specialized Risk Intelligence</h1>
          <p className="text-slate-400">Deep-dive analysis for high-stakes industries</p>
        </div>
        <Badge className="bg-purple-600 animate-pulse">🚧 Advanced Feature Coming Soon</Badge>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-600">
        <CardContent className="p-6 text-center">
          <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Industry-Specific AI Intelligence</h2>
          <p className="text-purple-200 mb-4">
            Specialized risk models for energy, healthcare, technology, and other critical industries with
            sector-specific data sources and analysis frameworks.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="text-purple-300">• Sector-Specific Models</span>
            <span className="text-purple-300">• Industry Expert Networks</span>
            <span className="text-purple-300">• Regulatory Intelligence</span>
          </div>
        </CardContent>
      </Card>

      {/* Preview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.industriesMonitored}</div>
            <div className="text-sm text-slate-400">Industries Monitored</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Satellite className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.riskFactors}</div>
            <div className="text-sm text-slate-400">Risk Factors</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.dataPoints}</div>
            <div className="text-sm text-slate-400">Data Points</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.accuracy}%</div>
            <div className="text-sm text-slate-400">Prediction Accuracy</div>
            <Progress value={dummyMetrics.accuracy} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Industry Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dummyIndustries.map((industry, index) => {
          const Icon = industry.icon
          return (
            <Card key={index} className={`${industry.bgColor} border-slate-700 opacity-60`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Icon className={`w-8 h-8 ${industry.color}`} />
                  <div>
                    <h3 className="text-white font-medium">{industry.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-slate-400">Risk Score:</span>
                      <Badge
                        className={
                          industry.riskScore > 80
                            ? "bg-red-600"
                            : industry.riskScore > 60
                              ? "bg-orange-600"
                              : "bg-yellow-600"
                        }
                      >
                        {industry.riskScore}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Specialized Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Specialized Risk Metrics (Preview)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 opacity-60">
            {Object.entries(dummySpecializedMetrics).map(([metric, value]) => (
              <div key={metric}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">{metric}</span>
                  <span className="text-white font-medium">{value}%</span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Industry Intelligence (Preview)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
              <div>
                <h4 className="text-white font-medium mb-3">Key Risks</h4>
                <div className="space-y-2">
                  {dummyKeyRisks.map((risk, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Opportunities</h4>
                <div className="space-y-2">
                  {dummyOpportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Novel Data Sources */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Satellite className="w-5 h-5" />
            <span>Novel Data Integration (Preview)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Satellite className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Satellite Intelligence</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Energy Infrastructure</span>
                  <span className="text-green-400">+12%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Supply Chain Hubs</span>
                  <span className="text-blue-400">+8%</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Academic Network</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Expert Insights</span>
                  <span className="text-white">47 New</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Research Papers</span>
                  <span className="text-white">23 Relevant</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">Regulatory Intelligence</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Policy Changes</span>
                  <span className="text-orange-400">12 Updates</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Compliance Alerts</span>
                  <span className="text-red-400">3 Critical</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
