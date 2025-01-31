import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Logistics in India",
    excerpt: "Exploring upcoming trends and technologies shaping the Indian logistics landscape.",
    date: "2023-05-15",
    author: "Rahul Sharma",
  },
  {
    id: 2,
    title: "Sustainable Shipping Practices",
    excerpt: "How the logistics industry is adapting to reduce its environmental impact.",
    date: "2023-05-10",
    author: "Priya Patel",
  },
  {
    id: 3,
    title: "Navigating Supply Chain Disruptions",
    excerpt: "Strategies for maintaining smooth operations in challenging times.",
    date: "2023-05-05",
    author: "Amit Kumar",
  },
  // Add more blog posts as needed
]

export default function BlogListing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {post.date} | By {post.author}
              </p>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.id}`}>
                <Button variant="outline">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

