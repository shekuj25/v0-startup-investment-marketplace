"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { VerificationBadge } from "@/components/verification-badge"
import { X, Plus, Upload, CheckCircle } from "lucide-react"
import { addRegisteredStartup } from "@/lib/startup-data"

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
  "Other",
]

interface TeamMember {
  id: string
  name: string
  role: string
  email: string
}

type FormStep = "form" | "success"

export default function RegisterPage() {
  const router = useRouter()
  const { user, login } = useAuth()
  const [step, setStep] = useState<FormStep>("form")
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    email: "",
    phone: "",
    problem: "",
    solution: "",
    fundingGoal: "",
  })

  const [team, setTeam] = useState<TeamMember[]>([{ id: "1", name: "", role: "", email: "" }])
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [documentFile, setDocumentFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTeamMemberChange = (id: string, field: string, value: string) => {
    setTeam((prev) => prev.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  const addTeamMember = () => {
    setTeam((prev) => [...prev, { id: Date.now().toString(), name: "", role: "", email: "" }])
  }

  const removeTeamMember = (id: string) => {
    if (team.length > 1) {
      setTeam((prev) => prev.filter((member) => member.id !== id))
    }
  }

  const handleFileUpload = (file: File, type: "logo" | "document") => {
    if (type === "logo") {
      setLogoFile(file)
    } else {
      setDocumentFile(file)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.companyName) newErrors.companyName = "Company name is required"
    if (!formData.industry) newErrors.industry = "Industry is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.problem) newErrors.problem = "Problem statement is required"
    if (!formData.solution) newErrors.solution = "Solution is required"
    if (!formData.fundingGoal) newErrors.fundingGoal = "Funding goal is required"
    if (!logoFile) newErrors.logo = "Logo is required"
    if (!documentFile) newErrors.document = "Verification document is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Register user in auth system when startup is registered
      const userId = `user-${Date.now()}`
      login(formData.email, formData.companyName, "founder")

      // Add startup to data
      addRegisteredStartup(formData, team, userId)
      setStep("success")

      // Redirect after showing success
      setTimeout(() => {
        router.push("/dashboard")
      }, 3000)
    }
  }

  if (step === "success") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border border-border bg-card p-12 text-center space-y-8 animate-fade-in">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-foreground">Application Submitted!</h1>
              <p className="text-muted-foreground text-lg">
                Thank you for registering <span className="font-semibold">{formData.companyName}</span>
              </p>
            </div>

            <VerificationBadge status="pending" daysRemaining={2} />

            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 text-left space-y-3">
              <p className="text-sm font-semibold text-foreground">What happens next:</p>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">1</span>
                  <span>Our team reviews your company information and verification documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">2</span>
                  <span>We may schedule a brief call to discuss your funding needs and business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">3</span>
                  <span>Once approved, your startup will be live and visible to investors (48-72 hours)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">4</span>
                  <span>You'll receive investor inquiries directly in your dashboard</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-blue-700">Check your email</p>
              <p className="text-xs text-blue-600">
                We've sent a confirmation to <span className="font-medium">{formData.email}</span>. You'll receive
                updates as your application is reviewed.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="/dashboard">Go to Dashboard</a>
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent" asChild>
                <a href="/startups">Browse Other Startups</a>
              </Button>
            </div>
          </Card>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Register Your Startup</h1>
          <p className="text-muted-foreground">
            Complete the form below to list your startup and connect with investors. We'll verify your information
            within 48-72 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Information */}
          <Card
            className="border border-border bg-card p-8 space-y-6 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Basic Information</h2>
              <p className="text-sm text-muted-foreground">Tell us about your company</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company Name *</label>
                <Input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="e.g., TechVenture"
                  className="bg-input border-border"
                />
                {errors.companyName && <p className="text-xs text-destructive">{errors.companyName}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Industry *</label>
                <Select value={formData.industry} onValueChange={(value) => handleSelectChange("industry", value)}>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDUSTRIES.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.industry && <p className="text-xs text-destructive">{errors.industry}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Website</label>
                <Input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourcompany.com"
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Funding Goal *</label>
                <Input
                  type="text"
                  name="fundingGoal"
                  value={formData.fundingGoal}
                  onChange={handleInputChange}
                  placeholder="e.g., $500,000"
                  className="bg-input border-border"
                />
                {errors.fundingGoal && <p className="text-xs text-destructive">{errors.fundingGoal}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="hello@company.com"
                  className="bg-input border-border"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="bg-input border-border"
                />
              </div>
            </div>

            {/* Logo Upload */}
            <div className="space-y-3 pt-2">
              <label className="text-sm font-medium text-foreground">Logo Upload *</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files && handleFileUpload(e.target.files[0], "logo")}
                  className="hidden"
                  id="logo-upload"
                />
                <label htmlFor="logo-upload" className="cursor-pointer space-y-2 block">
                  <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground">
                    {logoFile ? logoFile.name : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, SVG up to 10MB</p>
                </label>
              </div>
              {errors.logo && <p className="text-xs text-destructive">{errors.logo}</p>}
            </div>
          </Card>

          {/* Section 2: Problem & Solution */}
          <Card
            className="border border-border bg-card p-8 space-y-6 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Problem & Solution</h2>
              <p className="text-sm text-muted-foreground">Describe your business opportunity</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Problem Statement *</label>
              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleInputChange}
                placeholder="What problem does your startup solve?"
                rows={4}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              {errors.problem && <p className="text-xs text-destructive">{errors.problem}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Solution Description *</label>
              <textarea
                name="solution"
                value={formData.solution}
                onChange={handleInputChange}
                placeholder="How does your startup solve this problem?"
                rows={4}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              {errors.solution && <p className="text-xs text-destructive">{errors.solution}</p>}
            </div>
          </Card>

          {/* Section 3: Team */}
          <Card
            className="border border-border bg-card p-8 space-y-6 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Team Members</h2>
                <p className="text-sm text-muted-foreground">Tell investors about your leadership</p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addTeamMember}
                className="gap-2 border-border bg-transparent"
              >
                <Plus className="w-4 h-4" />
                Add Member
              </Button>
            </div>

            <div className="space-y-4">
              {team.map((member, index) => (
                <div key={member.id} className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm text-foreground">Team Member {index + 1}</h3>
                    {team.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTeamMember(member.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <Input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(member.id, "name", e.target.value)}
                      placeholder="Name"
                      className="bg-input border-border text-sm"
                    />
                    <Input
                      type="text"
                      value={member.role}
                      onChange={(e) => handleTeamMemberChange(member.id, "role", e.target.value)}
                      placeholder="Role"
                      className="bg-input border-border text-sm"
                    />
                    <Input
                      type="email"
                      value={member.email}
                      onChange={(e) => handleTeamMemberChange(member.id, "email", e.target.value)}
                      placeholder="Email"
                      className="bg-input border-border text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Section 4: Verification */}
          <Card
            className="border border-border bg-card p-8 space-y-6 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Verification</h2>
              <p className="text-sm text-muted-foreground">Upload a verification document to establish authenticity</p>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Verification Document *</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => e.target.files && handleFileUpload(e.target.files[0], "document")}
                  className="hidden"
                  id="document-upload"
                />
                <label htmlFor="document-upload" className="cursor-pointer space-y-2 block">
                  <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground">
                    {documentFile ? documentFile.name : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 20MB</p>
                </label>
              </div>
              {errors.document && <p className="text-xs text-destructive">{errors.document}</p>}
            </div>
          </Card>

          {/* Submit */}
          <div className="flex gap-4">
            <Button type="submit" size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              Submit Application
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "/")}
              className="flex-1 border-border hover:bg-muted"
            >
              Cancel
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}
