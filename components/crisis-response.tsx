"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, AlertTriangle, Clock, FileText, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function CrisisResponse() {
  const [activePlaybook, setActivePlaybook] = useState<string | null>(null)
  const [completedActions, setCompletedActions] = useState<string[]>([])
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showNotifyModal, setShowNotifyModal] = useState(false)
  const [selectedAlert, setSelectedAlert] = useState<any>(null)
  const [selectedGroup, setSelectedGroup] = useState<any>(null)
  const [notificationMessage, setNotificationMessage] = useState("")
  const { toast } = useToast()

  const responseReadiness = {
    overall: 72,
    communication: 85,
    operations: 68,
    legal: 75,
    financial: 70,
  }

  const activeAlerts = [
    {
      id: "1",
      title: "Russia-Ukraine Escalation Alert",
      severity: "Critical",
      status: "Active",
      triggered: "2 hours ago",
      affectedRegions: ["Eastern Europe", "Global Supply Chain"],
      recommendedActions: 5,
      completedActions: 2,
      description:
        "Significant military buildup detected along Ukrainian border with increased diplomatic tensions. Supply chain disruptions expected within 48-72 hours.",
      keyIndicators: [
        "Satellite imagery shows 40% increase in military equipment",
        "Diplomatic communications breakdown confirmed",
        "Energy futures up 15% in European markets",
        "Major suppliers issuing force majeure warnings",
      ],
      businessImpact: {
        immediate: "Supply chain disruptions, energy cost increases",
        shortTerm: "Manufacturing delays, logistics rerouting required",
        longTerm: "Potential market access restrictions, compliance changes",
      },
    },
    {
      id: "2",
      title: "China-Taiwan Military Exercise",
      severity: "High",
      status: "Monitoring",
      triggered: "6 hours ago",
      affectedRegions: ["Asia Pacific", "Technology Sector"],
      recommendedActions: 3,
      completedActions: 1,
      description:
        "Large-scale military exercises announced in Taiwan Strait with semiconductor supply chain implications.",
      keyIndicators: [
        "Naval exercises involving 50+ vessels",
        "Airspace restrictions implemented",
        "Semiconductor stocks down 8%",
        "Shipping routes being rerouted",
      ],
      businessImpact: {
        immediate: "Semiconductor supply uncertainty",
        shortTerm: "Technology production delays",
        longTerm: "Supply chain diversification needs",
      },
    },
  ]

  const playbooks = [
    {
      id: "supply-chain",
      title: "Supply Chain Disruption Response",
      description: "Comprehensive response plan for supply chain interruptions",
      lastUpdated: "2024-01-15",
      estimatedDuration: "4-6 hours",
      actions: [
        "Activate alternative suppliers",
        "Assess inventory levels",
        "Communicate with key customers",
        "Review logistics alternatives",
        "Update stakeholders",
      ],
    },
    {
      id: "geopolitical",
      title: "Geopolitical Crisis Management",
      description: "Response framework for political instability and conflicts",
      lastUpdated: "2024-01-10",
      estimatedDuration: "6-12 hours",
      actions: [
        "Evacuate personnel if necessary",
        "Secure critical assets",
        "Activate crisis communication",
        "Review insurance coverage",
        "Coordinate with authorities",
      ],
    },
    {
      id: "sanctions",
      title: "Economic Sanctions Response",
      description: "Compliance and operational response to new sanctions",
      lastUpdated: "2024-01-12",
      estimatedDuration: "2-4 hours",
      actions: [
        "Review affected transactions",
        "Update compliance procedures",
        "Notify legal team",
        "Assess business impact",
        "Communicate with partners",
      ],
    },
  ]

  const stakeholderGroups = [
    { name: "Executive Team", contacts: 12, lastNotified: "1 hour ago", status: "Notified" },
    { name: "Board of Directors", contacts: 8, lastNotified: "2 hours ago", status: "Notified" },
    { name: "Key Customers", contacts: 45, lastNotified: "3 hours ago", status: "Pending" },
    { name: "Suppliers", contacts: 23, lastNotified: "4 hours ago", status: "Pending" },
    { name: "Employees", contacts: 1250, lastNotified: "5 hours ago", status: "Scheduled" },
  ]

  const emergencyContacts = [
    { name: "Crisis Management Team", role: "24/7 Emergency Line", phone: "+1-800-CRISIS-1" },
    { name: "Legal Department", role: "Compliance & Risk", phone: "+1-800-LEGAL-1" },
    { name: "Security Operations", role: "Physical & Cyber Security", phone: "+1-800-SECURE-1" },
  ]

  const resourceLibrary = [
    { name: "Crisis Communication Templates", type: "Press releases, internal memos", size: "2.3 MB" },
    { name: "Legal Compliance Checklists", type: "Regulatory requirements", size: "1.8 MB" },
    { name: "Emergency Procedures", type: "Evacuation, security protocols", size: "3.1 MB" },
  ]

  // Handler functions
  const handleViewDetails = (alert: any) => {
    setSelectedAlert(alert)
    setShowDetailsModal(true)
  }

  const handleActivateResponse = (alert: any) => {
    toast({
      title: "Response Activated",
      description: `Crisis team has been notified for: ${alert.title}. Response protocols initiated.`,
    })
  }

  const handleExecutePlaybook = (playbook: any) => {
    toast({
      title: "Playbook Executing",
      description: `${playbook.title} - All team members will receive their assigned tasks.`,
    })
    setActivePlaybook(playbook.id)
  }

  const handleExport = (playbook: any) => {
    toast({
      title: "Export Started",
      description: `${playbook.title} PDF download will begin shortly.`,
    })
  }

  const handleNotify = (group: any) => {
    setSelectedGroup(group)
    setShowNotifyModal(true)
  }

  const handleCall = (group: any) => {
    toast({
      title: "Conference Call Initiated",
      description: `Dial-in details sent to ${group.name} participants.`,
    })
  }

  const handleDownload = (resource: any) => {
    toast({
      title: "Download Started",
      description: `${resource.name} will be available in your downloads folder.`,
    })
  }

  const handleSendNotification = () => {
    toast({
      title: "Notification Sent",
      description: `Message sent to ${selectedGroup?.name}: "${notificationMessage}"`,
    })
    setShowNotifyModal(false)
    setNotificationMessage("")
  }

  const toggleAction = (actionId: string) => {
    setCompletedActions((prev) =>
      prev.includes(actionId) ? prev.filter((id) => id !== actionId) : [...prev, actionId],
    )
  }

  const dummyMetrics = {
    activeAlerts: 3,
    responseTime: "4.2 min",
    teamReadiness: 87,
    playbooksActive: 5,
  }

  const dummyAlerts = [
    { title: "Supply Chain Disruption", severity: "Critical", region: "Eastern Europe" },
    { title: "Trade Route Blockage", severity: "High", region: "Asia Pacific" },
    { title: "Currency Volatility", severity: "Medium", region: "Latin America" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Crisis Response Center</h1>
          <p className="text-slate-400">Emergency response coordination and crisis management</p>
        </div>
        <Badge className="bg-orange-600 animate-pulse">🚧 Advanced Feature Coming Soon</Badge>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-600">
        <CardContent className="p-6 text-center">
          <Zap className="w-16 h-16 text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Advanced Crisis Response System</h2>
          <p className="text-orange-200 mb-4">
            Real-time crisis coordination, automated response playbooks, and integrated communication systems are
            currently in development.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="text-orange-300">• Automated Response Triggers</span>
            <span className="text-orange-300">• Multi-Channel Communications</span>
            <span className="text-orange-300">• Real-time Team Coordination</span>
          </div>
        </CardContent>
      </Card>

      {/* Preview Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.activeAlerts}</div>
            <div className="text-sm text-slate-400">Active Alerts</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.responseTime}</div>
            <div className="text-sm text-slate-400">Avg Response Time</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.teamReadiness}%</div>
            <div className="text-sm text-slate-400">Team Readiness</div>
            <Progress value={dummyMetrics.teamReadiness} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.playbooksActive}</div>
            <div className="text-sm text-slate-400">Active Playbooks</div>
          </CardContent>
        </Card>
      </div>

      {/* Sample Alerts */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Sample Crisis Alerts (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dummyAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  <div>
                    <div className="text-white font-medium">{alert.title}</div>
                    <div className="text-sm text-slate-400">{alert.region}</div>
                  </div>
                </div>
                <Badge
                  className={
                    alert.severity === "Critical"
                      ? "bg-red-600"
                      : alert.severity === "High"
                        ? "bg-orange-600"
                        : "bg-yellow-600"
                  }
                >
                  {alert.severity}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
