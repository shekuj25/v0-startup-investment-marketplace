"use client"

import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface FilterChipsProps {
  filters: string[]
  onRemove: (filter: string) => void
  onClear: () => void
}

export function FilterChips({ filters, onRemove, onClear }: FilterChipsProps) {
  if (filters.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {filters.map((filter) => (
        <Badge
          key={filter}
          variant="secondary"
          className="bg-accent/10 text-accent border border-accent/20 pr-0 flex items-center gap-1"
        >
          {filter}
          <button
            onClick={() => onRemove(filter)}
            className="ml-1 hover:bg-accent/20 rounded p-0.5 transition-colors"
            aria-label={`Remove ${filter} filter`}
          >
            <X className="w-3 h-3" />
          </button>
        </Badge>
      ))}
      <button onClick={onClear} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
        Clear all
      </button>
    </div>
  )
}
