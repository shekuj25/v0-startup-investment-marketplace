"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
              <span className="font-bold text-white text-sm">V</span>
            </div>
            <span className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">Venture</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/startups" className="text-sm text-foreground hover:text-accent transition-colors">
              Discover
            </Link>
            <Link href="/how-it-works" className="text-sm text-foreground hover:text-accent transition-colors">
              How it works
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-accent transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
              <Link href="/startups/register">List your startup</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link href="/startups" className="text-sm text-foreground hover:text-accent transition-colors">
                Discover
              </Link>
              <Link href="/how-it-works" className="text-sm text-foreground hover:text-accent transition-colors">
                How it works
              </Link>
              <Link href="/about" className="text-sm text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link href="/startups/register">List your startup</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
