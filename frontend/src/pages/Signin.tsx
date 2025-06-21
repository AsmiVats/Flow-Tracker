
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Mail, Lock } from "lucide-react"
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "@/config"

interface SigninType{
  email:string,
  password:string
}
interface SigninResponse {
  jwt: string;
}

export default function Signin() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState<SigninType>({
    email: "",
    password: "",
  })

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

   const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign in submitted:", formData)
    try{
        const response = await axios.post<SigninResponse>(`${BACKEND_URL}/api/v1/user/signin`,formData);
        const jwt = response.data;
        localStorage.setItem("token",jwt.jwt);
        navigate("/dashboard");

    }catch(e){
      console.log(e);
    }
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue your health journey</p>
        </div>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-gray-800">Sign In</CardTitle>
            <CardDescription className="text-gray-600">Access your FlowTracker account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-pink-400" />
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                     onChange={handleInputChange}
                    className="pl-10 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    Password
                  </Label>

                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-pink-400" />
                  <Input
                    id="password"
                    type="password"
                     onChange={handleInputChange}
                     name="password"
                    placeholder="Enter your password"
                    className="pl-10 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Sign In
              </Button>
            </form>


            <div className="text-center pt-4 border-t border-pink-100">
              <p className="text-sm text-gray-600">
                {"Don't have an account?"}{" "}
                <Link to={"/signup"}>
                <button className="text-pink-600 hover:text-pink-700 font-semibold hover:underline">
                  Sign up here
                </button></Link>
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
