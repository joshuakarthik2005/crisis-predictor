"use client"

import { cn } from "@/lib/utils"
import {
  Globe,
  TrendingUp,
  Building2,
  Newspaper,
  Shield,
  BarChart3,
  Settings,
  Factory,
  Calculator,
  Lightbulb,
  Brain,
  Users,
  Eye,
  AlertTriangle,
  Heart,
  Activity,
  Store,
} from "lucide-react"

interface SidebarProps {
  activeView: string
  onViewChange: (view: string) => void
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: "msme-dashboard", label: "MSME Dashboard", icon: Store, badge: "NEW" },
    { id: "dashboard", label: "Enterprise View", icon: BarChart3 },
    { id: "global-risk-index", label: "Global Risk Index™", icon: Activity },
    { id: "map", label: "Global Map", icon: Globe },
    { id: "predictions", label: "AI Predictions", icon: TrendingUp },
    { id: "impact", label: "Company Impact", icon: Building2 },
    { id: "intelligence", label: "Intelligence Feed", icon: Newspaper },
    { id: "response", label: "Crisis Response", icon: Shield },
    { id: "industry", label: "Industry Focus", icon: Factory },
    { id: "quantification", label: "Risk Quantification", icon: Calculator },
    { id: "business-model", label: "Business Innovation", icon: Lightbulb },
    { id: "decision-support", label: "AI Decision Support", icon: Brain },
    { id: "collaboration", label: "Human-AI Collab", icon: Users },
    { id: "visualization", label: "Advanced Viz", icon: Eye },
    { id: "war-room", label: "Digital War Room", icon: AlertTriangle },
    { id: "ethical-ai", label: "Ethical AI", icon: Heart },
  ]

  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">CrisisPredict</h1>
            <p className="text-xs text-slate-400">
              <span className="text-green-400">MSME</span> Edition
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200",
                    activeView === item.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white",
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={() => onViewChange("settings")}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  )
}
