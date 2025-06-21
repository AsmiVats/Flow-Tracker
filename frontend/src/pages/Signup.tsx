
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarDays, Heart, User, Mail, Lock, CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "@/config"

interface SignupType{
  name:string,
  email:string,
  password:string,
}

interface SignupResponse {
  jwt: string;
}


export default function SignUp() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const [formData,setFormData] = useState<SignupType>({
    name:"",
    email:"",
    password:"",
  });

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }))
  };

  const handleSignupSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
      try{
        const res = await axios.post<SignupResponse>(`${BACKEND_URL}/api/v1/user/signup`,formData);
        const jwt = res.data;
        localStorage.setItem("token",jwt.jwt);
        alert("Signed up successfully");
      }catch(e){
        console.log(e);
        
      }
  };

  const handleCycleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    console.log({
      startDate,
      endDate
    })
    try{
      const res = await axios.post(`${BACKEND_URL}/api/v1/cycle`,{
        startDate,
        endDate
      },{
        headers:{
          Authorization:localStorage.getItem("token"),
        }
      });
      console.log(res.data);
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Join FlowTracker</h1>
          <p className="text-gray-600">Your personal menstrual health companion</p>
        </div>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-gray-800">Create Account</CardTitle>
            <CardDescription className="text-gray-600">
              Start tracking your cycle with personalized insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-pink-400" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    name="name"
                    onChange={handleInputChange}
                    className="pl-10 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-pink-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleInputChange}
                    className="pl-10 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-pink-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleInputChange}
                    placeholder="Create a secure password"
                    className="pl-10 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    required
                  />
                </div>
              </div>


              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Create My Account
              </Button>
            </form>


            <form onSubmit={handleCycleSubmit} className="space-y-4">
                  <div className="border-t border-pink-100 pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <CalendarDays className="w-5 h-5 text-pink-500 mr-2" />
                  Current Cycle Information
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Help us personalize your experience by sharing your current cycle dates
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Last Period Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border-pink-200 hover:border-pink-400"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-pink-400" />
                          {startDate ? format(startDate, "PPP") : "Select start date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                          className="border-pink-200"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Last Period End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border-pink-200 hover:border-pink-400"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-pink-400" />
                          {endDate ? format(endDate, "PPP") : "Select end date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                          className="border-pink-200"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <p className="text-xs text-gray-500 my-3">
                  {"You can always update this later in your profile."}
                </p>
                <Button type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                    Submit Details
                  </Button>
              </div>

            </form>

            <div className="text-center pt-4 border-t border-pink-100">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to={"/signin"}>
                <button className="text-pink-600 hover:text-pink-700 font-semibold hover:underline">
                  Sign in here
                </button>
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
