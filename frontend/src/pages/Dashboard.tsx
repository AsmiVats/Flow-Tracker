
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, Info, AlertCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { phaseInfo } from "@/Data/PhaseInfo"
import Advices from "@/components/Advices"
import Phases from "@/components/Phases"

// Mock data - in a real app, this would come from an API or database
const userData = {
  name: "Sarah",
  avatar: "/placeholder.svg?height=40&width=40",
  lastPeriod: "2024-06-01",
  cycleLength: 28,
  currentPhase: "follicular", // menstrual, follicular, ovulation, luteal
  currentCycleDay: 22,
  nextPeriod: "2024-06-29",
  upcomingPhases: [
    { name: "Menstrual", startDate: "2024-06-29", endDate: "2024-07-04", daysUntil: 17 },
    { name: "Follicular", startDate: "2024-07-05", endDate: "2024-07-12", daysUntil: 23 },
    { name: "Ovulation", startDate: "2024-07-13", endDate: "2024-07-15", daysUntil: 31 },
    { name: "Luteal", startDate: "2024-07-16", endDate: "2024-07-28", daysUntil: 34 },
  ],
}



export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Get current phase information
  const currentPhaseInfo = phaseInfo[userData.currentPhase as keyof typeof phaseInfo]
  const PhaseIcon = currentPhaseInfo.icon

  // Calculate cycle progress
  const cycleProgress = Math.round((userData.currentCycleDay / userData.cycleLength) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              FlowTracker
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome back, {userData.name}!</h1>
          <p className="text-gray-600">Here's your personalized cycle information and health insights.</p>
        </section>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 md:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="phases">Cycle Phases</TabsTrigger>
            <TabsTrigger value="advice">Health Advice</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Current Phase Card */}
            <Card
              className="border-l-4"
              style={{ borderLeftColor: currentPhaseInfo.color.replace("text-", "rgb(") + ")" }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <PhaseIcon className={`${currentPhaseInfo.color} h-5 w-5`} />
                      <span>You're in your {currentPhaseInfo.title}</span>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Day {userData.currentCycleDay} of your {userData.cycleLength}-day cycle
                    </CardDescription>
                  </div>
                  <Badge className={`${currentPhaseInfo.bgColor} ${currentPhaseInfo.color}`}>Current Phase</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cycle Progress</span>
                      <span>{cycleProgress}%</span>
                    </div>
                    <Progress value={cycleProgress} className="h-2" />
                  </div>
                  <p className="text-sm text-gray-600">{currentPhaseInfo.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Key Dates Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-pink-600" />
                  <span>Important Dates</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Last Period Started</div>
                    <div className="font-medium">
                      {new Date(userData.lastPeriod).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Next Period Expected</div>
                    <div className="font-medium">
                      {new Date(userData.nextPeriod).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Normal Symptoms Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-indigo-600" />
                  <span>What's Normal Right Now</span>
                </CardTitle>
                <CardDescription>Common experiences during your {currentPhaseInfo.title.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {currentPhaseInfo.normalSymptoms.map((symptom, index) => (
                    <Badge key={index} variant="outline" className="bg-white">
                      {symptom}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600 flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span>
                    If you're experiencing severe symptoms that disrupt your daily life, consider consulting with a
                    healthcare provider.
                  </span>
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Phases Tab */}
          <TabsContent value="phases" className="space-y-6">
            {/* Cycle Visualization */}
<Phases  />
{/* <Card>
              <CardHeader>
                <CardTitle>Your Upcoming Phases</CardTitle>
                <CardDescription>Plan ahead with your predicted cycle phases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.upcomingPhases.map((phase, index) => {
                    const phaseKey = phase.name.toLowerCase() as keyof typeof phaseInfo
                    const info = phaseInfo[phaseKey]
                    const Icon = info.icon

                    return (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                        <div className={`w-10 h-10 rounded-full ${info.bgColor} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{phase.name} Phase</div>
                          <div className="text-sm text-gray-600">
                            {new Date(phase.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}{" "}
                            -{new Date(phase.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </div>
                        </div>
                        <Badge variant="outline">In {phase.daysUntil} days</Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card> */}
            
          </TabsContent>

          {/* Advice Tab */}
          <TabsContent value="advice" >
            <Advices currentPhase={userData.currentPhase}/>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
