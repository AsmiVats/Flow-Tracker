
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Heart, User, Mail, CalendarDays, Edit3, Save, X, CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useParams } from 'react-router-dom';


interface UserProfile {
  name: string
  email: string
  startDate: Date | undefined
  endDate: Date | undefined
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)


const { id } = useParams<{ id: string }>();
console.log(id);

  const [profile, setProfile] = useState<UserProfile>({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    startDate: new Date(2024, 11, 1),
    endDate: new Date(2024, 11, 5), 
  })

  const [editForm, setEditForm] = useState<UserProfile>(profile)

  const handleEdit = () => {
    setEditForm(profile)
    setIsEditing(true)
  }

  const handleSave = () => {
    setProfile(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditForm(profile)
    setIsEditing(false)
  }

  const handleInputChange = (field: keyof UserProfile, value: string | Date | undefined) => {
    setEditForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your personal information and cycle data</p>
        </div>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-2xl text-gray-800">Personal Information</CardTitle>
            {!isEditing ? (
              <Button
                onClick={handleEdit}
                variant="outline"
                size="sm"
                className="border-blue-200 hover:border-blue-400 hover:bg-blue-50"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  onClick={handleSave}
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleCancel} variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {!isEditing ? (
              // View Mode
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <Label className="text-sm font-medium text-gray-700">Full Name</Label>
                    <p className="text-lg text-gray-900">{profile.name}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <Label className="text-sm font-medium text-gray-700">Email Address</Label>
                    <p className="text-lg text-gray-900">{profile.email}</p>
                  </div>
                </div>

                <div className="border-t border-blue-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <CalendarDays className="w-5 h-5 text-blue-500 mr-2" />
                    Current Cycle Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <Label className="text-sm font-medium text-gray-700">Last Period Start</Label>
                      <p className="text-lg text-gray-900 mt-1">
                        {profile.startDate ? format(profile.startDate, "MMMM d, yyyy") : "Not set"}
                      </p>
                    </div>

                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <Label className="text-sm font-medium text-gray-700">Last Period End</Label>
                      <p className="text-lg text-gray-900 mt-1">
                        {profile.endDate ? format(profile.endDate, "MMMM d, yyyy") : "Not set"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Edit Mode
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-blue-400" />
                    <Input
                      id="name"
                      value={editForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-blue-400" />
                    <Input
                      id="email"
                      type="email"
                      value={editForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="border-t border-blue-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <CalendarDays className="w-5 h-5 text-blue-500 mr-2" />
                    Update Cycle Information
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Last Period Start Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-blue-200 hover:border-blue-400"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-blue-400" />
                            {editForm.startDate ? format(editForm.startDate, "PPP") : "Select start date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={editForm.startDate}
                            onSelect={(date) => handleInputChange("startDate", date)}
                            initialFocus
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
                            className="w-full justify-start text-left font-normal border-blue-200 hover:border-blue-400"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-blue-400" />
                            {editForm.endDate ? format(editForm.endDate, "PPP") : "Select end date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={editForm.endDate}
                            onSelect={(date) => handleInputChange("endDate", date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
