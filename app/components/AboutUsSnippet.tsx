import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUsSnippet() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About Arihantcargomovers</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          With years of experience in the logistics industry, Arihantcargomovers is committed to providing efficient and
          reliable cargo solutions across India. Our dedication to customer satisfaction and innovative approach sets us
          apart in the transportation sector.
        </p>
        <div className="text-center">
          <Link href="/about">
            <Button variant="outline">Learn More About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

