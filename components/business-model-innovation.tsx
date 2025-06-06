"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Crown, Heart, Star, Handshake } from "lucide-react"

export function BusinessModelInnovation() {
  const dummyPlans = [
    { name: "Community", price: "Free", icon: Star, users: "12K+", color: "text-green-400" },
    { name: "Professional", price: "$299/mo", icon: Crown, users: "3K+", color: "text-blue-400" },
    { name: "Enterprise", price: "Custom", icon: Shield, users: "150+", color: "text-purple-400" },
  ]

  const dummyMetrics = {
    freeUsers: "12,847",
    conversionRate: "23.4%",
    avgRevenue: "$127",
    satisfaction: "89%",
  }

  const dummyInsurancePartners = [
    { name: "Lloyd's of London", coverage: "Political Risk", premium: "2.3%" },
    { name: "Zurich Insurance", coverage: "Supply Chain", premium: "1.8%" },
    { name: "AIG", coverage: "Cyber-Geopolitical", premium: "3.1%" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Business Model Innovation</h1>
          <p className="text-slate-400">Democratized access and innovative pricing models</p>
        </div>
        <Badge className="bg-indigo-600 animate-pulse">🚧 Advanced Feature Coming Soon</Badge>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-600">
        <CardContent className="p-6 text-center">
          <Handshake className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Revolutionary Business Models</h2>
          <p className="text-indigo-200 mb-4">
            Freemium access, risk insurance integration, SME consortiums, and humanitarian access programs to
            democratize geopolitical risk intelligence.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="text-indigo-300">• Freemium Model</span>
            <span className="text-indigo-300">• Risk Insurance</span>
            <span className="text-indigo-300">• SME Consortiums</span>
          </div>
        </CardContent>
      </Card>

      {/* Preview Pricing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dummyPlans.map((plan, index) => {
          const Icon = plan.icon
          return (
            <Card key={index} className="bg-slate-900 border-slate-800 opacity-60">
              <CardContent className="p-4 text-center">
                <Icon className={`w-8 h-8 ${plan.color} mx-auto mb-2`} />
                <h3 className="text-white font-medium mb-1">{plan.name}</h3>
                <div className="text-2xl font-bold text-white mb-2">{plan.price}</div>
                <div className="text-sm text-slate-400">{plan.users} users</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Sample Metrics */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Business Model Metrics (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dummyMetrics.freeUsers}</div>
              <div className="text-sm text-slate-400">Free Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dummyMetrics.conversionRate}</div>
              <div className="text-sm text-slate-400">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dummyMetrics.avgRevenue}</div>
              <div className="text-sm text-slate-400">Avg Revenue Per User</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dummyMetrics.satisfaction}</div>
              <div className="text-sm text-slate-400">User Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Innovation Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Risk Insurance Integration</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm mb-4">
              AI-powered risk assessments integrated with insurance providers for dynamic premium calculation.
            </p>
            <div className="space-y-2 opacity-60">
              {dummyInsurancePartners.map((partner, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-slate-400">{partner.name}</span>
                  <span className="text-white">{partner.premium} premium</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span>Humanitarian Access</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm mb-4">
              Free access for NGOs, humanitarian organizations, and nonprofits to protect vulnerable populations.
            </p>
            <div className="space-y-2 opacity-60">
              <div className="text-sm text-slate-400">• 247 NGOs served</div>
              <div className="text-sm text-slate-400">• 1.2M lives protected</div>
              <div className="text-sm text-slate-400">• 89 countries covered</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SME Consortium Preview */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Handshake className="w-5 h-5 text-purple-400" />
            <span>SME Risk Consortium (Preview)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-60">
            <div className="bg-slate-800 rounded p-3">
              <div className="text-white font-medium">TechCorp SME Alliance</div>
              <div className="text-sm text-slate-400">47 members • $2.3M savings</div>
            </div>
            <div className="bg-slate-800 rounded p-3">
              <div className="text-white font-medium">Manufacturing Collective</div>
              <div className="text-sm text-slate-400">32 members • $1.8M savings</div>
            </div>
            <div className="bg-slate-800 rounded p-3">
              <div className="text-white font-medium">Healthcare Supply Group</div>
              <div className="text-sm text-slate-400">28 members • $3.1M savings</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
