"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { X, TrendingUp, AlertTriangle, DollarSign } from "lucide-react"
import { countryRisks } from "@/lib/sample-data"

interface CountryDetailProps {
  country: string
  onClose: () => void
}

export function CountryDetail({ country, onClose }: CountryDetailProps) {
  const risk = countryRisks[country as keyof typeof countryRisks]

  if (!risk) return null

  const getRiskLevel = (score: number) => {
    if (score >= 80) return { level: "Critical", color: "bg-red-500", textColor: "text-red-400" }
    if (score >= 60) return { level: "High", color: "bg-orange-500", textColor: "text-orange-400" }
    if (score >= 40) return { level: "Medium", color: "bg-yellow-500", textColor: "text-yellow-400" }
    return { level: "Low", color: "bg-green-500", textColor: "text-green-400" }
  }

  const overallRisk = getRiskLevel(risk.overall)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="bg-slate-900 border-slate-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white text-xl">{country} Risk Analysis</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Overall Risk Score */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{risk.overall}/100</div>
            <Badge className={`${overallRisk.color} text-white`}>{overallRisk.level} Risk</Badge>
            <Progress value={risk.overall} className="mt-4" />
          </div>

          {/* Risk Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Political Risk</span>
                <TrendingUp className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-2xl font-bold text-white">{risk.political}</div>
              <Progress value={risk.political} className="mt-2" />
            </div>

            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Economic Risk</span>
                <DollarSign className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-white">{risk.economic}</div>
              <Progress value={risk.economic} className="mt-2" />
            </div>

            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Security Risk</span>
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white">{risk.security}</div>
              <Progress value={risk.security} className="mt-2" />
            </div>
          </div>

          {/* Key Risk Factors */}
          <div>
            <h3 className="text-white font-semibold mb-3">Key Risk Factors</h3>
            <div className="space-y-2">
              {country === "Russia" && (
                <>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">International Sanctions</span>
                    <Badge className="bg-red-600">Critical</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">Military Conflict</span>
                    <Badge className="bg-red-600">Critical</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">Currency Volatility</span>
                    <Badge className="bg-orange-600">High</Badge>
                  </div>
                </>
              )}
              {country === "China" && (
                <>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">Trade Tensions</span>
                    <Badge className="bg-orange-600">High</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">Regulatory Changes</span>
                    <Badge className="bg-orange-600">High</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">Taiwan Tensions</span>
                    <Badge className="bg-yellow-600">Medium</Badge>
                  </div>
                </>
              )}
              {country === "United States" && (
                <>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">Political Polarization</span>
                    <Badge className="bg-yellow-600">Medium</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">Debt Ceiling Issues</span>
                    <Badge className="bg-yellow-600">Medium</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800 rounded p-3">
                    <span className="text-slate-300">Infrastructure Aging</span>
                    <Badge className="bg-green-600">Low</Badge>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Business Impact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Potential Business Impact</h3>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-400 text-sm">Supply Chain Risk</span>
                  <div className="text-white font-medium">
                    {risk.overall > 70 ? "Severe Disruption" : risk.overall > 40 ? "Moderate Impact" : "Minimal Risk"}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Market Access</span>
                  <div className="text-white font-medium">
                    {risk.overall > 70 ? "Restricted" : risk.overall > 40 ? "Limited" : "Open"}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Investment Climate</span>
                  <div className="text-white font-medium">
                    {risk.overall > 70 ? "Hostile" : risk.overall > 40 ? "Cautious" : "Favorable"}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Regulatory Stability</span>
                  <div className="text-white font-medium">
                    {risk.overall > 70 ? "Unpredictable" : risk.overall > 40 ? "Evolving" : "Stable"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-white font-semibold mb-3">Recommended Actions</h3>
            <div className="space-y-2">
              <div className="bg-blue-900 border border-blue-700 rounded p-3">
                <div className="text-blue-300 font-medium">Monitor Closely</div>
                <div className="text-blue-200 text-sm">Increase monitoring frequency to daily updates</div>
              </div>
              <div className="bg-orange-900 border border-orange-700 rounded p-3">
                <div className="text-orange-300 font-medium">Diversify Operations</div>
                <div className="text-orange-200 text-sm">Consider alternative suppliers and markets</div>
              </div>
              <div className="bg-green-900 border border-green-700 rounded p-3">
                <div className="text-green-300 font-medium">Review Insurance</div>
                <div className="text-green-200 text-sm">Evaluate political risk insurance coverage</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
