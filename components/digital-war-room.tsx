"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, AlertTriangle, Users, MessageSquare, Target, Clock, FileText } from "lucide-react"

export function DigitalWarRoom() {
  const dummyMetrics = {
    activeIncidents: 2,
    responseTime: "3.2min",
    teamMembers: 12,
    playbooksReady: 8,
  }

  const dummyIncidents = [
    { title: "Supply Chain Crisis", severity: "Critical", status: "Active", progress: 65, team: 8 },
    { title: "Trade Route Disruption", severity: "High", status: "Monitoring", progress: 25, team: 5 },
  ]

  const dummyTeamMembers = [
    { name: "Sarah Chen", role: "Crisis Manager", status: "Active", lastSeen: "2 min ago" },
    { name: "Mike Rodriguez", role: "Operations Lead", status: "Active", lastSeen: "5 min ago" },
    { name: "Dr. Emily Watson", role: "Risk Analyst", status: "Available", lastSeen: "10 min ago" },
    { name: "James Park", role: "Communications", status: "Busy", lastSeen: "15 min ago" },
  ]

  const dummyPlaybooks = [
    { title: "Supply Chain Disruption", actions: 12, completed: 8, duration: "4-6 hours" },
    { title: "Geopolitical Crisis", actions: 15, completed: 0, duration: "6-12 hours" },
    { title: "Economic Sanctions", actions: 8, completed: 3, duration: "2-4 hours" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Digital War Room</h1>
          <p className="text-slate-400">Integrated crisis response and real-time coordination</p>
        </div>
        <Badge className="bg-red-600 animate-pulse">🚧 Advanced Feature Coming Soon</Badge>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-600">
        <CardContent className="p-6 text-center">
          <Target className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Integrated Crisis Command Center</h2>
          <p className="text-red-200 mb-4">
            Real-time crisis coordination, automated response protocols, team communication, and integrated decision
            support for managing complex geopolitical crises.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="text-red-300">• Real-time Coordination</span>
            <span className="text-red-300">• Automated Protocols</span>
            <span className="text-red-300">• Team Integration</span>
          </div>
        </CardContent>
      </Card>

      {/* Preview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.activeIncidents}</div>
            <div className="text-sm text-slate-400">Active Incidents</div>
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
            <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.teamMembers}</div>
            <div className="text-sm text-slate-400">Team Members</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4 text-center">
            <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{dummyMetrics.playbooksReady}</div>
            <div className="text-sm text-slate-400">Playbooks Ready</div>
          </CardContent>
        </Card>
      </div>

      {/* Sample Incidents */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Active Crisis Incidents (Preview)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dummyIncidents.map((incident, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 opacity-60">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-medium">{incident.title}</h4>
                    <div className="text-sm text-slate-400 mt-1">
                      Status: {incident.status} • Team: {incident.team} members
                    </div>
                  </div>
                  <Badge className={incident.severity === "Critical" ? "bg-red-600" : "bg-orange-600"}>
                    {incident.severity}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Response Progress</span>
                    <span className="text-white">{incident.progress}%</span>
                  </div>
                  <Progress value={incident.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* War Room Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <span>Crisis Communication (Preview)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 opacity-60">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Executive Team</span>
                <Badge className="bg-green-600">Notified</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Key Customers</span>
                <Badge className="bg-orange-600">Pending</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Media Relations</span>
                <Badge className="bg-gray-600">Standby</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Suppliers</span>
                <Badge className="bg-orange-600">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-400" />
              <span>Team Coordination (Preview)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 opacity-60">
              {dummyTeamMembers.map((member, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <div>
                    <span className="text-slate-300">{member.name}</span>
                    <div className="text-xs text-slate-500">{member.role}</div>
                  </div>
                  <Badge
                    className={
                      member.status === "Active"
                        ? "bg-green-600"
                        : member.status === "Available"
                          ? "bg-blue-600"
                          : "bg-orange-600"
                    }
                  >
                    {member.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Response Playbooks */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <FileText className="w-5 h-5 text-orange-400" />
            <span>Response Playbooks (Preview)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dummyPlaybooks.map((playbook, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 opacity-60">
                <h4 className="text-white font-medium mb-2">{playbook.title}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Actions:</span>
                    <span className="text-white">
                      {playbook.completed}/{playbook.actions}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Duration:</span>
                    <span className="text-white">{playbook.duration}</span>
                  </div>
                  <Progress value={(playbook.completed / playbook.actions) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Resources */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>Emergency Resources (Preview)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
            <div>
              <h4 className="text-white font-medium mb-3">Emergency Contacts</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Crisis Management Team</span>
                  <span className="text-white">+1-800-CRISIS-1</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Legal Department</span>
                  <span className="text-white">+1-800-LEGAL-1</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Security Operations</span>
                  <span className="text-white">+1-800-SECURE-1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Resource Library</h4>
              <div className="space-y-2">
                <div className="text-sm text-slate-400">• Crisis Communication Templates</div>
                <div className="text-sm text-slate-400">• Legal Compliance Checklists</div>
                <div className="text-sm text-slate-400">• Emergency Procedures</div>
                <div className="text-sm text-slate-400">• Stakeholder Contact Lists</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
