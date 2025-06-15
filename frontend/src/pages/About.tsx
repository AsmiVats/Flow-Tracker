"use client"

import Features from "@/components/Features"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Calendar, BarChart3, Shield, Users, Sparkles } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-emerald-50">
      {/* Header */}
      <div className="text-center pt-16 pb-12 px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6">
          <Heart className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About FlowTracker</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering women with personalized menstrual health insights and cycle tracking
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* mission section */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              FlowTracker was created to help women better understand their bodies and take control of their menstrual
              health. We believe that every woman deserves access to accurate, personalized insights about her cycle,
              symptoms, and overall well-being.
            </p>
          </CardContent>
        </Card>

        {/* features grid */}
       <Features/>

        {/* what we stand for */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-pink-100 mb-6">What We Stand For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-pink-500 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Inclusivity</h3>
                  <p className="text-pink-200 text-sm">
                    We welcome all women and people who go through this, regardless of age, background, or experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-emerald-300 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Empowerment</h3>
                  <p className="text-pink-200 text-sm">
                    Knowledge is power. We provide the tools and insights you need to make informed health decisions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

       


      </div>
    </div>
  )
}
