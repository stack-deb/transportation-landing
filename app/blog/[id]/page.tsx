"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, LinkedinIcon as LinkedIn } from "lucide-react"
import Script from "next/script"

// Mock data for a single blog post
const blogPost = {
  id: "1",
  title: "The Future of Logistics in India",
  content: `...`, // Your existing content here
  author: "Rahul Sharma",
  date: "2023-05-15",
  likes: 15,
}

export default function SingleBlogPost() {
  const { id } = useParams()
  const [likes, setLikes] = useState(blogPost.likes)
  const shareUrl = `https://arihantcargomovers.com/blog/${id}`

  useEffect(() => {
    // Load Disqus
    const script = document.createElement("script")
    script.src = "https://arihantcargomovers.disqus.com/embed.js"
    script.setAttribute("data-timestamp", Date.now().toString())
    document.body.appendChild(script)
  }, [])

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <p className="text-gray-600 mb-4">
        By {blogPost.author} | {blogPost.date}
      </p>
      <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>

      <div className="flex items-center space-x-4 mb-8">
        <Button onClick={handleLike}>Like ({likes})</Button>
        <Button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}>
          <Facebook className="mr-2 h-4 w-4" /> Share
        </Button>
        <Button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}>
          <Twitter className="mr-2 h-4 w-4" /> Tweet
        </Button>
        <Button
          onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
        >
          <LinkedIn className="mr-2 h-4 w-4" /> Share
        </Button>
      </div>

      {/* Disqus Comments */}
      <div id="disqus_thread"></div>
    </article>
  )
}

