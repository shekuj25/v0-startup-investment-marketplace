"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface StartupCardProps {
  id: string
  name: string
  logo: string
  description: string
  tags: string[]
  fundingGoal: string
  stage: string
}

export function StartupCard({ id, name, logo, description, tags, fundingGoal, stage }: StartupCardProps) {
  return (
    <Link href={`/startups/${id}`}>
      <Card className="group h-full flex flex-col border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
        <div className="p-6 flex flex-col h-full">
          {/* Logo */}
          <div className="mb-4">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-border/50 group-hover:border-accent/30 transition-colors">
              <Image
                src={logo || "/placeholder.svg"}
                alt={name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs bg-muted text-foreground/70 border border-border/50"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Funding Goal</p>
                <p className="font-semibold text-foreground">{fundingGoal}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Stage</p>
                <p className="font-semibold text-sm text-accent">{stage}</p>
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
