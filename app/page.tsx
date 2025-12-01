import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { ArrowRight, TrendingUp, Users, Zap, Shield, Rocket, BarChart3, Clock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden pt-20 md:pt-32 pb-20 md:pb-32">
          {/* Gradient background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 flex items-center gap-2 justify-center">
                  <Rocket className="w-4 h-4" />
                  Discover Tomorrow's Unicorns
                </span>
              </div>

              <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Invest in the{" "}
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                  future of innovation
                </span>
              </h1>

              <p className="text-balance text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Connect with exceptional startups building the next generation of solutions. Curated opportunities,
                transparent metrics, and seamless deal flow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                  <Link href="/startups">
                    Browse Startups
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted gap-2 bg-transparent"
                  asChild
                >
                  <Link href="/startups/register">
                    List Your Startup
                    <Rocket className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div className="flex justify-center gap-8 md:gap-12 pt-12 text-sm">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-accent">450+</p>
                  <p className="text-muted-foreground">Active Startups</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-accent">$2.5B+</p>
                  <p className="text-muted-foreground">Capital Deployed</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-accent">8,000+</p>
                  <p className="text-muted-foreground">Investors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-20 bg-card/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Venture?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A complete platform designed for founders and investors to succeed together.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-border bg-background p-8 space-y-4 hover:border-accent/50 transition-colors hover:shadow-lg hover:shadow-accent/10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Smart Discovery</h3>
                <p className="text-muted-foreground">
                  Find startups matching your investment criteria with advanced filters, real-time metrics, and verified
                  data.
                </p>
              </Card>

              <Card className="border border-border bg-background p-8 space-y-4 hover:border-accent/50 transition-colors hover:shadow-lg hover:shadow-accent/10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Verified Teams</h3>
                <p className="text-muted-foreground">
                  Meet experienced founders and teams with proven track records driving innovation across industries.
                </p>
              </Card>

              <Card className="border border-border bg-background p-8 space-y-4 hover:border-accent/50 transition-colors hover:shadow-lg hover:shadow-accent/10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Seamless Process</h3>
                <p className="text-muted-foreground">
                  From discovery to investment management, streamline your entire deal flow on one unified platform.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">For Founders</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get your startup in front of thousands of investors in just a few minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h3 className="font-bold text-foreground">Register</h3>
                  <p className="text-sm text-muted-foreground">Fill out your startup details and upload documents</p>
                </div>
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent" />
              </div>

              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/50 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h3 className="font-bold text-foreground">Verification</h3>
                  <p className="text-sm text-muted-foreground">We verify your startup within 48-72 hours</p>
                </div>
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent" />
              </div>

              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/30 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h3 className="font-bold text-foreground">Launch</h3>
                  <p className="text-sm text-muted-foreground">Go live and connect with interested investors</p>
                </div>
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent" />
              </div>

              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <h3 className="font-bold text-foreground">Grow</h3>
                  <p className="text-sm text-muted-foreground">Receive investor inquiries and manage pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Investors Section */}
        <section className="py-20 bg-card/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">For Investors</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access a curated pipeline of investment opportunities with transparent metrics and verified founders.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-border bg-background p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Deep dive into startup metrics, market analysis, and financial projections for every opportunity.
                </p>
              </Card>

              <Card className="border border-border bg-background p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Due Diligence</h3>
                <p className="text-muted-foreground">
                  Every startup on our platform goes through rigorous verification and background checks.
                </p>
              </Card>

              <Card className="border border-border bg-background p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Save Time</h3>
                <p className="text-muted-foreground">
                  Skip the noise and focus on quality deals. Our curated selection saves you weeks of sourcing.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How long does startup verification take?",
                  a: "We typically verify new startups within 48-72 hours. You'll receive updates throughout the process.",
                },
                {
                  q: "What documents do I need to register?",
                  a: "You'll need company registration documents, founder identification, and basic company information. Full details are provided in the registration form.",
                },
                {
                  q: "Is there a fee to list my startup?",
                  a: "Listing your startup is completely free. We only take a small commission if you successfully raise capital through the platform.",
                },
                {
                  q: "How do I connect with investors?",
                  a: "Once verified, your startup will be visible to all investors on the platform. Interested investors can contact you directly, or you can reach out to them.",
                },
              ].map((faq, idx) => (
                <Card key={idx} className="border border-border bg-card p-6 hover:border-accent/50 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
