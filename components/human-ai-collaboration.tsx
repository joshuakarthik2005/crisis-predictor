"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Brain, Star, Award, Eye } from "lucide-react"

export function HumanAICollaboration() {
  const dummyExperts = [
    {
      name: "Dr. Elena Kozlova",
      expertise: "Eastern European Politics",
      rating: 4.9,
      consultations: 247,
      availability: "Available",
    },
    {
      name: "Prof. Chen Wei",
      expertise: "Asia-Pacific Trade",
      rating: 4.8,
      consultations: 189,
      availability: "Busy until 3 PM",
    },
    {
      name: "Dr. Amara Hassan",
      expertise: "Middle East Security",
      rating: 4.9,
      consultations: 156,
      availability: "Available",
    },
  ]

  const dummyMetrics = {
    experts: 127,
    verifications: 2847,
    accuracy: 94,
    consensus: 89,
  }

  const dummyVerifications = [
    { prediction: "Russia military buildup near Ukrainian border", consensus: 92, status: "Verified" },
    { prediction: "China semiconductor export restrictions", consensus: 78, status: "Under Review" },
    { prediction: "Iran nuclear facility activity increase", consensus: 89, status: "Verified" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Human-AI Collaboration</h1>
          <p className="text-slate-400">Expert networks and crowdsourced intelligence verification</p>
        </div>
        <Badge className="bg-emerald-600 animate-pulse">🚧 Advanced Feature Coming Soon</Badge>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border-emerald-600">
        <CardContent className="p-6 text-center">
          <Users className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Collaborative Intelligence Network</h2>
          <p className="text-emerald-200 mb-4">
            Expert consultation networks, crowdsourced verification systems, and human-in-the-loop AI validation to
            enhance prediction accuracy and provide contextual insights.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="text-emerald-300">• Expert Networks</span>
            <span className="text-emerald-300">• Crowd Verification</span>
            <span className="text-emerald-300">• Human-AI Fusion</span>
          </div>
        </CardContent>
      </Card>

      {/* Preview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.experts}</div>
            <div className="text-sm text-slate-400">Expert Network</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Eye className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.verifications}</div>
            <div className="text-sm text-slate-400">Verifications</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Brain className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.accuracy}%</div>
            <div className="text-sm text-slate-400">AI Accuracy</div>
            <Progress value={dummyMetrics.accuracy} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.consensus}%</div>
            <div className="text-sm text-slate-400">Expert Consensus</div>
            <Progress value={dummyMetrics.consensus} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Sample Expert Network */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Expert Network (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dummyExperts.map((expert, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 opacity-60">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-medium">{expert.name}</h4>
                    <p className="text-slate-400 text-sm">{expert.expertise}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{expert.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-slate-400">{expert.consultations} consultations</div>
                  <Badge className={expert.availability === "Available" ? "bg-green-600" : "bg-orange-600"}>
                    {expert.availability}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Crowdsourced Verification */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Crowdsourced Verification (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dummyVerifications.map((verification, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 opacity-60">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h5 className="text-white font-medium mb-1">{verification.prediction}</h5>
                    <div className="text-sm text-slate-400">Consensus Score: {verification.consensus}%</div>
                  </div>
                  <Badge className={verification.status === "Verified" ? "bg-green-600" : "bg-orange-600"}>
                    {verification.status}
                  </Badge>
                </div>
                <Progress value={verification.consensus} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Collaboration Impact */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Human-AI Collaboration Impact (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">+23%</div>
              <div className="text-sm text-slate-400">Accuracy Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">-15%</div>
              <div className="text-sm text-slate-400">False Positives</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">+8 days</div>
              <div className="text-sm text-slate-400">Earlier Warning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">94%</div>
              <div className="text-sm text-slate-400">User Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Human-in-the-Loop Preview */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            <span>Human-in-the-Loop Analysis (Preview)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-60">
            <div className="bg-slate-700 rounded p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-medium">AI Prediction</span>
              </div>
              <p className="text-slate-300 text-sm">78% probability of conflict escalation in Eastern Europe</p>
            </div>
            <div className="bg-slate-700 rounded p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-green-300 font-medium">Expert Analysis</span>
              </div>
              <p className="text-slate-300 text-sm">Confirms AI assessment with additional diplomatic context</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
