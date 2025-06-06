"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, DollarSign, Shield, AlertTriangle, Globe } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function CompanyImpact() {
  const [companySize, setCompanySize] = useState("")
  const [industry, setIndustry] = useState("")
  const [regions, setRegions] = useState<string[]>([])
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const [showAlertModal, setShowAlertModal] = useState(false)
  const [selectedRisk, setSelectedRisk] = useState<any>(null)

  const handleSetAlert = (risk: any) => {
    setSelectedRisk(risk)
    setShowAlertModal(true)
  }

  const handleCreateActionPlan = (risk: any) => {
    alert(`Action plan created for: ${risk.title}. You'll receive a detailed implementation guide within 24 hours.`)
  }

  const handleAnalyze = () => {
    setAnalysisComplete(true)
  }

  const riskScenarios = [
    {
      title: "Russia-Ukraine Conflict Escalation",
      probability: 78,
      impact: "$2.3B",
      description: "Supply chain disruptions in Eastern Europe affecting manufacturing and energy costs",
      sectors: ["Manufacturing", "Energy", "Logistics"],
      timeline: "45 days",
      mitigation: "Diversify suppliers, increase inventory buffers",
    },
    {
      title: "China-Taiwan Military Exercise",
      probability: 41,
      impact: "$890M",
      description: "Semiconductor supply chain disruption affecting technology production",
      sectors: ["Technology", "Electronics", "Automotive"],
      timeline: "60 days",
      mitigation: "Alternative chip sourcing, production reallocation",
    },
    {
      title: "Iran Nuclear Deal Collapse",
      probability: 67,
      impact: "$1.2B",
      description: "Oil price volatility and Middle East market access restrictions",
      sectors: ["Energy", "Financial Services", "Transportation"],
      timeline: "30 days",
      mitigation: "Hedge oil exposure, review Iran operations",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Company Impact Calculator</h1>
          <p className="text-slate-400">Personalized geopolitical risk assessment for your business</p>
        </div>
        <div className="flex items-center space-x-2">
          <Building2 className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-slate-300">Enterprise Risk Analysis</span>
        </div>
      </div>

      {/* Company Profile Setup */}
      {!analysisComplete && (
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Company Profile Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Company Size</label>
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                      <SelectItem value="sme">SME (51-500 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (500-5000 employees)</SelectItem>
                      <SelectItem value="fortune500">Fortune 500 (5000+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Primary Industry</label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="financial">Financial Services</SelectItem>
                      <SelectItem value="energy">Energy & Utilities</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail & Consumer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Annual Revenue</label>
                  <Input placeholder="e.g., $500M" className="bg-slate-800 border-slate-700" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Global Footprint</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["North America", "Europe", "Asia Pacific", "Latin America", "Middle East", "Africa"].map(
                      (region) => (
                        <Button
                          key={region}
                          variant={regions.includes(region) ? "default" : "outline"}
                          size="sm"
                          onClick={() => {
                            setRegions((prev) =>
                              prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region],
                            )
                          }}
                          className={`text-xs ${regions.includes(region) ? "bg-blue-600" : ""}`}
                        >
                          {region}
                        </Button>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Key Dependencies</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">International supply chains</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Cross-border payments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Foreign workforce</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">International customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleAnalyze}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!companySize || !industry}
            >
              Generate Risk Analysis
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Analysis Results */}
      {analysisComplete && (
        <>
          {/* Risk Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Overall Risk Score</p>
                    <p className="text-2xl font-bold text-white">73/100</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                </div>
                <Progress value={73} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Revenue at Risk</p>
                    <p className="text-2xl font-bold text-white">$4.4B</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-xs text-slate-400 mt-2">Next 90 days</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Supply Chain Risk</p>
                    <p className="text-2xl font-bold text-white">87%</p>
                  </div>
                  <Globe className="w-8 h-8 text-yellow-500" />
                </div>
                <p className="text-xs text-slate-400 mt-2">Vulnerability score</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Preparedness</p>
                    <p className="text-2xl font-bold text-white">42%</p>
                  </div>
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-xs text-slate-400 mt-2">Crisis readiness</p>
              </CardContent>
            </Card>
          </div>

          {/* Risk Scenarios */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Top Risk Scenarios for Your Business</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {riskScenarios.map((scenario, index) => (
                <div key={index} className="border border-slate-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-2">{scenario.title}</h4>
                      <p className="text-slate-300 text-sm mb-3">{scenario.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">{scenario.probability}%</div>
                      <Badge
                        className={
                          scenario.probability >= 70
                            ? "bg-red-600"
                            : scenario.probability >= 50
                              ? "bg-orange-600"
                              : "bg-yellow-600"
                        }
                      >
                        {scenario.probability >= 70 ? "High" : scenario.probability >= 50 ? "Medium" : "Low"} Risk
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-slate-400 text-xs">Potential Impact</span>
                      <div className="text-white font-medium">{scenario.impact}</div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-xs">Timeline</span>
                      <div className="text-white font-medium">{scenario.timeline}</div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-xs">Affected Sectors</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {scenario.sectors.map((sector) => (
                          <Badge key={sector} variant="outline" className="text-xs">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded p-3">
                    <div className="text-sm text-slate-300 mb-1">Recommended Mitigation:</div>
                    <div className="text-sm text-slate-200">{scenario.mitigation}</div>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleCreateActionPlan(scenario)}
                    >
                      Create Action Plan
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => handleSetAlert(scenario)}>
                      Set Alert
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Competitor Risk Comparison */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Competitor Risk Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-white">Your Company</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-slate-300">Risk Score: 73</span>
                    <Badge className="bg-orange-600">Medium-High</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800 rounded">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-white">Competitor A</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-slate-300">Risk Score: 89</span>
                    <Badge className="bg-red-600">High</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800 rounded">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="text-white">Competitor B</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-slate-300">Risk Score: 56</span>
                    <Badge className="bg-yellow-600">Medium</Badge>
                  </div>
                </div>

                <div className="bg-blue-900 border border-blue-700 rounded p-3 mt-4">
                  <div className="text-blue-300 font-medium">Competitive Advantage</div>
                  <div className="text-blue-200 text-sm">
                    Your risk profile is 18% better than industry average, providing competitive advantage in uncertain
                    markets.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Recommended Action Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Immediate Actions (0-30 days)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Review and update crisis response plans</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Assess supply chain vulnerabilities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Increase cash reserves by 15%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Review political risk insurance</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-medium">Strategic Actions (30-90 days)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Diversify supplier base across regions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Establish alternative market channels</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Implement scenario planning framework</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-300">Enhance stakeholder communication</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
      <AlertDialog open={showAlertModal} onOpenChange={setShowAlertModal}>
        <AlertDialogContent className="bg-slate-900 border-slate-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Set Alert</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-300">
              Are you sure you want to set an alert for {selectedRisk?.title}? You will be notified of any significant
              changes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-slate-300 bg-slate-800 hover:bg-slate-700">Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-blue-600 hover:bg-blue-700 text-white">Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
