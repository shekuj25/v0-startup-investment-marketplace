import { STARTUP_DATA } from "@/lib/startup-data"

// Get verified startups for the featured section
export const FEATURED_STARTUPS = STARTUP_DATA.filter((s) => s.verificationStatus === "verified").slice(0, 3)
