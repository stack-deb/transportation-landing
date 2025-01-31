"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement newsletter signup logic here
    console.log("Signing up with email:", email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg">
        <p className="text-green-800 dark:text-green-100">Thank you for signing up!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <h3 className="text-lg font-semibold">Sign up for our newsletter</h3>
      <div className="flex space-x-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  )
}

