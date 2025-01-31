import BlogListing from "../components/BlogListing"
import FeaturedPosts from "../components/FeaturedPosts"

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <FeaturedPosts />
      <BlogListing />
    </main>
  )
}

