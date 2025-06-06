"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  TrendingUp,
  MessageSquare,
  Share,
  Bookmark,
  ExternalLink,
  Clock,
  Globe,
  AlertTriangle,
} from "lucide-react"
import { intelligenceUpdates } from "@/lib/sample-data"

export function IntelligenceFeed() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSource, setSelectedSource] = useState("all")
  const [selectedImpact, setSelectedImpact] = useState("all")
  const [updates, setUpdates] = useState(intelligenceUpdates)

  const [showCommentModal, setShowCommentModal] = useState(false)
  const [selectedUpdate, setSelectedUpdate] = useState<any>(null)
  const [comment, setComment] = useState("")

  const handleComment = (update: any) => {
    setSelectedUpdate(update)
    setShowCommentModal(true)
  }

  const handleShare = (update: any) => {
    navigator.clipboard.writeText(`Check out this intelligence update: ${update.headline}`)
    alert("Link copied to clipboard!")
  }

  const handleBookmark = (update: any) => {
    alert(`Bookmarked: ${update.headline}`)
  }

  const handleExternalLink = (update: any) => {
    window.open(`https://example.com/source/${update.source}`, "_blank")
  }

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        headline: "Breaking: New geopolitical development detected",
        source: "Reuters",
        credibility: 95,
        impact: "Medium",
        category: "Political",
        region: "Global",
        sentiment: 0.2,
        engagement: { likes: 0, shares: 0, comments: 0 },
      }
      setUpdates((prev) => [newUpdate, ...prev.slice(0, 19)])
    }, 30000) // New update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const sources = [
    { id: "all", label: "All Sources", count: updates.length },
    { id: "reuters", label: "Reuters", count: updates.filter((u) => u.source === "Reuters").length },
    { id: "bloomberg", label: "Bloomberg", count: updates.filter((u) => u.source === "Bloomberg").length },
    { id: "ft", label: "Financial Times", count: updates.filter((u) => u.source === "Financial Times").length },
    { id: "social", label: "Social Media", count: updates.filter((u) => u.source.includes("Twitter")).length },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case "high":
        return "bg-red-600"
      case "medium":
        return "bg-orange-600"
      case "low":
        return "bg-yellow-600"
      default:
        return "bg-gray-600"
    }
  }

  const getCredibilityColor = (credibility: number) => {
    if (credibility >= 90) return "text-green-400"
    if (credibility >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  const getSentimentIcon = (sentiment: number) => {
    if (sentiment > 0.1) return "📈"
    if (sentiment < -0.1) return "📉"
    return "➡️"
  }

  const filteredUpdates = updates.filter((update) => {
    const matchesSearch = update.headline.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSource = selectedSource === "all" || update.source.toLowerCase().includes(selectedSource)
    const matchesImpact = selectedImpact === "all" || update.impact.toLowerCase() === selectedImpact
    return matchesSearch && matchesSource && matchesImpact
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Real-Time Intelligence Feed</h1>
          <p className="text-slate-400">Live geopolitical developments with AI-powered analysis</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-slate-300">Live Updates</span>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search intelligence updates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-700"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-300">Source:</span>
              {sources.slice(0, 4).map((source) => (
                <Button
                  key={source.id}
                  variant={selectedSource === source.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSource(source.id)}
                  className={`text-xs ${selectedSource === source.id ? "bg-blue-600" : ""}`}
                >
                  {source.label} ({source.count})
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-300">Impact:</span>
              {["all", "high", "medium", "low"].map((impact) => (
                <Button
                  key={impact}
                  variant={selectedImpact === impact ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedImpact(impact)}
                  className={`text-xs capitalize ${selectedImpact === impact ? "bg-blue-600" : ""}`}
                >
                  {impact}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Trending Topics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["Russia-Ukraine", "China-Taiwan", "Iran Nuclear", "Trade Wars", "Energy Crisis", "Sanctions"].map(
              (topic) => (
                <Badge key={topic} variant="outline" className="cursor-pointer hover:bg-slate-700">
                  #{topic}
                </Badge>
              ),
            )}
          </div>
        </CardContent>
      </Card>

      {/* Intelligence Updates */}
      <div className="space-y-4">
        {filteredUpdates.map((update, index) => (
          <Card
            key={update.id || index}
            className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {update.source}
                    </Badge>
                    <span className={`text-xs ${getCredibilityColor(update.credibility)}`}>
                      {update.credibility}% credible
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{update.timestamp}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getImpactColor(update.impact)}>{update.impact} Impact</Badge>
                  <span className="text-lg">{getSentimentIcon(update.sentiment)}</span>
                </div>
              </div>

              <h3 className="text-white font-medium mb-2 leading-relaxed">{update.headline}</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Globe className="w-3 h-3" />
                    <span>{update.region}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>{update.category}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white"
                    onClick={() => handleComment(update)}
                  >
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {update.engagement?.comments || 0}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white"
                    onClick={() => handleShare(update)}
                  >
                    <Share className="w-4 h-4 mr-1" />
                    {update.engagement?.shares || 0}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white"
                    onClick={() => handleBookmark(update)}
                  >
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white"
                    onClick={() => handleExternalLink(update)}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* AI Analysis Preview */}
              {index < 3 && (
                <div className="mt-3 bg-slate-800 rounded p-3">
                  <div className="text-xs text-blue-400 mb-1">AI Analysis</div>
                  <p className="text-xs text-slate-300">
                    This development shows{" "}
                    {update.sentiment > 0 ? "positive" : update.sentiment < 0 ? "negative" : "neutral"} sentiment with
                    potential {update.impact.toLowerCase()} impact on global markets. Monitoring for escalation patterns
                    and cross-regional effects.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="w-full">
          Load More Updates
        </Button>
      </div>
    </div>
  )
}
