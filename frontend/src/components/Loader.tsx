import { Flower } from "lucide-react"

export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <Flower className="w-12 h-12 text-pink-500 animate-spin" />
      <p className="mt-4 text-pink-600 text-sm">Loading...</p>
    </div>
  )
}
