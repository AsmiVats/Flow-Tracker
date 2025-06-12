import { Calendar, Heart, Droplet, Sun, Moon, Info, AlertCircle, Coffee, Utensils, Dumbbell } from "lucide-react"

export const phaseInfo = {
  menstrual: {
    title: "Menstrual Phase",
    description: "Your period has started. This phase typically lasts 3-7 days.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    icon: Droplet,
    advice: [
      {
        category: "Nutrition",
        text: "Focus on iron-rich foods like leafy greens, beans, and lean red meat to replenish iron lost during menstruation.",
        icon: Utensils,
      },
      {
        category: "Exercise",
        text: "Gentle movement like walking, yoga, or swimming can help ease cramps and boost mood.",
        icon: Dumbbell,
      },
      {
        category: "Self-care",
        text: "Rest when needed. A heating pad on your abdomen can help with cramps. Stay hydrated.",
        icon: Heart,
      },
    ],
    normalSymptoms: ["Cramps", "Fatigue", "Lower back pain", "Headaches", "Mood changes"],
  },
  follicular: {
    title: "Follicular Phase",
    description: "Your body is preparing for ovulation. Estrogen levels are rising.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    icon: Sun,
    advice: [
      {
        category: "Nutrition",
        text: "Eat foods rich in B vitamins and fiber like whole grains, fruits, and vegetables to support rising estrogen levels.",
        icon: Utensils,
      },
      {
        category: "Exercise",
        text: "Your energy is increasing! This is a great time for strength training and higher intensity workouts.",
        icon: Dumbbell,
      },
      {
        category: "Self-care",
        text: "Channel your creative energy into projects. Your cognitive abilities are heightened during this phase.",
        icon: Heart,
      },
    ],
    normalSymptoms: [
      "Increased energy",
      "Improved mood",
      "Enhanced cognitive function",
      "Increased creativity",
      "Rising libido",
    ],
  },
  ovulation: {
    title: "Ovulation Phase",
    description: "An egg is released from your ovary. You're at peak fertility.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    icon: Sun,
    advice: [
      {
        category: "Nutrition",
        text: "Focus on anti-inflammatory foods like fatty fish, nuts, and berries to support hormone balance.",
        icon: Utensils,
      },
      {
        category: "Exercise",
        text: "Your energy is at its peak! High-intensity workouts, running, and dancing are great options.",
        icon: Dumbbell,
      },
      {
        category: "Self-care",
        text: "This is a good time for social activities and communication. You may feel more confident and outgoing.",
        icon: Heart,
      },
    ],
    normalSymptoms: [
      "Slight pain on one side of abdomen",
      "Increased libido",
      "Heightened senses",
      "Peak energy",
      "Increased cervical mucus",
    ],
  },
  luteal: {
    title: "Luteal Phase",
    description: "Your body is preparing for possible pregnancy or menstruation.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    icon: Moon,
    advice: [
      {
        category: "Nutrition",
        text: "Include magnesium-rich foods like dark chocolate, nuts, and seeds to help with PMS symptoms. Limit caffeine and salt.",
        icon: Utensils,
      },
      {
        category: "Exercise",
        text: "Focus on moderate exercise like pilates, light cardio, and stretching as your energy begins to decrease.",
        icon: Dumbbell,
      },
      {
        category: "Self-care",
        text: "Prioritize sleep and relaxation. Meditation and journaling can help manage mood changes.",
        icon: Heart,
      },
    ],
    normalSymptoms: ["Bloating", "Breast tenderness", "Mood swings", "Food cravings", "Fatigue", "Trouble sleeping"],
  },
}