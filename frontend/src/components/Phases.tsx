import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { phaseInfo } from "@/Data/PhaseInfo"
import {  Droplet, Sun, Moon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { calculatePhases } from "@/main"

interface PhasesProps {
  lastStart: string;
  // lastEnd: string;
}


const Phases: React.FC<PhasesProps> = ({ lastStart }) => {
  //    const  upcomingPhases =  [
  //   { name: "Menstrual", startDate: "2024-06-29", endDate: "2024-07-04", daysUntil: 17 },
  //   { name: "Follicular", startDate: "2024-07-05", endDate: "2024-07-12", daysUntil: 23 },
  //   { name: "Ovulation", startDate: "2024-07-13", endDate: "2024-07-15", daysUntil: 31 },
  //   { name: "Luteal", startDate: "2024-07-16", endDate: "2024-07-28", daysUntil: 34 },
  // ]
//   const lastStart = "2025-06-02";
// const lastEnd = "2025-06-07";

const upcomingPhases = calculatePhases(lastStart);
console.log(upcomingPhases);

  return (
    
    <div className="space-y-6">
        <Card>
              <CardHeader>
                <CardTitle>Your Menstrual Cycle Phases</CardTitle>
                <CardDescription>Understanding the four phases of your menstrual cycle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-400 rounded-full" style={{ width: "25%" }}></div>
                      <div
                        className="h-full bg-purple-400 rounded-full absolute top-0 left-[25%]"
                        style={{ width: "25%" }}
                      ></div>
                      <div
                        className="h-full bg-yellow-400 rounded-full absolute top-0 left-[50%]"
                        style={{ width: "10%" }}
                      ></div>
                      <div
                        className="h-full bg-indigo-400 rounded-full absolute top-0 left-[60%]"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                    
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Menstrual Phase */}
                    <div className="border border-pink-200 rounded-lg p-4 bg-pink-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Droplet className="h-5 w-5 text-pink-600" />
                        <h3 className="font-medium text-pink-600">Menstrual Phase</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Days 1-5 (approx)</p>
                      <p className="text-sm">
                        Your period begins as the uterine lining sheds. Estrogen and progesterone levels are low.
                      </p>
                    </div>

                    {/* Follicular Phase */}
                    <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="h-5 w-5 text-purple-600" />
                        <h3 className="font-medium text-purple-600">Follicular Phase</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Days 6-13 (approx)</p>
                      <p className="text-sm">
                        Estrogen rises as follicles in your ovaries develop. Your body prepares for ovulation.
                      </p>
                    </div>

                    {/* Ovulation Phase */}
                    <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="h-5 w-5 text-yellow-600" />
                        <h3 className="font-medium text-yellow-600">Ovulation Phase</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Days 14-16 (approx)</p>
                      <p className="text-sm">
                        An egg is released from your ovary. This is when you're most fertile. Estrogen peaks then drops.
                      </p>
                    </div>

                    {/* Luteal Phase */}
                    <div className="border border-indigo-200 rounded-lg p-4 bg-indigo-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Moon className="h-5 w-5 text-indigo-600" />
                        <h3 className="font-medium text-indigo-600">Luteal Phase</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Days 17-28 (approx)</p>
                      <p className="text-sm">
                        Progesterone rises to prepare for possible pregnancy. If no pregnancy occurs, levels drop and
                        your period begins.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Phases */}

            <Card>
              <CardHeader>
                <CardTitle>Your Upcoming Phases</CardTitle>
                <CardDescription>Plan ahead with your predicted cycle phases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPhases.map((phase, index) => {
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
            </Card>

            
    </div>
  )
}

export default Phases