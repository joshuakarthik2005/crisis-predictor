"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Cpu, Target, BarChart3, TrendingUp } from "lucide-react"

export function DecisionSupport() {
  const dummyMetrics = {
    recommendations: 47,
    accuracy: 94,
    timesSaved: "2.3hrs",
    decisions: 156,
  }

  const dummyRecommendations = [
    { action: "Diversify Suppliers", priority: "Critical", confidence: 94, cost: "$2.3M", timeToImplement: "45 days" },
    { action: "Increase Inventory", priority: "High", confidence: 89, cost: "$4.1M", timeToImplement: "30 days" },
    { action: "Currency Hedging", priority: "Medium", confidence: 91, cost: "$800K", timeToImplement: "15 days" },
  ]

  const dummyScenarios = [
    { name: "Supply Chain Disruption", probability: 78, impact: "High" },
    { name: "Trade War Escalation", probability: 45, impact: "Medium" },
    { name: "Currency Crisis", probability: 62, impact: "High" },
  ]

  const dummyDigitalTwin = {
    operationalEfficiency: 87,
    riskExposure: 34,
    costOptimization: 76,
    complianceScore: 92,
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Interactive Decision Support</h1>
          <p className="text-slate-400">AI-powered recommendations and digital twin simulation</p>
        </div>
        <Badge className="bg-cyan-600 animate-pulse">🚧 Advanced Feature Coming Soon</Badge>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-600">
        <CardContent className="p-6 text-center">
          <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">AI-Powered Decision Engine</h2>
          <p className="text-cyan-200 mb-4">
            Intelligent recommendations, digital twin simulations, and automated contingency planning to support
            critical business decisions in uncertain environments.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="text-cyan-300">• AI Recommendations</span>
            <span className="text-cyan-300">• Digital Twin Simulation</span>
            <span className="text-cyan-300">• Automated Planning</span>
          </div>
        </CardContent>
      </Card>

      {/* Preview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.recommendations}</div>
            <div className="text-sm text-slate-400">AI Recommendations</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.accuracy}%</div>
            <div className="text-sm text-slate-400">Prediction Accuracy</div>
            <Progress value={dummyMetrics.accuracy} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.timesSaved}</div>
            <div className="text-sm text-slate-400">Avg Time Saved</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Cpu className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.decisions}</div>
            <div className="text-sm text-slate-400">Decisions Supported</div>
          </CardContent>
        </Card>
      </div>

      {/* Sample Recommendations */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">AI Recommendations (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dummyRecommendations.map((rec, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg opacity-60">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge
                      className={
                        rec.priority === "Critical"
                          ? "bg-red-600"
                          : rec.priority === "High"
                            ? "bg-orange-600"
                            : "bg-yellow-600"
                      }
                    >
                      {rec.priority}
                    </Badge>
                    <span className="text-white font-medium">{rec.action}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span>Cost: {rec.cost}</span>
                    <span>Timeline: {rec.timeToImplement}</span>
                    <span>Confidence: {rec.confidence}%</span>
                  </div>
                </div>
                <Progress value={rec.confidence} className="w-24" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario Selection */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Risk Scenarios (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dummyScenarios.map((scenario, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 opacity-60">
                <h4 className="text-white font-medium mb-2">{scenario.name}</h4>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-slate-400">Probability: {scenario.probability}%</div>
                  <Badge className={scenario.impact === "High" ? "bg-red-600" : "bg-orange-600"}>
                    {scenario.impact}
                  </Badge>
                </div>
                <Progress value={scenario.probability} className="mt-2 h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Digital Twin Preview */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span>Digital Twin Simulation (Preview)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dummyDigitalTwin.operationalEfficiency}%</div>
              <div className="text-sm text-slate-400">Operational Efficiency</div>
              <Progress value={dummyDigitalTwin.operationalEfficiency} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dummyDigitalTwin.riskExposure}%</div>
              <div className="text-sm text-slate-400">Risk Exposure</div>
              <Progress value={dummyDigitalTwin.riskExposure} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dummyDigitalTwin.costOptimization}%</div>
              <div className="text-sm text-slate-400">Cost Optimization</div>
              <Progress value={dummyDigitalTwin.costOptimization} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dummyDigitalTwin.complianceScore}%</div>
              <div className="text-sm text-slate-400">Compliance Score</div>
              <Progress value={dummyDigitalTwin.complianceScore} className="mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automated Contingency Planning */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Target className="w-5 h-5 text-orange-400" />
            <span>Automated Contingency Planning (Preview)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-60">
            <div className="bg-slate-800 rounded p-3">
              <div className="text-white font-medium">Supply Chain Response</div>
              <div className="text-sm text-slate-400">12 actions • 8 completed</div>
              <Progress value={67} className="mt-2 h-2" />
            </div>
            <div className="bg-slate-800 rounded p-3">
              <div className="text-white font-medium">Trade Route Contingency</div>
              <div className="text-sm text-slate-400">8 actions • 0 completed</div>
              <Progress value={0} className="mt-2 h-2" />
            </div>
            <div className="bg-slate-800 rounded p-3">
              <div className="text-white font-medium">Energy Crisis Response</div>
              <div className="text-sm text-slate-400">15 actions • 15 completed</div>
              <Progress value={100} className="mt-2 h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
