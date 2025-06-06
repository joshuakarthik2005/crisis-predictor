"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { ZoomIn, ZoomOut, RotateCcw, Layers } from "lucide-react"
import { countryRisks } from "@/lib/sample-data"
import { CountryDetail } from "./country-detail"

interface GlobalMapProps {
  onCountrySelect: (country: string) => void
  selectedCountry: string | null
}

export function GlobalMap({ onCountrySelect, selectedCountry }: GlobalMapProps) {
  const [activeLayer, setActiveLayer] = useState("overall")
  const [timeProjection, setTimeProjection] = useState([0])
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [showDetail, setShowDetail] = useState(false)
  const [zoom, setZoom] = useState(1)

  const layers = [
    { id: "overall", label: "Overall Risk", color: "bg-red-500" },
    { id: "political", label: "Political", color: "bg-blue-500" },
    { id: "economic", label: "Economic", color: "bg-green-500" },
    { id: "security", label: "Security", color: "bg-orange-500" },
  ]

  const handleCountryClick = (countryName: string) => {
    onCountrySelect(countryName)
    setShowDetail(true)
  }

  const handleZoomIn = () => {
    setZoom(Math.min(zoom * 1.5, 3))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom / 1.5, 1))
  }

  const handleReset = () => {
    setZoom(1)
  }

  const getCountryRisk = (countryName: string) => {
    return countryRisks[countryName as keyof typeof countryRisks]
  }

  const getCountryColor = (countryName: string) => {
    const risk = getCountryRisk(countryName)
    if (!risk) return "#475569" // slate-600

    const riskValue = risk[activeLayer as keyof typeof risk] || risk.overall

    if (riskValue >= 80) return "#ef4444" // red-500
    if (riskValue >= 60) return "#f97316" // orange-500
    if (riskValue >= 40) return "#eab308" // yellow-500
    return "#22c55e" // green-500
  }

  // Define countries with their SVG paths and positions
  const countries = [
    {
      name: "United States",
      path: "M158,206 L158,156 L108,156 L108,131 L83,131 L83,106 L58,106 L58,81 L33,81 L33,56 L8,56 L8,31 L33,31 L33,6 L158,6 L158,31 L183,31 L183,56 L208,56 L208,81 L233,81 L233,106 L258,106 L258,131 L283,131 L283,156 L308,156 L308,181 L283,181 L283,206 Z",
      x: 50,
      y: 120,
    },
    {
      name: "China",
      path: "M400,180 L400,130 L350,130 L350,105 L325,105 L325,80 L300,80 L300,55 L325,55 L325,30 L400,30 L400,55 L425,55 L425,80 L450,80 L450,105 L475,105 L475,130 L500,130 L500,155 L475,155 L475,180 Z",
      x: 600,
      y: 150,
    },
    {
      name: "Russia",
      path: "M300,120 L300,70 L250,70 L250,45 L200,45 L200,20 L150,20 L150,45 L100,45 L100,70 L50,70 L50,95 L100,95 L100,120 L150,120 L150,145 L200,145 L200,170 L250,170 L250,145 L300,145 Z",
      x: 400,
      y: 80,
    },
    {
      name: "Germany",
      path: "M50,100 L50,75 L25,75 L25,50 L0,50 L0,25 L25,25 L25,0 L75,0 L75,25 L100,25 L100,50 L75,50 L75,75 L50,75 Z",
      x: 350,
      y: 140,
    },
    {
      name: "United Kingdom",
      path: "M40,80 L40,60 L20,60 L20,40 L0,40 L0,20 L20,20 L20,0 L60,0 L60,20 L80,20 L80,40 L60,40 L60,60 L40,60 Z",
      x: 320,
      y: 120,
    },
    {
      name: "France",
      path: "M60,120 L60,90 L30,90 L30,60 L0,60 L0,30 L30,30 L30,0 L90,0 L90,30 L120,30 L120,60 L90,60 L90,90 L60,90 Z",
      x: 340,
      y: 160,
    },
    {
      name: "Iran",
      path: "M80,100 L80,75 L55,75 L55,50 L30,50 L30,25 L5,25 L5,0 L105,0 L105,25 L130,25 L130,50 L105,50 L105,75 L80,75 Z",
      x: 450,
      y: 200,
    },
    {
      name: "Turkey",
      path: "M70,90 L70,65 L45,65 L45,40 L20,40 L20,15 L95,15 L95,40 L120,40 L120,65 L95,65 L95,90 Z",
      x: 380,
      y: 180,
    },
    {
      name: "Taiwan",
      path: "M20,40 L20,30 L10,30 L10,20 L0,20 L0,10 L10,10 L10,0 L30,0 L30,10 L40,10 L40,20 L30,20 L30,30 L20,30 Z",
      x: 650,
      y: 220,
    },
    {
      name: "Ukraine",
      path: "M80,100 L80,75 L55,75 L55,50 L30,50 L30,25 L5,25 L5,0 L105,0 L105,25 L130,25 L130,50 L105,50 L105,75 L80,75 Z",
      x: 380,
      y: 140,
    },
  ]

  return (
    <div className="space-y-4">
      {/* Map Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-300">Risk Layer:</span>
          {layers.map((layer) => (
            <Button
              key={layer.id}
              variant={activeLayer === layer.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveLayer(layer.id)}
              className={`${activeLayer === layer.id ? "bg-blue-600" : ""} text-xs`}
            >
              <div className={`w-2 h-2 rounded-full ${layer.color} mr-2`} />
              {layer.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleZoomIn}>
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleZoomOut}>
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Time Projection Slider */}
      <div className="bg-slate-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-slate-300">Time Projection</span>
          <Badge variant="outline">{timeProjection[0] === 0 ? "Current" : `+${timeProjection[0]} days`}</Badge>
        </div>
        <Slider value={timeProjection} onValueChange={setTimeProjection} max={90} step={30} className="w-full" />
        <div className="flex justify-between text-xs text-slate-400 mt-2">
          <span>Current</span>
          <span>30 Days</span>
          <span>60 Days</span>
          <span>90 Days</span>
        </div>
      </div>

      {/* World Map Visualization */}
      <div className="bg-slate-800 rounded-lg p-4 relative">
        <div className="relative w-full h-[400px] bg-slate-900 rounded-lg overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 400"
            style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
          >
            {/* Background continents */}
            <g className="opacity-30">
              {/* North America */}
              <rect x="50" y="100" width="200" height="120" rx="10" className="fill-slate-700" />
              {/* South America */}
              <rect x="120" y="220" width="80" height="140" rx="8" className="fill-slate-700" />
              {/* Europe */}
              <rect x="320" y="120" width="100" height="80" rx="6" className="fill-slate-700" />
              {/* Africa */}
              <rect x="320" y="200" width="120" height="160" rx="8" className="fill-slate-700" />
              {/* Asia */}
              <rect x="420" y="80" width="280" height="200" rx="10" className="fill-slate-700" />
              {/* Australia */}
              <rect x="580" y="280" width="100" height="60" rx="6" className="fill-slate-700" />
            </g>

            {/* Country Risk Indicators */}
            {countries.map((country) => {
              const risk = getCountryRisk(country.name)
              const riskValue = risk ? risk[activeLayer as keyof typeof risk] || risk.overall : 0
              const isHovered = hoveredCountry === country.name

              return (
                <g key={country.name}>
                  <rect
                    x={country.x}
                    y={country.y}
                    width="60"
                    height="40"
                    rx="4"
                    fill={getCountryColor(country.name)}
                    stroke={isHovered ? "#ffffff" : "#1e293b"}
                    strokeWidth={isHovered ? "2" : "1"}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onClick={() => handleCountryClick(country.name)}
                    opacity={isHovered ? 0.9 : 0.8}
                  />
                  <text
                    x={country.x + 30}
                    y={country.y + 20}
                    className="fill-white text-sm font-bold pointer-events-none"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {riskValue}
                  </text>
                  <text
                    x={country.x + 30}
                    y={country.y + 32}
                    className="fill-white text-xs pointer-events-none"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {country.name.length > 8 ? country.name.substring(0, 8) + "..." : country.name}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* Hover Tooltip */}
          {hoveredCountry && (
            <div className="absolute top-4 left-4 bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-lg z-10">
              <h4 className="text-white font-medium">{hoveredCountry}</h4>
              <div className="text-sm text-slate-300 mt-1">
                {(() => {
                  const risk = getCountryRisk(hoveredCountry)
                  if (!risk) return null

                  const riskValue = risk[activeLayer as keyof typeof risk] || risk.overall
                  let riskLevel = "Low"

                  if (riskValue >= 80) riskLevel = "Critical"
                  else if (riskValue >= 60) riskLevel = "High"
                  else if (riskValue >= 40) riskLevel = "Medium"

                  return (
                    <>
                      Risk Score: <span className="font-bold">{riskValue}</span>
                      <br />
                      Risk Level: <span className="font-bold">{riskLevel}</span>
                    </>
                  )
                })()}
              </div>
              <div className="text-xs text-slate-400 mt-1">Click for detailed analysis</div>
            </div>
          )}
        </div>

        {/* Risk Legend */}
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded" />
            <span className="text-xs text-slate-300">Low (0-39)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded" />
            <span className="text-xs text-slate-300">Medium (40-59)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded" />
            <span className="text-xs text-slate-300">High (60-79)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded" />
            <span className="text-xs text-slate-300">Critical (80-100)</span>
          </div>
        </div>
      </div>

      {/* Country Detail Modal */}
      {showDetail && selectedCountry && (
        <CountryDetail country={selectedCountry} onClose={() => setShowDetail(false)} />
      )}
    </div>
  )
}
