"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, AlertTriangle, DollarSign, Target, Brain, BarChart3, Bell, Eye } from "lucide-react"
import { predictions } from "@/lib/sample-data"

export function PredictionPanel() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [confidenceFilter, setConfidenceFilter] = useState(0)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showAlertModal, setShowAlertModal] = useState(false)
  const [selectedPrediction, setSelectedPrediction] = useState<any>(null)

  const categories = [
    { id: "all", label: "All Events", count: predictions.length },
    { id: "political", label: "Political", count: 3 },
    { id: "economic", label: "Economic", count: 2 },
    { id: "military", label: "Military", count: 4 },
    { id: "trade", label: "Trade", count: 2 },
  ]

  const timeframes = [
    { id: "30", label: "Next 30 Days" },
    { id: "60", label: "Next 60 Days" },
    { id: "90", label: "Next 90 Days" },
  ]

  // Filter predictions based on selected criteria
  const filteredPredictions = predictions.filter((prediction) => {
    const matchesTimeframe =
      selectedTimeframe === "30"
        ? prediction.timeframe.includes("30")
        : selectedTimeframe === "60"
          ? prediction.timeframe.includes("60")
          : selectedTimeframe === "90"
            ? true
            : true

    // Map prediction events to categories
    const predictionCategory =
      prediction.event.includes("Russia") || prediction.event.includes("Ukraine")
        ? "political"
        : prediction.event.includes("China") || prediction.event.includes("Taiwan")
          ? "military"
          : prediction.event.includes("Iran")
            ? "political"
            : prediction.event.includes("trade") || prediction.event.includes("tariff")
              ? "trade"
              : "economic"

    const matchesCategory = selectedCategory === "all" || predictionCategory === selectedCategory
    const matchesConfidence = prediction.probability >= confidenceFilter
    return matchesTimeframe && matchesCategory && matchesConfidence
  })

  const handleViewDetails = (prediction: any) => {
    setSelectedPrediction(prediction)
    setShowDetailModal(true)
  }

  const handleCreateAlert = (prediction: any) => {
    setSelectedPrediction(prediction)
    setShowAlertModal(true)
  }

  const handleSubmitAlert = () => {
    alert(`Alert created for: ${selectedPrediction?.event}. You'll be notified of any updates.`)
    setShowAlertModal(false)
  }

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return "bg-red-500"
    if (probability >= 60) return "bg-orange-500"
    if (probability >= 40) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case "critical":
        return "bg-red-600"
      case "high":
        return "bg-orange-600"
      case "medium-high":
        return "bg-yellow-600"
      case "medium":
        return "bg-blue-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">AI Crisis Prediction Engine</h1>
          <p className="text-slate-400">Advanced geopolitical risk forecasting with 87% accuracy</p>
        </div>
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-slate-300">AI Model: GPT-Geo-Risk-v4.2</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Predictions</p>
                <p className="text-2xl font-bold text-white">{filteredPredictions.length}</p>
              </div>
              <Target className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">High Probability</p>
                <p className="text-2xl font-bold text-white">
                  {filteredPredictions.filter((p) => p.probability >= 70).length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Risk Value</p>
                <p className="text-2xl font-bold text-white">$8.4B</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Accuracy Rate</p>
                <p className="text-2xl font-bold text-white">87%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-300">Timeframe:</span>
              {timeframes.map((timeframe) => (
                <Button
                  key={timeframe.id}
                  variant={selectedTimeframe === timeframe.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeframe(timeframe.id)}
                  className={selectedTimeframe === timeframe.id ? "bg-blue-600" : ""}
                >
                  {timeframe.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-300">Category:</span>
              {categories.slice(0, 4).map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-blue-600" : ""}
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
            <p className="text-blue-200 text-sm">
              Showing {filteredPredictions.length} predictions for{" "}
              {timeframes.find((t) => t.id === selectedTimeframe)?.label}
              {selectedCategory !== "all" && ` in ${categories.find((c) => c.id === selectedCategory)?.label} category`}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Predictions List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPredictions.map((prediction, index) => (
          <Card key={index} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white text-lg mb-2">{prediction.event}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{prediction.timeframe}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3" />
                      <span>{prediction.businessImpact}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white mb-1">{prediction.probability}%</div>
                  <Badge className={getProbabilityColor(prediction.probability)}>
                    {prediction.probability >= 80
                      ? "Very High"
                      : prediction.probability >= 60
                        ? "High"
                        : prediction.probability >= 40
                          ? "Medium"
                          : "Low"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Probability Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Probability</span>
                  <span className="text-slate-300">{prediction.probability}%</span>
                </div>
                <Progress value={prediction.probability} className="h-2" />
              </div>

              {/* Impact Level */}
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Impact Level:</span>
                <Badge className={getImpactColor(prediction.impact)}>{prediction.impact}</Badge>
              </div>

              {/* Affected Sectors */}
              <div>
                <span className="text-slate-300 text-sm">Affected Sectors:</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {prediction.affectedSectors.map((sector) => (
                    <Badge key={sector} variant="outline" className="text-xs">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* AI Reasoning */}
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">AI Analysis</span>
                </div>
                <p className="text-xs text-slate-300">
                  {prediction.event.includes("Russia") &&
                    "Multiple intelligence sources indicate escalating military preparations. Historical patterns suggest 78% probability based on similar geopolitical tensions."}
                  {prediction.event.includes("China") &&
                    "Satellite imagery shows increased military activity. Economic indicators and diplomatic communications suggest heightened tensions with 41% probability."}
                  {prediction.event.includes("Iran") &&
                    "Nuclear facility monitoring and diplomatic breakdown patterns indicate 67% probability of deal collapse within 30 days."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1" onClick={() => handleViewDetails(prediction)}>
                  <Eye className="w-3 h-3 mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="flex-1" onClick={() => handleCreateAlert(prediction)}>
                  <Bell className="w-3 h-3 mr-1" />
                  Create Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Prediction Accuracy Tracker */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Prediction Accuracy Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">87%</div>
              <div className="text-slate-300">Overall Accuracy</div>
              <div className="text-xs text-slate-400 mt-1">Last 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">92%</div>
              <div className="text-slate-300">High-Probability Events</div>
              <div className="text-xs text-slate-400 mt-1">{">"}70% confidence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3.2</div>
              <div className="text-slate-300">Days Early Warning</div>
              <div className="text-xs text-slate-400 mt-1">Average lead time</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      {showDetailModal && selectedPrediction && (
        <Card className="bg-slate-800 border-blue-600 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{selectedPrediction.event} - Detailed Analysis</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowDetailModal(false)}>
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
                <div className="text-2xl font-bold text-white">{selectedPrediction.businessImpact}</div>
                <div className="text-sm text-slate-400">Business Impact</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Detailed Analysis</h4>
              <p className="text-slate-300 text-sm mb-4">
                This prediction is based on comprehensive analysis of multiple intelligence sources, historical
                patterns, and current geopolitical indicators. Our AI model has identified key risk factors and
                potential triggers that could lead to this event occurring within the specified timeframe.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Key Risk Indicators</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Increased military activity and troop movements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Diplomatic communications breakdown</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Economic sanctions and trade restrictions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Social media sentiment and public opinion shifts</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Potential Business Impacts</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-700 rounded p-3">
                  <h5 className="text-red-300 font-medium mb-2">Supply Chain</h5>
                  <p className="text-red-200 text-sm">Disruptions to key supply routes and manufacturing hubs</p>
                </div>
                <div className="bg-orange-900/20 border border-orange-700 rounded p-3">
                  <h5 className="text-orange-300 font-medium mb-2">Market Access</h5>
                  <p className="text-orange-200 text-sm">Restricted access to affected markets and regions</p>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-700 rounded p-3">
                  <h5 className="text-yellow-300 font-medium mb-2">Currency Risk</h5>
                  <p className="text-yellow-200 text-sm">Volatility in affected currencies and exchange rates</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-700 rounded p-3">
                  <h5 className="text-blue-300 font-medium mb-2">Regulatory</h5>
                  <p className="text-blue-200 text-sm">New sanctions and compliance requirements</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Alert Modal */}
      {showAlertModal && selectedPrediction && (
        <Card className="bg-slate-800 border-green-600 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Create Alert for: {selectedPrediction.event}</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowAlertModal(false)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300 mb-2 block">Alert Type</label>
                <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                  <option>Email Notification</option>
                  <option>SMS Alert</option>
                  <option>Dashboard Notification</option>
                  <option>All Methods</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-300 mb-2 block">Trigger Threshold</label>
                <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                  <option>Any probability change</option>
                  <option>+/- 5% probability change</option>
                  <option>+/- 10% probability change</option>
                  <option>Major status updates only</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-2 block">Additional Recipients (optional)</label>
              <Input
                placeholder="Enter email addresses separated by commas"
                className="bg-slate-700 border-slate-600"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-2 block">Custom Message (optional)</label>
              <Textarea
                placeholder="Add any specific instructions or context for this alert..."
                className="bg-slate-700 border-slate-600"
                rows={3}
              />
            </div>

            <div className="flex space-x-2">
              <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={handleSubmitAlert}>
                <Bell className="w-4 h-4 mr-2" />
                Create Alert
              </Button>
              <Button variant="outline" onClick={() => setShowAlertModal(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
