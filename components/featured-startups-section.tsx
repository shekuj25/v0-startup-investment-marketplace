"use client"

import { StartupCard } from "@/components/startup-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { STARTUP_DATA } from "@/lib/startup-data"

export function FeaturedStartupsSection() {
  // Get only verified startups for featured section
  const verifiedStartups = STARTUP_DATA.filter((s) => s.verificationStatus === "verified").slice(0, 3)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Verified Startups</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore verified startups from across Africa actively raising capital
            </p>
          </div>
          <Button
            variant="outline"
            className="w-fit border-border hover:bg-card bg-card/40 gap-2 rounded-lg font-medium"
            asChild
          >
            <Link href="/startups">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedStartups.map((startup, index) => (
            <div key={startup.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <StartupCard {...startup} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
