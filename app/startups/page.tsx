"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StartupCard } from "@/components/startup-card"
import { FilterChips } from "@/components/filter-chips"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { STARTUP_DATA } from "@/lib/startup-data"

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
  const [verificationFilter, setVerificationFilter] = useState<"all" | "verified" | "pending">("all")
  const itemsPerPage = 6

  const filteredStartups = STARTUP_DATA.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndustry = !selectedIndustry || startup.tags.includes(selectedIndustry)
    const matchesStage = !selectedStage || startup.stage === selectedStage
    const matchesVerification =
      verificationFilter === "all" ||
      (verificationFilter === "verified" && startup.verificationStatus === "verified") ||
      (verificationFilter === "pending" && startup.verificationStatus === "pending")

    return matchesSearch && matchesIndustry && matchesStage && matchesVerification
  })

  const totalPages = Math.ceil(filteredStartups.length / itemsPerPage)
  const paginatedStartups = filteredStartups.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const activeFilters: string[] = []
  if (selectedIndustry) activeFilters.push(selectedIndustry)
  if (selectedStage) activeFilters.push(selectedStage)
  if (verificationFilter !== "all") activeFilters.push(verificationFilter === "verified" ? "Verified" : "Pending")

  const handleRemoveFilter = (filter: string) => {
    if (filter === selectedIndustry) setSelectedIndustry("")
    if (filter === selectedStage) setSelectedStage("")
    if (filter === "Verified") setVerificationFilter("all")
    if (filter === "Pending") setVerificationFilter("all")
    setCurrentPage(1)
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedIndustry("")
    setSelectedStage("")
    setVerificationFilter("all")
    setCurrentPage(1)
  }

  const verifiedCount = STARTUP_DATA.filter((s) => s.verificationStatus === "verified").length
  const pendingCount = STARTUP_DATA.filter((s) => s.verificationStatus === "pending").length

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Discover Startups</h1>
          <p className="text-muted-foreground">
            Browse {STARTUP_DATA.length} exceptional companies • {verifiedCount} verified • {pendingCount} under review
          </p>
        </div>

        <div className="mb-8">
          <Tabs value={verificationFilter} onValueChange={(v) => setVerificationFilter(v as any)}>
            <TabsList className="grid grid-cols-3 w-fit bg-card border border-border">
              <TabsTrigger value="all">All Startups</TabsTrigger>
              <TabsTrigger value="verified">Verified ({verifiedCount})</TabsTrigger>
              <TabsTrigger value="pending">Under Review ({pendingCount})</TabsTrigger>
            </TabsList>
          </Tabs>
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
                  setSelectedIndustry(value === "allIndustries" ? "" : value)
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
                  setSelectedStage(value === "allStages" ? "" : value)
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
