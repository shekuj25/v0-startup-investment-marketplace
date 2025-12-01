"use client"

import { useAuth } from "@/lib/auth-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, CheckCircle2, BarChart3, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getStartupData } from "@/lib/startup-data"
import type { Startup } from "@/lib/startup-data"

export default function DashboardPage() {
  const { user } = useAuth()
  const [userStartups, setUserStartups] = useState<Startup[]>([])
  const [filter, setFilter] = useState<"all" | "pending" | "verified">("all")

  useEffect(() => {
    if (user) {
      const allStartups = getStartupData()
      const myStartups = allStartups.filter((s) => s.email === user.email)
      setUserStartups(myStartups)
    }
  }, [user])

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-foreground">Access Your Dashboard</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Log in or register your startup to view your verification status and manage inquiries from investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 rounded-lg font-semibold"
                asChild
              >
                <Link href="/startups/register">Register Your Startup</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card gap-2 rounded-lg font-semibold bg-card/40"
                asChild
              >
                <Link href="/startups">Browse Startups</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const filteredStartups = userStartups.filter((s) => {
    if (filter === "all") return true
    return s.verificationStatus === filter
  })

  const stats = {
    total: userStartups.length,
    verified: userStartups.filter((s) => s.verificationStatus === "verified").length,
    pending: userStartups.filter((s) => s.verificationStatus === "pending").length,
    investors: userStartups.reduce((acc, s) => acc + (s.investorCount || 0), 0),
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.companyName}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border border-border bg-card p-6 space-y-3 hover:border-accent/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Total Startups</span>
              <BarChart3 className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.total}</p>
          </Card>

          <Card className="border border-border bg-card p-6 space-y-3 hover:border-accent/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Verified</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.verified}</p>
          </Card>

          <Card className="border border-border bg-card p-6 space-y-3 hover:border-accent/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Under Review</span>
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.pending}</p>
          </Card>

          <Card className="border border-border bg-card p-6 space-y-3 hover:border-accent/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Investor Inquiries</span>
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.investors}</p>
          </Card>
        </div>

        {/* Startups Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Your Startups</h2>
            <p className="text-muted-foreground">Manage and track your registered startups</p>
          </div>

          <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
              <TabsTrigger value="verified">Verified ({stats.verified})</TabsTrigger>
              <TabsTrigger value="pending">Under Review ({stats.pending})</TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredStartups.length === 0 ? (
            <Card className="border border-border bg-card/30 p-12 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">No startups yet</h3>
                <p className="text-muted-foreground mt-2">Register your first startup to get started</p>
              </div>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 rounded-lg font-semibold"
                asChild
              >
                <Link href="/startups/register">
                  Register Startup
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredStartups.map((startup, idx) => (
                <div key={startup.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 50}ms` }}>
                  <Card className="border border-border bg-card p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-foreground">{startup.name}</h3>
                          <Badge
                            variant={
                              startup.verificationStatus === "verified"
                                ? "default"
                                : startup.verificationStatus === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className={
                              startup.verificationStatus === "verified"
                                ? "bg-green-500/10 text-green-700 border-green-500/30"
                                : startup.verificationStatus === "pending"
                                  ? "bg-amber-500/10 text-amber-700 border-amber-500/30"
                                  : "bg-red-500/10 text-red-700 border-red-500/30"
                            }
                          >
                            {startup.verificationStatus === "verified"
                              ? "Verified"
                              : startup.verificationStatus === "pending"
                                ? `Pending (${startup.daysRemaining} days)`
                                : "Rejected"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{startup.description}</p>
                        <div className="flex flex-wrap gap-4 pt-2">
                          <div>
                            <span className="text-xs text-muted-foreground">Funding Goal</span>
                            <p className="font-semibold text-foreground">{startup.fundingGoal}</p>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">Raised</span>
                            <p className="font-semibold text-accent">{startup.fundingRaised}</p>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">Investor Inquiries</span>
                            <p className="font-semibold text-foreground">{startup.investorCount || 0}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="border-border hover:bg-card rounded-lg bg-transparent"
                          asChild
                        >
                          <Link href={`/startups/${startup.id}`}>View</Link>
                        </Button>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg">Edit</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
