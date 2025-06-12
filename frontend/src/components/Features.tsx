import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Heart, TrendingUp, Bell, Shield, Users} from "lucide-react"

function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Everything You Need to Track Your Health
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tracking tools designed by women, for women, with your privacy and health as our top
            priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-pink-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle className="text-gray-800">Smart Cycle Tracking</CardTitle>
              <CardDescription>
                AI-powered predictions that learn from your unique patterns to forecast your next period with 95%
                accuracy.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-gray-800">Symptom Monitoring</CardTitle>
              <CardDescription>
                Track mood, pain levels, flow intensity, and other symptoms to understand your body better.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="border-indigo-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle className="text-gray-800">Health Insights</CardTitle>
              <CardDescription>
                Get personalized insights and trends about your cycle, fertility windows, and overall reproductive
                health.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="border-pink-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle className="text-gray-800">Smart Reminders</CardTitle>
              <CardDescription>
                Never be caught off guard with customizable notifications for your period, ovulation, and medication.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-gray-800">Privacy First</CardTitle>
              <CardDescription>
                Your data is encrypted and stored securely. We never share your personal health information.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="border-indigo-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle className="text-gray-800">Community Support</CardTitle>
              <CardDescription>
                Connect with other women, share experiences, and get support from our caring community.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </section>
  )
}

export default Features