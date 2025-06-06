"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"
import { GlobalMap } from "@/components/global-map"
import { PredictionPanel } from "@/components/prediction-panel"
import { CompanyImpact } from "@/components/company-impact"
import { IntelligenceFeed } from "@/components/intelligence-feed"
import { CrisisResponse } from "@/components/crisis-response"
import { GlobalRiskIndex } from "@/components/global-risk-index"
import { MsmeDashboard } from "@/components/msme-dashboard"

export default function Home() {
  const [activeView, setActiveView] = useState("msme-dashboard")

  const renderActiveView = () => {
    switch (activeView) {
      case "msme-dashboard":
        return <MsmeDashboard />
      case "dashboard":
        return <Dashboard />
      case "global-risk-index":
        return <GlobalRiskIndex />
      case "map":
        return <GlobalMap />
      case "predictions":
        return <PredictionPanel />
      case "impact":
        return <CompanyImpact />
      case "intelligence":
        return <IntelligenceFeed />
      case "response":
        return <CrisisResponse />
      case "industry":
      case "quantification":
      case "business-model":
      case "decision-support":
      case "collaboration":
      case "visualization":
      case "war-room":
      case "ethical-ai":
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                {activeView.charAt(0).toUpperCase() + activeView.slice(1).replace("-", " ")} Module
              </h2>
              <p className="text-slate-400">Advanced feature coming soon...</p>
            </div>
          </div>
        )
      default:
        return <MsmeDashboard />
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{renderActiveView()}</main>
      </div>
    </div>
  )
}
