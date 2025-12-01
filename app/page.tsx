import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                Discover Exceptional Startups
              </span>
            </div>

            <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Invest in the{" "}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                future
              </span>
            </h1>

            <p className="text-balance text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with the most promising startups building tomorrow. Curated deals, transparent metrics, and
              seamless investment management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link href="/startups" className="gap-2">
                  Browse Startups
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/startups/register">List Your Startup</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Smart Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Find startups matching your investment criteria with advanced filters and real-time metrics.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Expert Teams</h3>
                <p className="text-sm text-muted-foreground">
                  See the brilliant founders and teams driving innovation across industries.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Seamless Process</h3>
                <p className="text-sm text-muted-foreground">
                  From discovery to investment, manage everything on our streamlined platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to explore?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start browsing the most innovative startups or list your startup to reach thousands of investors.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link href="/startups">Explore Startups</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
