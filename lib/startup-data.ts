"use client"

export interface Startup {
  id: string
  name: string
  logo: string
  description: string
  tags: string[]
  fundingGoal: string
  fundingRaised: string
  stage: string
  verificationStatus: "verified" | "pending" | "rejected"
  submittedAt: Date
  verifiedAt?: Date
  daysRemaining?: number
  location: string
  website: string
  email: string
  phone: string
  foundedYear: number
  problemStatement: string
  solution: string
  team: Array<{
    name: string
    role: string
    image: string
    linkedIn: string
  }>
}

// Base startup data
const baseStartups: Startup[] = [
  {
    id: "1",
    name: "FinFlow",
    logo: "/fintech-logo.jpg",
    description: "AI-powered financial planning for small business owners. Automated insights and forecasting.",
    tags: ["FinTech", "AI"],
    fundingGoal: "$250,000",
    fundingRaised: "$150,000",
    stage: "Seed",
    verificationStatus: "verified",
    submittedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    verifiedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    location: "San Francisco, CA",
    website: "finflow.io",
    email: "contact@finflow.io",
    phone: "+1 (555) 123-4567",
    foundedYear: 2023,
    problemStatement:
      "Small business owners struggle with financial management. They lack real-time insights, accurate forecasting, and personalized guidance.",
    solution:
      "FinFlow provides an intelligent dashboard combining AI-powered analytics, predictive modeling, and automated recommendations.",
    team: [
      {
        name: "Sarah Chen",
        role: "Founder & CEO",
        image: "/person-silhouette-city.png",
        linkedIn: "https://linkedin.com",
      },
      {
        name: "James Rodriguez",
        role: "CTO",
        image: "/diverse-group-conversation.png",
        linkedIn: "https://linkedin.com",
      },
      {
        name: "Maya Patel",
        role: "Head of Product",
        image: "/diverse-group-outdoors.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
  {
    id: "2",
    name: "AgriMind",
    logo: "/agriculture-logo.jpg",
    description: "Precision agriculture using satellite data and machine learning for crop optimization.",
    tags: ["AgriTech", "ML"],
    fundingGoal: "$500,000",
    fundingRaised: "$200,000",
    stage: "Series A",
    verificationStatus: "verified",
    submittedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    verifiedAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000),
    location: "Lagos, Nigeria",
    website: "agrimind.io",
    email: "hello@agrimind.io",
    phone: "+234 800 123 4567",
    foundedYear: 2022,
    problemStatement: "African farmers lack access to real-time crop intelligence and weather predictions.",
    solution: "AgriMind combines satellite imaging with AI to deliver actionable crop insights at the farm level.",
    team: [
      {
        name: "Kofi Mensah",
        role: "Co-Founder & CEO",
        image: "/person-silhouette-city.png",
        linkedIn: "https://linkedin.com",
      },
      {
        name: "Amara Okafor",
        role: "Chief Scientist",
        image: "/diverse-group-outdoors.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
  {
    id: "3",
    name: "HealthSync",
    logo: "/healthtech-logo.jpg",
    description: "Real-time health monitoring platform connecting patients with healthcare providers.",
    tags: ["HealthTech", "IoT"],
    fundingGoal: "$1,000,000",
    fundingRaised: "$350,000",
    stage: "Series A",
    verificationStatus: "verified",
    submittedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
    verifiedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000),
    location: "Nairobi, Kenya",
    website: "healthsync.io",
    email: "team@healthsync.io",
    phone: "+254 712 123 456",
    foundedYear: 2022,
    problemStatement:
      "Healthcare access in rural Africa is fragmented. Patients lack continuity of care and providers lack patient data.",
    solution:
      "HealthSync provides a cloud-based platform that connects rural clinics with specialists and maintains complete patient records.",
    team: [
      {
        name: "Dr. Ngozi Eziobi",
        role: "Founder & CEO",
        image: "/diverse-group-conversation.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
  {
    id: "4",
    name: "CleanEnergy Co",
    logo: "/cleantech-logo.jpg",
    description: "Sustainable energy solutions for commercial buildings using renewable technologies.",
    tags: ["GreenTech", "Energy"],
    fundingGoal: "$750,000",
    fundingRaised: "$450,000",
    stage: "Seed",
    verificationStatus: "pending",
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    daysRemaining: 2,
    location: "Accra, Ghana",
    website: "cleanenergy.co",
    email: "info@cleanenergy.co",
    phone: "+233 501 123 456",
    foundedYear: 2024,
    problemStatement: "Commercial buildings consume massive amounts of energy at high costs and environmental impact.",
    solution: "We install and manage solar + battery systems that reduce energy costs by 60% and provide peak shaving.",
    team: [
      {
        name: "Ama Asante",
        role: "Founder & CEO",
        image: "/diverse-group-outdoors.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
  {
    id: "5",
    name: "EduSmart",
    logo: "/edtech-logo.jpg",
    description: "Personalized learning platform powered by AI tutoring and adaptive curriculum.",
    tags: ["EdTech", "AI"],
    fundingGoal: "$300,000",
    fundingRaised: "$85,000",
    stage: "Pre-Seed",
    verificationStatus: "pending",
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    daysRemaining: 3,
    location: "Kigali, Rwanda",
    website: "edusmart.co",
    email: "hello@edusmart.co",
    phone: "+250 787 123 456",
    foundedYear: 2024,
    problemStatement:
      "African students lack access to quality personalized education. Class sizes are too large for individual attention.",
    solution:
      "EduSmart provides AI-powered personalized tutoring that adapts to each student's learning pace and style.",
    team: [
      {
        name: "Jean-Baptiste Nzamwita",
        role: "Founder & CEO",
        image: "/person-silhouette-city.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
  {
    id: "6",
    name: "LogisticAI",
    logo: "/logistics-logo.jpg",
    description: "Supply chain optimization using predictive analytics and route optimization.",
    tags: ["Logistics", "AI"],
    fundingGoal: "$1,200,000",
    fundingRaised: "$800,000",
    stage: "Series A",
    verificationStatus: "verified",
    submittedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
    verifiedAt: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000),
    location: "Dar es Salaam, Tanzania",
    website: "logisticai.io",
    email: "connect@logisticai.io",
    phone: "+255 654 123 456",
    foundedYear: 2021,
    problemStatement: "Logistics companies in Africa waste 30% on inefficient routes and poor demand forecasting.",
    solution:
      "LogisticAI's platform uses machine learning to optimize routes in real-time and predict demand 2 weeks ahead.",
    team: [
      {
        name: "Hassan Mbote",
        role: "CEO & Co-Founder",
        image: "/diverse-group-conversation.png",
        linkedIn: "https://linkedin.com",
      },
      {
        name: "Fatima Al-Mansouri",
        role: "CTO",
        image: "/diverse-group-outdoors.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
  {
    id: "7",
    name: "SpaceFlow",
    logo: "/spacetech-logo.jpg",
    description: "Satellite IoT platform for real-time global connectivity and data collection.",
    tags: ["SpaceTech", "IoT"],
    fundingGoal: "$2,000,000",
    fundingRaised: "$1,200,000",
    stage: "Series B",
    verificationStatus: "verified",
    submittedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    verifiedAt: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    location: "Cape Town, South Africa",
    website: "spaceflow.io",
    email: "investors@spaceflow.io",
    phone: "+27 21 555 1234",
    foundedYear: 2020,
    problemStatement:
      "Remote areas lack reliable communication infrastructure, limiting economic opportunity and emergency response.",
    solution: "SpaceFlow provides satellite connectivity with IoT sensors for real-time data from anywhere on Earth.",
    team: [
      {
        name: "Dr. Johan van der Merwe",
        role: "Founder & CEO",
        image: "/person-silhouette-city.png",
        linkedIn: "https://linkedin.com",
      },
      {
        name: "Thandiwe Dlamini",
        role: "Chief Engineer",
        image: "/diverse-group-conversation.png",
        linkedIn: "https://linkedin.com",
      },
      {
        name: "Zainab Moussa",
        role: "VP Operations",
        image: "/diverse-group-outdoors.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
  {
    id: "8",
    name: "RetailNow",
    logo: "/retail-logo.jpg",
    description: "Omnichannel retail platform unifying online and physical store experiences.",
    tags: ["RetailTech", "E-commerce"],
    fundingGoal: "$600,000",
    fundingRaised: "$200,000",
    stage: "Seed",
    verificationStatus: "pending",
    submittedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    daysRemaining: 2,
    location: "Freetown, Sierra Leone",
    website: "retailnow.sl",
    email: "hello@retailnow.sl",
    phone: "+232 76 123 456",
    foundedYear: 2024,
    problemStatement:
      "Small retailers in West Africa can't compete with large chains. They lack digital presence and inventory management.",
    solution:
      "RetailNow provides affordable POS + e-commerce platform with inventory sync across online and physical stores.",
    team: [
      {
        name: "Binta Kamara",
        role: "Founder & CEO",
        image: "/diverse-group-outdoors.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
  {
    id: "9",
    name: "CyberGuard",
    logo: "/cybersecurity-logo.jpg",
    description: "Enterprise cybersecurity platform with AI-driven threat detection and response.",
    tags: ["CyberSecurity", "AI"],
    fundingGoal: "$1,500,000",
    fundingRaised: "$900,000",
    stage: "Series A",
    verificationStatus: "verified",
    submittedAt: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000),
    verifiedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
    location: "Johannesburg, South Africa",
    website: "cyberguard.ai",
    email: "enterprise@cyberguard.ai",
    phone: "+27 11 555 9999",
    foundedYear: 2021,
    problemStatement:
      "African enterprises face sophisticated cyber threats but lack access to enterprise-grade security solutions.",
    solution:
      "CyberGuard's AI platform detects threats in real-time with 99.8% accuracy and enables instant automated response.",
    team: [
      {
        name: "Sipho Mthembu",
        role: "Founder & CEO",
        image: "/person-silhouette-city.png",
        linkedIn: "https://linkedin.com",
      },
      {
        name: "Dr. Lerato Sekhosana",
        role: "VP Security Research",
        image: "/diverse-group-conversation.png",
        linkedIn: "https://linkedin.com",
      },
    ],
  },
]

export function getStartupData(): Startup[] {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("marketplace_startups")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        return [...baseStartups, ...parsed]
      } catch {
        return baseStartups
      }
    }
  }
  return baseStartups
}

export function addRegisteredStartup(formData: any, team: any[]): Startup {
  const newStartup: Startup = {
    id: `user-${Date.now()}`,
    name: formData.companyName,
    logo: "/startup-logo.jpg",
    description: formData.solution.substring(0, 100) + "...",
    tags: [formData.industry],
    fundingGoal: formData.fundingGoal,
    fundingRaised: "$0",
    stage: "Pre-Seed",
    verificationStatus: "pending",
    submittedAt: new Date(),
    daysRemaining: 3,
    location: "Sierra Leone",
    website: formData.website || "Coming soon",
    email: formData.email,
    phone: formData.phone,
    foundedYear: new Date().getFullYear(),
    problemStatement: formData.problem,
    solution: formData.solution,
    team: team.map((member: any) => ({
      name: member.name,
      role: member.role,
      image: "/team-member.jpg",
      linkedIn: "https://linkedin.com",
    })),
  }

  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("marketplace_startups") || "[]"
    const existing = JSON.parse(stored)
    existing.push(newStartup)
    localStorage.setItem("marketplace_startups", JSON.stringify(existing))
  }

  return newStartup
}

export const STARTUP_DATA = baseStartups
