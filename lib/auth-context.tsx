"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  id: string
  email: string
  companyName: string
  role: "founder" | "investor"
}

interface AuthContextType {
  user: User | null
  login: (email: string, companyName: string, role: "founder" | "investor") => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("marketplace_user")
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        setUser(null)
      }
    }
    setIsLoading(false)
  }, [])

  const login = (email: string, companyName: string, role: "founder" | "investor") => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      companyName,
      role,
    }
    setUser(newUser)
    localStorage.setItem("marketplace_user", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("marketplace_user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
