"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamMemberCard } from "@/components/team-member-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MessageCircle, Info, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Dummy startup detail data
const STARTUP_DETAILS: Record<string, any> = {
  "1": {
    name: "FinFlow",
    logo: "/fintech-logo.jpg",
    description:
      "AI-powered financial planning platform designed specifically for small business owners. Automated insights, cash flow forecasting, and real-time financial recommendations.",
    foundedYear: 2023,
    location: "San Francisco, CA",
    website: "finflow.io",
    stage: "Seed",
    fundingGoal: "$250,000",
    fundingRaised: "$150,000",
    problemStatement:
      "Small business owners struggle with financial management. They lack real-time insights, accurate forecasting, and personalized guidance, leading to poor cash flow decisions.",
    solution:
      "FinFlow provides an intelligent dashboard combining AI-powered analytics, predictive modeling, and automated recommendations tailored to each business unique financials.",
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
    tags: ["FinTech", "AI", "B2B SaaS"],
    email: "contact@finflow.io",
    phone: "+1 (555) 123-4567",
  },
}

export default function StartupDetailsPage({ params }: { params: { id: string } }) {
  const [showChatInfo, setShowChatInfo] = useState(false)
  const startup = STARTUP_DETAILS[params.id] || STARTUP_DETAILS["1"]

  const fundingPercentage = (Number.parseInt(startup.fundingRaised) / Number.parseInt(startup.fundingGoal)) * 100

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            {/* Header with Logo and Basic Info */}
            <Card className="border border-border bg-card p-8">
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-lg bg-muted border border-border flex items-center justify-center overflow-hidden">
                    <Image
                      src={startup.logo || "/placeholder.svg"}
                      alt={startup.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-foreground mb-2">{startup.name}</h1>
                  <p className="text-muted-foreground mb-4">{startup.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {startup.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border border-accent/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-right space-y-2">
                  <p className="text-xs text-muted-foreground">Funding Stage</p>
                  <p className="font-bold text-lg text-accent">{startup.stage}</p>
                  <p className="text-xs text-muted-foreground">Est. {startup.foundedYear}</p>
                </div>
              </div>
            </Card>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{startup.description}</p>
            </div>

            <Separator className="bg-border" />

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">{startup.problemStatement}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">{startup.solution}</p>
              </div>
            </div>

            <Separator className="bg-border" />

            {/* Team Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Leadership Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {startup.team.map((member: any) => (
                  <TeamMemberCard key={member.name} {...member} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Funding Progress */}
            <Card className="border border-border bg-card p-6 sticky top-24">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Funding Progress
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Raised</span>
                    <span className="font-semibold text-foreground">{startup.fundingRaised}</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-accent to-accent/80 h-full rounded-full transition-all"
                      style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0</span>
                    <span>{startup.fundingGoal} (Goal)</span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 text-sm">
                  <p className="text-foreground font-medium mb-1">{fundingPercentage.toFixed(0)}% funded</p>
                  <p className="text-xs text-muted-foreground">
                    {startup.fundingRaised} of {startup.fundingGoal} raised
                  </p>
                </div>
              </div>

              <Separator className="bg-border my-4" />

              {/* Contact Options */}
              <h3 className="font-bold text-foreground mb-4">Contact Options</h3>
              <div className="space-y-3">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2"
                  asChild
                >
                  <Link href={`mailto:${startup.email}`}>
                    <Mail className="w-4 h-4" />
                    Email
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 border-border hover:bg-muted bg-transparent"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 border-border hover:bg-muted opacity-60 cursor-not-allowed bg-transparent"
                  disabled
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat (Coming Soon)
                </Button>

                <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                  <Info className="w-4 h-4" />
                  Request More Info
                </Button>
              </div>

              <Separator className="bg-border my-4" />

              {/* Website Link */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Website</p>
                <Link
                  href={`https://${startup.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 text-sm font-medium break-all transition-colors"
                >
                  {startup.website}
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
