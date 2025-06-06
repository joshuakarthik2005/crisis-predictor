"use client"

import { Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900 py-4 px-6">
      <div className="flex items-center justify-between w-full">
        {/* Left side - Logo and Search */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CrisisPredict</h1>
              <p className="text-xs text-slate-400">AI Geopolitical Risk Intelligence</p>
            </div>
          </div>

          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search countries, events, risks..."
              className="pl-10 bg-slate-800 border-slate-700 focus:border-blue-600 h-10"
            />
          </div>
        </div>

        {/* Right side - Status badges and buttons */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2">
            <Badge variant="outline" className="bg-green-900/30 text-green-400 border-green-800">
              System: Online
            </Badge>
            <Badge variant="outline" className="bg-blue-900/30 text-blue-400 border-blue-800">
              Data: Live
            </Badge>
            <Badge variant="outline" className="bg-purple-900/30 text-purple-400 border-purple-800">
              AI: Active
            </Badge>
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
          </Button>

          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Generate Report
          </Button>
        </div>
      </div>
    </header>
  )
}
