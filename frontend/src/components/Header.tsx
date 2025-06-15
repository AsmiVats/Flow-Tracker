import { Button } from "@/components/ui/button"
import { Heart} from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              <Link to={"/"}>FlowTracker</Link> 
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-pink-600 transition-colors">
              Features
            </a>
            <a href="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
              About
            </a>
            <a href="#support" className="text-gray-600 hover:text-pink-600 transition-colors">
              Support
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to={"/signin"}>
            <Button variant="ghost" className="text-gray-600">
              Sign In
            </Button></Link>
            <Link to={"/signup"}>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              Get Started
            </Button></Link>
          </div>
        </div>
      </header>
  )
}
