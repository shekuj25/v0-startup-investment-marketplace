"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 p-12 md:p-16 text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Ready to take the next step?</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Explore opportunities today</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover innovative startups or connect your company with thousands of investors on the Venture platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
              <Link href="/startups">
                Browse Startups
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent" asChild>
              <Link href="/startups/register">List Your Company</Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
