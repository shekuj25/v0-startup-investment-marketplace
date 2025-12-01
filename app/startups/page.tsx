"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StartupCard } from "@/components/startup-card"
import { FilterChips } from "@/components/filter-chips"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

const DUMMY_STARTUPS = [
  {
    id: "1",
    name: "FinFlow",
    logo: "/fintech-logo.jpg",
    description: "AI-powered financial planning for small business owners. Automated insights and forecasting.",
    tags: ["FinTech", "AI"],
    fundingGoal: "$250K",
    stage: "Seed",
  },
  {
    id: "2",
    name: "AgriMind",
    logo: "/agriculture-logo.jpg",
    description: "Precision agriculture using satellite data and machine learning for crop optimization.",
    tags: ["AgriTech", "ML"],
    fundingGoal: "$500K",
    stage: "Series A",
  },
  {
    id: "3",
    name: "HealthSync",
    logo: "/healthtech-logo.jpg",
    description: "Real-time health monitoring platform connecting patients with healthcare providers.",
    tags: ["HealthTech", "IoT"],
    fundingGoal: "$1M",
    stage: "Series A",
  },
  {
    id: "4",
    name: "CleanEnergy Co",
    logo: "/cleantech-logo.jpg",
    description: "Sustainable energy solutions for commercial buildings using renewable technologies.",
    tags: ["GreenTech", "Energy"],
    fundingGoal: "$750K",
    stage: "Seed",
  },
  {
    id: "5",
    name: "EduSmart",
    logo: "/edtech-logo.jpg",
    description: "Personalized learning platform powered by AI tutoring and adaptive curriculum.",
    tags: ["EdTech", "AI"],
    fundingGoal: "$300K",
    stage: "Pre-Seed",
  },
  {
    id: "6",
    name: "LogisticAI",
    logo: "/logistics-logo.jpg",
    description: "Supply chain optimization using predictive analytics and route optimization.",
    tags: ["Logistics", "AI"],
    fundingGoal: "$1.2M",
    stage: "Series A",
  },
  {
    id: "7",
    name: "SpaceFlow",
    logo: "/spacetech-logo.jpg",
    description: "Satellite IoT platform for real-time global connectivity and data collection.",
    tags: ["SpaceTech", "IoT"],
    fundingGoal: "$2M",
    stage: "Series B",
  },
  {
    id: "8",
    name: "RetailNow",
    logo: "/retail-logo.jpg",
    description: "Omnichannel retail platform unifying online and physical store experiences.",
    tags: ["RetailTech", "E-commerce"],
    fundingGoal: "$600K",
    stage: "Seed",
  },
  {
    id: "9",
    name: "CyberGuard",
    logo: "/cybersecurity-logo.jpg",
    description: "Enterprise cybersecurity platform with AI-driven threat detection and response.",
    tags: ["CyberSecurity", "AI"],
    fundingGoal: "$1.5M",
    stage: "Series A",
  },
]

const INDUSTRIES = [
  "FinTech",
  "AgriTech",
  "HealthTech",
  "GreenTech",
  "EdTech",
  "Logistics",
  "SpaceTech",
  "RetailTech",
  "CyberSecurity",
]
const STAGES = ["Pre-Seed", "Seed", "Series A", "Series B"]

export default function StartupsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [selectedStage, setSelectedStage] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Filter startups
  const filteredStartups = DUMMY_STARTUPS.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndustry = !selectedIndustry || startup.tags.includes(selectedIndustry)
    const matchesStage = !selectedStage || startup.stage === selectedStage
    return matchesSearch && matchesIndustry && matchesStage
  })

  const totalPages = Math.ceil(filteredStartups.length / itemsPerPage)
  const paginatedStartups = filteredStartups.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const activeFilters: string[] = []
  if (selectedIndustry) activeFilters.push(selectedIndustry)
  if (selectedStage) activeFilters.push(selectedStage)

  const handleRemoveFilter = (filter: string) => {
    if (filter === selectedIndustry) setSelectedIndustry("")
    if (filter === selectedStage) setSelectedStage("")
    setCurrentPage(1)
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedIndustry("")
    setSelectedStage("")
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Discover Startups</h1>
          <p className="text-muted-foreground">Browse {DUMMY_STARTUPS.length} exceptional companies raising capital</p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10 h-11 bg-card border-border"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Select
                value={selectedIndustry}
                onValueChange={(value) => {
                  setSelectedIndustry(value)
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-full md:w-48 bg-card border-border">
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allIndustries">All Industries</SelectItem>
                  {INDUSTRIES.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedStage}
                onValueChange={(value) => {
                  setSelectedStage(value)
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-full md:w-48 bg-card border-border">
                  <SelectValue placeholder="All Stages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allStages">All Stages</SelectItem>
                  {STAGES.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Filter Chips */}
            {activeFilters.length > 0 && (
              <FilterChips filters={activeFilters} onRemove={handleRemoveFilter} onClear={handleClearFilters} />
            )}
          </div>
        </div>

        {/* Results */}
        {paginatedStartups.length === 0 ? (
          <div className="text-center py-20">
            <div className="space-y-3">
              <p className="text-lg font-medium text-foreground">No startups found</p>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
              <Button variant="outline" onClick={handleClearFilters}>
                Clear Filters
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedStartups.map((startup, index) => (
                <div key={startup.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                  <StartupCard {...startup} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-accent hover:bg-accent/90" : ""}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
