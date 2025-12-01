"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Users, TrendingUp, Zap, Globe, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Premium Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-24 md:pb-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-60" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-10 text-center">
              {/* Announcement Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-foreground/80">
                  Join 450+ verified startups raising capital
                </span>
              </div>

              {/* Hero Headline */}
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight">
                  Connect{" "}
                  <span className="bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent">
                    Capital
                  </span>{" "}
                  with Innovation
                </h1>
                <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Access verified Sierra Leone startups and diaspora investors on a platform built for growth. 48-72
                  hour verification. Zero compromises on trust.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 rounded-lg font-semibold"
                  asChild
                >
                  <Link href="/startups">
                    Explore Startups
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-border hover:bg-card gap-2 rounded-lg font-semibold bg-card/40"
                  asChild
                >
                  <Link href="/startups/register">Register Your Startup</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                  <p className="text-3xl md:text-4xl font-bold text-accent">450+</p>
                  <p className="text-sm text-muted-foreground mt-2">Verified Startups</p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  <p className="text-3xl md:text-4xl font-bold text-accent">$2.5B+</p>
                  <p className="text-sm text-muted-foreground mt-2">Capital Deployed</p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                  <p className="text-3xl md:text-4xl font-bold text-accent">8,000+</p>
                  <p className="text-sm text-muted-foreground mt-2">Active Investors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Timeline Style */}
        <section className="py-24 md:py-32 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Simple, Transparent Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From submission to investment in four straightforward steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Submit",
                  desc: "Complete startup profile with documentation",
                  icon: Lightbulb,
                },
                {
                  step: 2,
                  title: "Verify",
                  desc: "We verify within 48-72 hours",
                  icon: CheckCircle2,
                },
                {
                  step: 3,
                  title: "Go Live",
                  desc: "Listed to thousands of investors",
                  icon: Globe,
                },
                {
                  step: 4,
                  title: "Connect",
                  desc: "Manage inquiries and close deals",
                  icon: TrendingUp,
                },
              ].map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/10">
                          <IconComponent className="w-7 h-7 text-accent" />
                        </div>
                        {idx < 3 && (
                          <div className="hidden md:block absolute -right-3 top-6 w-6 h-[2px] bg-gradient-to-r from-accent to-transparent" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Sierra Leone - Premium Cards */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Sierra Leone Startups</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Exceptional opportunities in an emerging innovation hub
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Explosive Growth Potential",
                  desc: "Early-stage markets with proven founders solving real problems at scale.",
                  color: "from-blue-500/20 to-blue-500/5",
                },
                {
                  icon: Users,
                  title: "Powerful Diaspora Networks",
                  desc: "Leverage global connections for partnerships, mentorship, and capital.",
                  color: "from-purple-500/20 to-purple-500/5",
                },
                {
                  icon: Zap,
                  title: "Exceptional Talent & Speed",
                  desc: "Driven founders building with lean teams and incredible execution.",
                  color: "from-accent/20 to-accent/5",
                },
              ].map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <Card
                    key={idx}
                    className="relative border border-border bg-gradient-to-br from-card to-card/50 p-8 space-y-5 group hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center border border-accent/10 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground mt-3">{item.desc}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Verification & Trust - Feature Highlight */}
        <section className="py-24 md:py-32 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Institutional-Grade Verification
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Every startup undergoes rigorous verification to ensure quality and build lasting trust with our
                    investor community.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Document Verification", desc: "Registration, founder identity, legal compliance" },
                    { label: "48-72 Hour Guarantee", desc: "Quick turnaround without compromising diligence" },
                    { label: "Ongoing Compliance", desc: "Regular monitoring ensures continued credibility" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 animate-fade-in-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.label}</h4>
                        <p className="text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/10" />
                <div className="absolute inset-4 bg-card rounded-xl border border-border shadow-lg">
                  <div className="p-8 space-y-6 h-full flex flex-col justify-center">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">VERIFICATION STATUS</div>
                      <div className="text-2xl font-bold text-foreground">Pending Review</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Document Review</span>
                        <span className="text-accent font-medium">Complete</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-full bg-accent rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Founder Verification</span>
                        <span className="text-accent font-medium">In Progress</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-accent rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Minimal Elegant */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Questions Answered</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What's the timeline for startup verification?",
                  a: "We verify most submissions within 48-72 hours. You'll receive real-time updates via email. Complex cases may take up to 5 business days.",
                },
                {
                  q: "What documents do I need to submit?",
                  a: "Company registration, founder identification, proof of address, business plan, and financial projections. A detailed checklist is provided during registration.",
                },
                {
                  q: "Are there any listing fees?",
                  a: "Completely free. We only earn through a small success-based commission if you close funding on the platform.",
                },
                {
                  q: "How do I connect with investors?",
                  a: "Once verified, your startup appears in investor feeds. Interested investors can request more information, and you manage all inquiries through your dashboard.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="group border border-border rounded-lg p-6 hover:border-accent/30 hover:bg-card/50 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-accent transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground mt-3">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Statement Section */}
        <section className="py-24 md:py-32 bg-gradient-to-r from-accent/5 to-accent/5 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The future of African entrepreneurship is here
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of founders and investors building Africa's next generation of category-defining
                companies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg gap-2"
                asChild
              >
                <Link href="/startups/register">
                  Get Listed Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-border hover:bg-card font-semibold rounded-lg bg-card/40"
                asChild
              >
                <Link href="/startups">Browse Startups</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
