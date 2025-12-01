"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

interface VerificationBadgeProps {
  status: "pending" | "verified" | "rejected"
  daysRemaining?: number
}

export function VerificationBadge({ status, daysRemaining }: VerificationBadgeProps) {
  if (status === "verified") {
    return (
      <Card className="border border-green-500/20 bg-green-500/5 p-4 flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <div>
          <p className="font-semibold text-sm text-green-700">Verified & Live</p>
          <p className="text-xs text-green-600">Your startup is now visible to investors</p>
        </div>
      </Card>
    )
  }

  if (status === "rejected") {
    return (
      <Card className="border border-red-500/20 bg-red-500/5 p-4 flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-red-600" />
        <div>
          <p className="font-semibold text-sm text-red-700">Application Rejected</p>
          <p className="text-xs text-red-600">Please contact support for more information</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border border-blue-500/20 bg-blue-500/5 p-4 flex items-center gap-3">
      <Clock className="w-5 h-5 text-blue-600 animate-spin" />
      <div>
        <p className="font-semibold text-sm text-blue-700">Under Review</p>
        <p className="text-xs text-blue-600">
          {daysRemaining === 1
            ? "Decision expected within 24 hours"
            : `Decision expected in ${daysRemaining || 2}-3 days`}
        </p>
      </div>
    </Card>
  )
}
