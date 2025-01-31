import Image from "next/image"

export default function TrustedPartners() {
  const partners = [
    { name: "Eureka Forbes", logo: "/placeholder.svg?height=50&width=100" },
    { name: "Havells", logo: "/placeholder.svg?height=50&width=100" },
    { name: "TCI", logo: "/placeholder.svg?height=50&width=100" },
    { name: "Atlas", logo: "/placeholder.svg?height=50&width=100" },
  ]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Trusted Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} width={100} height={50} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

