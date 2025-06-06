"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, DollarSign, Clock, Building, Truck, Globe, Zap, Users, CheckCircle } from "lucide-react"

export function MsmeDashboard() {
  const [selectedIndustry, setSelectedIndustry] = useState("retail")
  const [businessSize, setBusinessSize] = useState("small")
  const [showSuccessForm, setShowSuccessForm] = useState(false)
  const [showJoinForm, setShowJoinForm] = useState(false)
  const [selectedConsortium, setSelectedConsortium] = useState("")

  // Industry-specific risk metrics
  const industryRisks = {
    retail: { overall: 64, supplyChain: 78, cashFlow: 52, regulatory: 41, cyber: 67 },
    manufacturing: { overall: 72, supplyChain: 85, cashFlow: 48, regulatory: 55, cyber: 71 },
    services: { overall: 45, supplyChain: 32, cashFlow: 67, regulatory: 38, cyber: 58 },
    food: { overall: 68, supplyChain: 82, cashFlow: 55, regulatory: 73, cyber: 42 },
    tech: { overall: 58, supplyChain: 45, cashFlow: 62, regulatory: 67, cyber: 78 },
  }

  // Industry-specific scenarios
  const industryScenarios = {
    retail: [
      {
        title: "Supply Chain Disruption",
        probability: 78,
        impact: "High",
        timeframe: "30 days",
        description: "Shipping delays from Asia affecting inventory levels",
        action: "Identify local suppliers as backup",
        cost: "$",
        effort: "Medium",
      },
      {
        title: "Consumer Spending Decline",
        probability: 65,
        impact: "Medium",
        timeframe: "60 days",
        description: "Economic uncertainty reducing discretionary spending",
        action: "Focus on essential product lines",
        cost: "$",
        effort: "Low",
      },
    ],
    manufacturing: [
      {
        title: "Raw Material Shortage",
        probability: 82,
        impact: "High",
        timeframe: "45 days",
        description: "Critical materials from conflict regions becoming unavailable",
        action: "Secure alternative material sources",
        cost: "$$",
        effort: "High",
      },
      {
        title: "Energy Price Spike",
        probability: 75,
        impact: "High",
        timeframe: "30 days",
        description: "Manufacturing costs increasing due to energy crisis",
        action: "Implement energy efficiency measures",
        cost: "$$",
        effort: "Medium",
      },
    ],
    services: [
      {
        title: "Client Budget Cuts",
        probability: 58,
        impact: "Medium",
        timeframe: "90 days",
        description: "Corporate clients reducing service spending",
        action: "Diversify client base and service offerings",
        cost: "$",
        effort: "Medium",
      },
    ],
    food: [
      {
        title: "Ingredient Price Volatility",
        probability: 85,
        impact: "High",
        timeframe: "15 days",
        description: "Key ingredients affected by trade restrictions",
        action: "Lock in prices with suppliers",
        cost: "$$",
        effort: "Low",
      },
    ],
    tech: [
      {
        title: "Semiconductor Shortage",
        probability: 72,
        impact: "High",
        timeframe: "60 days",
        description: "Hardware components becoming scarce and expensive",
        action: "Shift to software-focused solutions",
        cost: "$",
        effort: "High",
      },
    ],
  }

  const currentRisks = industryRisks[selectedIndustry as keyof typeof industryRisks]
  const currentScenarios = industryScenarios[selectedIndustry as keyof typeof industryScenarios] || []

  // Industries with updated data
  const industries = [
    { id: "retail", name: "Retail & E-commerce", icon: Building },
    { id: "manufacturing", name: "Small Manufacturing", icon: Truck },
    { id: "services", name: "Professional Services", icon: Users },
    { id: "food", name: "Food & Beverage", icon: Globe },
    { id: "tech", name: "Tech & IT Services", icon: Zap },
  ]

  const consortiums = [
    {
      id: "retail",
      name: "Retail Consortium",
      members: 87,
      cost: 49,
      savings: 94,
      description: "Perfect for retail stores, e-commerce, and consumer goods businesses",
    },
    {
      id: "manufacturing",
      name: "Manufacturing Consortium",
      members: 64,
      cost: 79,
      savings: 91,
      description: "Designed for small manufacturers and production companies",
    },
    {
      id: "tech",
      name: "Tech Services Consortium",
      members: 103,
      cost: 59,
      savings: 93,
      description: "Ideal for IT services, software development, and tech consultancies",
    },
  ]

  const handleJoinConsortium = (consortiumId: string) => {
    setSelectedConsortium(consortiumId)
    setShowJoinForm(true)
  }

  const handleSubmitSuccess = () => {
    alert("Thank you for sharing your success story! We'll review it and get back to you within 2 business days.")
    setShowSuccessForm(false)
  }

  const handleJoinSubmit = () => {
    alert(`Welcome to the ${selectedConsortium} Consortium! Check your email for next steps.`)
    setShowJoinForm(false)
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome to CrisisPredict for Small Business</h1>
            <p className="text-blue-200 mt-1">Affordable geopolitical risk intelligence for businesses of all sizes</p>
          </div>
          <Badge className="bg-green-600 text-white">MSME Edition</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card className="bg-blue-800/50 border-blue-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-blue-100 text-sm">Your Risk Score</div>
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white mt-2">{currentRisks.overall}/100</div>
              <Progress value={currentRisks.overall} className="h-1.5 mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-blue-800/50 border-blue-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-blue-100 text-sm">Potential Savings</div>
                <DollarSign className="h-4 w-4 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mt-2">$24,500</div>
              <div className="text-xs text-blue-200 mt-2">By mitigating top risks</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-800/50 border-blue-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-blue-100 text-sm">Similar Businesses</div>
                <Users className="h-4 w-4 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mt-2">347</div>
              <div className="text-xs text-blue-200 mt-2">In your risk consortium</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Industry Selection */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Select Your Industry</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Button
                  key={industry.id}
                  variant={selectedIndustry === industry.id ? "default" : "outline"}
                  className={`h-auto flex-col py-4 ${
                    selectedIndustry === industry.id ? "bg-blue-600" : "bg-slate-800 hover:bg-slate-700"
                  }`}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  <Icon className="h-6 w-6 mb-2" />
                  <span className="text-xs">{industry.name}</span>
                </Button>
              )
            })}
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
            <p className="text-blue-200 text-sm">
              Selected: <span className="font-medium">{industries.find((i) => i.id === selectedIndustry)?.name}</span> •
              Risk metrics and scenarios below are customized for your industry.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="risks" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800">
          <TabsTrigger value="risks">Top Risks</TabsTrigger>
          <TabsTrigger value="actions">Simple Actions</TabsTrigger>
          <TabsTrigger value="consortium">Join Consortium</TabsTrigger>
          <TabsTrigger value="success">Success Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="risks" className="space-y-6">
          {/* Risk Breakdown for MSMEs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Your Business Risk Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                      <span className="text-slate-300">Supply Chain</span>
                    </div>
                    <div className="text-white font-medium">{currentRisks.supplyChain}%</div>
                  </div>
                  <Progress value={currentRisks.supplyChain} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                      <span className="text-slate-300">Cash Flow Impact</span>
                    </div>
                    <div className="text-white font-medium">{currentRisks.cashFlow}%</div>
                  </div>
                  <Progress value={currentRisks.cashFlow} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                      <span className="text-slate-300">Regulatory Changes</span>
                    </div>
                    <div className="text-white font-medium">{currentRisks.regulatory}%</div>
                  </div>
                  <Progress value={currentRisks.regulatory} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                      <span className="text-slate-300">Cyber/Tech Disruption</span>
                    </div>
                    <div className="text-white font-medium">{currentRisks.cyber}%</div>
                  </div>
                  <Progress value={currentRisks.cyber} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Industry Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-white">Your Business</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-300">Risk Score: {currentRisks.overall}</span>
                      <Badge
                        className={
                          currentRisks.overall > 70
                            ? "bg-red-600"
                            : currentRisks.overall > 50
                              ? "bg-orange-600"
                              : "bg-yellow-600"
                        }
                      >
                        {currentRisks.overall > 70 ? "High" : currentRisks.overall > 50 ? "Medium" : "Low"}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                      <span className="text-white">Industry Average</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-300">Risk Score: 71</span>
                      <Badge className="bg-orange-600">Medium-High</Badge>
                    </div>
                  </div>

                  <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-3">
                    <div className="text-blue-300 font-medium">Your Advantage</div>
                    <div className="text-blue-200 text-sm">
                      Your business is {71 - currentRisks.overall} points {currentRisks.overall < 71 ? "less" : "more"}{" "}
                      exposed than industry average.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industry-Specific Risk Scenarios */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">
                Top Risk Scenarios for {industries.find((i) => i.id === selectedIndustry)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentScenarios.map((scenario, index) => (
                <div key={index} className="border border-slate-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-white font-medium">{scenario.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mt-1">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{scenario.timeframe}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{scenario.impact} Impact</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      className={
                        scenario.probability >= 70
                          ? "bg-red-600"
                          : scenario.probability >= 50
                            ? "bg-orange-600"
                            : "bg-yellow-600"
                      }
                    >
                      {scenario.probability}% Probability
                    </Badge>
                  </div>

                  <p className="text-slate-300 text-sm mb-3">{scenario.description}</p>

                  <div className="bg-slate-800 rounded p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-300 mb-1">Recommended Action:</div>
                        <div className="text-sm text-white">{scenario.action}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-400">Resource Need:</div>
                        <div className="text-sm">
                          <span className="text-green-400">{scenario.cost}</span> •{" "}
                          <span className="text-slate-300">{scenario.effort} Effort</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consortium" className="space-y-6">
          {/* MSME Consortium */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">MSME Risk Consortium</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-4">
                <h3 className="text-purple-300 font-medium mb-2">Strength in Numbers</h3>
                <p className="text-purple-200 text-sm">
                  Join forces with other small businesses in your industry to access enterprise-grade risk intelligence
                  at a fraction of the cost. Share insights, resources, and collective bargaining power.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {consortiums.map((consortium) => (
                  <Card key={consortium.id} className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <h4 className="text-white font-medium mb-2">{consortium.name}</h4>
                      <p className="text-slate-400 text-xs mb-3">{consortium.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Members:</span>
                          <span className="text-white">{consortium.members} businesses</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Monthly Cost:</span>
                          <span className="text-green-400">${consortium.cost}/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Savings vs. Enterprise:</span>
                          <span className="text-white">{consortium.savings}%</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="w-full mt-3 bg-purple-600 hover:bg-purple-700"
                        onClick={() => handleJoinConsortium(consortium.name)}
                      >
                        Join Consortium
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Join Form Modal */}
          {showJoinForm && (
            <Card className="bg-slate-800 border-blue-600 border-2">
              <CardHeader>
                <CardTitle className="text-white">Join {selectedConsortium}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Company Name" className="bg-slate-700 border-slate-600" />
                  <Input placeholder="Your Name" className="bg-slate-700 border-slate-600" />
                  <Input placeholder="Email Address" className="bg-slate-700 border-slate-600" />
                  <Input placeholder="Phone Number" className="bg-slate-700 border-slate-600" />
                </div>
                <Input placeholder="Number of Employees" className="bg-slate-700 border-slate-600" />
                <Textarea
                  placeholder="Tell us about your business and main risk concerns..."
                  className="bg-slate-700 border-slate-600"
                  rows={3}
                />
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700" onClick={handleJoinSubmit}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Join Consortium
                  </Button>
                  <Button variant="outline" onClick={() => setShowJoinForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="success" className="space-y-6">
          {/* Success Stories */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Small Business Success Stories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-medium">GreenLeaf Bakery</h3>
                  <Badge variant="outline">15 employees</Badge>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-400 text-sm">Challenge:</div>
                    <div className="text-slate-200">Wheat price volatility due to Ukraine conflict</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Solution:</div>
                    <div className="text-slate-200">Used CrisisPredict to identify alternative suppliers</div>
                  </div>
                  <div>
                    <div className="text-green-400 text-sm">Outcome:</div>
                    <div className="text-green-200">Avoided 22% price increase and maintained margins</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-medium">TechRepair Solutions</h3>
                  <Badge variant="outline">28 employees</Badge>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-400 text-sm">Challenge:</div>
                    <div className="text-slate-200">Semiconductor shortage affecting repair parts</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Solution:</div>
                    <div className="text-slate-200">Joined electronics consortium for shared inventory</div>
                  </div>
                  <div>
                    <div className="text-green-400 text-sm">Outcome:</div>
                    <div className="text-green-200">Reduced stockouts by 67% during global shortage</div>
                  </div>
                </div>
              </div>

              {!showSuccessForm ? (
                <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 text-center">
                  <h3 className="text-blue-300 font-medium mb-2">Share Your Success Story</h3>
                  <p className="text-blue-200 text-sm mb-3">
                    Has CrisisPredict helped your small business navigate geopolitical risks? Share your story and get 3
                    months free access.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowSuccessForm(true)}>
                    Submit Your Story
                  </Button>
                </div>
              ) : (
                <Card className="bg-slate-800 border-blue-600 border-2">
                  <CardHeader>
                    <CardTitle className="text-white">Share Your Success Story</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Company Name" className="bg-slate-700 border-slate-600" />
                      <Input placeholder="Your Name" className="bg-slate-700 border-slate-600" />
                      <Input placeholder="Email Address" className="bg-slate-700 border-slate-600" />
                      <Input placeholder="Company Size (employees)" className="bg-slate-700 border-slate-600" />
                    </div>
                    <Textarea
                      placeholder="What challenge did you face?"
                      className="bg-slate-700 border-slate-600"
                      rows={2}
                    />
                    <Textarea
                      placeholder="How did CrisisPredict help you?"
                      className="bg-slate-700 border-slate-600"
                      rows={2}
                    />
                    <Textarea
                      placeholder="What was the outcome/result?"
                      className="bg-slate-700 border-slate-600"
                      rows={2}
                    />
                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={handleSubmitSuccess}>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Submit Story
                      </Button>
                      <Button variant="outline" onClick={() => setShowSuccessForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
