import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { phaseInfo } from "@/Data/PhaseInfo"

import {  Heart,Moon, Coffee, Dumbbell } from "lucide-react"

type Phase = "menstrual" | "follicular" | "ovulation" | "luteal";

interface Props {
  currentPhase: string;
}

const validPhases: Phase[] = ["menstrual", "follicular", "ovulation", "luteal"];

function Advices({ currentPhase }: Props) {
  if (!validPhases.includes(currentPhase as Phase)) {
    return <p>Invalid phase</p>;
  }

  const safePhase = currentPhase as Phase;
  const currentPhaseInfo = phaseInfo[safePhase];
  const PhaseIcon = currentPhaseInfo.icon;

  return (
    <div className="space-y-6">
        <Card >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PhaseIcon className={`${currentPhaseInfo.color} h-5 w-5`} />
                  <span>{currentPhaseInfo.title} Health Tips</span>
                </CardTitle>
                <CardDescription>Personalized advice for your current phase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentPhaseInfo.advice.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className={`w-10 h-10 rounded-full ${currentPhaseInfo.bgColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className={`h-5 w-5 ${currentPhaseInfo.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.category}</h4>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

        {/* General */}
        <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-600" />
                  <span>General Wellness Tips</span>
                </CardTitle>
                <CardDescription>Healthy habits for every phase of your cycle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <Coffee className="h-4 w-4 text-pink-600" />
                      <span>Stay Hydrated</span>
                    </h4>
                    <p className="text-sm text-gray-600">
                      Drink at least 8 glasses of water daily. Proper hydration can help reduce bloating and cramps
                      during your period.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <Moon className="h-4 w-4 text-pink-600" />
                      <span>Prioritize Sleep</span>
                    </h4>
                    <p className="text-sm text-gray-600">
                      Aim for 7-9 hours of quality sleep each night. Good sleep helps regulate hormones and reduce PMS
                      symptoms.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <Dumbbell className="h-4 w-4 text-pink-600" />
                      <span>Regular Movement</span>
                    </h4>
                    <p className="text-sm text-gray-600">
                      Exercise regularly, but listen to your body. Adjust intensity based on your energy levels
                      throughout your cycle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
    </div>
  )
}

export default Advices