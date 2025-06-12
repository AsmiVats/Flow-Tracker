import { Heart} from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  FlowTracker
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Empowering women with knowledge about their bodies and reproductive health.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 FlowTracker. All rights reserved. Made with ❤️ for women's health.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer