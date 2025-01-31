import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredPosts = [
  {
    id: 1,
    title: "5 Ways Technology is Revolutionizing Logistics",
    excerpt: "Discover how AI, IoT, and blockchain are transforming the logistics industry.",
    date: "2023-05-20",
    author: "Neha Gupta",
  },
  {
    id: 2,
    title: "The Rise of Same-Day Delivery in India",
    excerpt: "Exploring the challenges and opportunities in the fast-growing same-day delivery market.",
    date: "2023-05-18",
    author: "Vikram Singh",
  },
]

export default function FeaturedPosts() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {post.date} | By {post.author}
                </p>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={`/blog/${post.id}`}>
                  <Button>Read Full Article</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

