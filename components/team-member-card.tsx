import { Card } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TeamMemberCardProps {
  name: string
  role: string
  image: string
  linkedIn?: string
}

export function TeamMemberCard({ name, role, image, linkedIn }: TeamMemberCardProps) {
  return (
    <Card className="border border-border bg-card p-4 hover:border-accent/50 transition-colors group">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-muted mb-3 overflow-hidden border-2 border-border group-hover:border-accent/50 transition-colors">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-semibold text-sm text-foreground mb-1">{name}</h4>
        <p className="text-xs text-muted-foreground mb-3">{role}</p>
        {linkedIn && (
          <Link href={linkedIn} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
          </Link>
        )}
      </div>
    </Card>
  )
}
