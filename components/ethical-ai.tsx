"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Eye, Scale, Heart, Lock, Globe, Users } from "lucide-react"

export function EthicalAI() {
  const dummyPrinciples = [
    { title: "Transparency", score: 95, icon: Eye, color: "text-green-400", status: "Excellent" },
    { title: "Fairness", score: 92, icon: Scale, color: "text-blue-400", status: "Excellent" },
    { title: "Accountability", score: 88, icon: Shield, color: "text-purple-400", status: "Good" },
    { title: "Privacy", score: 94, icon: Lock, color: "text-cyan-400", status: "Excellent" },
    { title: "Human Welfare", score: 97, icon: Heart, color: "text-red-400", status: "Excellent" },
    { title: "Global Equity", score: 89, icon: Globe, color: "text-orange-400", status: "Good" },
  ]

  const dummyMetrics = {
    ethicalScore: 92.5,
    biasTests: 47,
    transparency: 98,
    compliance: 96,
  }

  const dummyBiasResults = [
    { category: "Geographic Bias", status: "Passed", score: 94 },
    { category: "Cultural Bias", status: "Passed", score: 91 },
    { category: "Economic Bias", status: "Warning", score: 78 },
    { category: "Language Bias", status: "Passed", score: 96 },
    { category: "Temporal Bias", status: "Passed", score: 93 },
  ]

  const dummyTransparencyFeatures = [
    { title: "Open Source Algorithms", status: "Available", description: "Core algorithms available for review" },
    { title: "Data Source Disclosure", status: "Available", description: "Complete list of data sources" },
    { title: "Methodology Documentation", status: "Available", description: "Detailed AI training processes" },
    { title: "Bias Testing Reports", status: "Available", description: "Regular bias audits and reports" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Ethical AI & Transparency</h1>
          <p className="text-slate-400">Responsible AI with full transparency and bias mitigation</p>
        </div>
        <Badge className="bg-emerald-600 animate-pulse">🚧 Advanced Feature Coming Soon</Badge>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 border-emerald-600">
        <CardContent className="p-6 text-center">
          <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Ethical AI Leadership</h2>
          <p className="text-emerald-200 mb-4">
            Comprehensive ethical AI framework with transparency, bias detection, human oversight, and responsible
            development practices ensuring fair and accountable geopolitical risk intelligence.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="text-emerald-300">• Full Transparency</span>
            <span className="text-emerald-300">• Bias Detection</span>
            <span className="text-emerald-300">• Human Oversight</span>
          </div>
        </CardContent>
      </Card>

      {/* Overall Ethics Score */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Overall Ethical AI Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{dummyMetrics.ethicalScore}/100</div>
            <Badge className="bg-green-600 mb-4">Excellent</Badge>
            <p className="text-slate-300 text-sm">
              CrisisPredict meets the highest standards for ethical AI development and deployment.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Ethical Principles */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Ethical AI Principles (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dummyPrinciples.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div key={index} className="bg-slate-800 rounded-lg p-4 opacity-60">
                  <div className="flex items-start justify-between mb-3">
                    <Icon className={`w-8 h-8 ${principle.color}`} />
                    <Badge
                      className={
                        principle.score >= 95 ? "bg-green-600" : principle.score >= 85 ? "bg-blue-600" : "bg-orange-600"
                      }
                    >
                      {principle.status}
                    </Badge>
                  </div>
                  <h4 className="text-white font-medium mb-2">{principle.title}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Score</span>
                      <span className="text-white font-medium">{principle.score}/100</span>
                    </div>
                    <Progress value={principle.score} className="h-2" />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Transparency & Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Eye className="w-5 h-5 text-blue-400" />
              <span>Transparency Metrics (Preview)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 opacity-60">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Open Source Components</span>
                <span className="text-white">15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">GitHub Stars</span>
                <span className="text-white">2.3k</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Contributors</span>
                <span className="text-white">89</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Documentation Coverage</span>
                <span className="text-white">{dummyMetrics.transparency}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Compliance & Oversight (Preview)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 opacity-60">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Bias Tests Passed</span>
                <span className="text-white">{dummyMetrics.biasTests}/50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Human Review Rate</span>
                <span className="text-white">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Expert Validation</span>
                <span className="text-white">94%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Compliance Score</span>
                <span className="text-white">{dummyMetrics.compliance}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bias Detection Results */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Bias Detection Results (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dummyBiasResults.map((result, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-white font-medium">{result.category}</h5>
                  <div className="flex items-center space-x-2">
                    <Badge
                      className={
                        result.status === "Passed"
                          ? "bg-green-600"
                          : result.status === "Warning"
                            ? "bg-orange-600"
                            : "bg-red-600"
                      }
                    >
                      {result.status}
                    </Badge>
                    <span className="text-white font-bold">{result.score}/100</span>
                  </div>
                </div>
                <Progress value={result.score} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transparency Features */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Transparency Features (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dummyTransparencyFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 opacity-60">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="text-white font-medium">{feature.title}</h5>
                  <Badge className="bg-green-600">{feature.status}</Badge>
                </div>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Governance Structure */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">AI Governance Structure (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-60">
            <div className="bg-slate-700 rounded p-4">
              <h5 className="text-white font-medium mb-2">Ethics Review Board</h5>
              <p className="text-slate-300 text-sm mb-2">
                Independent board of ethicists, technologists, and domain experts
              </p>
              <div className="text-xs text-slate-400">12 members • Monthly reviews</div>
            </div>

            <div className="bg-slate-700 rounded p-4">
              <h5 className="text-white font-medium mb-2">Technical Advisory Panel</h5>
              <p className="text-slate-300 text-sm mb-2">AI researchers and engineers ensuring technical excellence</p>
              <div className="text-xs text-slate-400">8 members • Weekly assessments</div>
            </div>

            <div className="bg-slate-700 rounded p-4">
              <h5 className="text-white font-medium mb-2">User Advisory Council</h5>
              <p className="text-slate-300 text-sm mb-2">
                Representatives from user communities and affected populations
              </p>
              <div className="text-xs text-slate-400">15 members • Quarterly feedback</div>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-700 rounded p-3 mt-4">
            <div className="text-green-300 font-medium">Governance Commitment</div>
            <div className="text-green-200 text-sm mt-1">
              All major AI system changes require approval from at least two governance bodies and undergo public
              comment periods.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Human Oversight Metrics */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span>Human Oversight Metrics (Preview)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 opacity-60">
            <div className="text-center">
              <Eye className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">87%</div>
              <div className="text-sm text-slate-400">Human Review Rate</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">94%</div>
              <div className="text-sm text-slate-400">Expert Validation</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">91%</div>
              <div className="text-sm text-slate-400">Community Feedback</div>
            </div>
            <div className="text-center">
              <Scale className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">96%</div>
              <div className="text-sm text-slate-400">Ethical Compliance</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
