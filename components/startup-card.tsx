"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react"
import Image from "next/image"
import type { Startup } from "@/lib/startup-data"

export function StartupCard(startup: Startup) {
  const fundingPercentage = (Number.parseInt(startup.fundingRaised) / Number.parseInt(startup.fundingGoal)) * 100

  return (
    <Link href={`/startups/${startup.id}`}>
      <Card className="group h-full flex flex-col border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
        <div className="p-6 flex flex-col h-full">
          {/* Header with Logo and Verification Badge */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-border/50 group-hover:border-accent/30 transition-colors flex-shrink-0">
              <Image
                src={startup.logo || "/placeholder.svg"}
                alt={startup.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            {startup.verificationStatus === "verified" && (
              <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                <span className="text-xs font-medium text-green-700">Verified</span>
              </div>
            )}
            {startup.verificationStatus === "pending" && (
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <Clock className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                <span className="text-xs font-medium text-blue-700">Pending</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-1">
              {startup.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{startup.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {startup.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs bg-muted text-foreground/70 border border-border/50"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Funding Progress */}
            <div className="mb-4 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Funding Progress</span>
                <span className="font-semibold text-foreground">{fundingPercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-accent to-accent/70 h-full rounded-full transition-all"
                  style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                />
              </div>
            </div>

            {startup.investorCount !== undefined && startup.investorCount > 0 && (
              <div className="mb-4 flex items-center gap-2 text-xs">
                <Users className="w-3.5 h-3.5 text-accent" />
                <span className="text-muted-foreground">{startup.investorCount} investors interested</span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex justify-between items-start text-sm">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Funding Goal</p>
                <p className="font-semibold text-foreground">{startup.fundingGoal}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Stage</p>
                <p className="font-semibold text-sm text-accent">{startup.stage}</p>
              </div>
            </div>

            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group-hover:shadow-md transition-all"
              size="sm"
            >
              View Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  )
}
