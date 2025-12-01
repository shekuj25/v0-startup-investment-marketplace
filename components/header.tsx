"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, LogOut } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent via-accent to-accent/60 flex items-center justify-center shadow-lg shadow-accent/20">
              <Zap className="w-5 h-5 text-white font-bold" />
            </div>
            <span className="font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-300">
              Venture
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/startups"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              Marketplace
            </Link>
            <Link
              href="/startups/register"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              Register
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Button variant="outline" size="sm" className="rounded-lg font-medium bg-transparent" asChild>
                  <Link href="/dashboard">{user.companyName}</Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-lg font-medium bg-transparent gap-2"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" className="rounded-lg font-medium bg-transparent" asChild>
                  <Link href="/startups">Browse</Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg"
                  asChild
                >
                  <Link href="/startups/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/40 animate-fade-in">
            <nav className="flex flex-col gap-3">
              <Link
                href="/startups"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                Marketplace
              </Link>
              <Link
                href="/startups/register"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                Register
              </Link>
              {user && (
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  Dashboard
                </Link>
              )}
              <div className="flex flex-col gap-2 pt-3 border-t border-border/40">
                {user ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent rounded-lg font-medium"
                      asChild
                    >
                      <Link href="/dashboard">{user.companyName}</Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full bg-transparent rounded-lg font-medium"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent rounded-lg font-medium"
                      asChild
                    >
                      <Link href="/startups">Browse</Link>
                    </Button>
                    <Button
                      size="sm"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg"
                      asChild
                    >
                      <Link href="/startups/register">Get Started</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
