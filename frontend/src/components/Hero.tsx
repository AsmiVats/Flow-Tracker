import { Badge } from "@/components/ui/badge"
import {  ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"


function Hero() {
    const navigate = useNavigate();
  return (
    <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-100">Trusted by women worldwide</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Your Personal Period & Health Companion
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track your cycle, understand your body, and take control of your reproductive health with our intelligent,
            privacy-first menstruation tracker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
            onClick={()=>{navigate("/signup")}}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8"
            >
              Start Tracking Free
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
              Learn More
            </Button>
          </div>
        </div>
      </section>
  )
}

export default Hero