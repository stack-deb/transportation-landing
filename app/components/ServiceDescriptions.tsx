import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, Warehouse, Globe } from "lucide-react"

const services = [
  {
    title: "Full Truckload (FTL)",
    description: "Dedicated trucks for large shipments across India.",
    icon: Truck,
    details:
      "Ideal for bulk goods, time-sensitive deliveries, and high-value items. We offer various truck sizes to suit your needs.",
  },
  {
    title: "Less Than Truckload (LTL)",
    description: "Cost-effective solution for smaller shipments.",
    icon: Package,
    details:
      "Perfect for businesses with regular small to medium-sized shipments. Share truck space and save on transportation costs.",
  },
  {
    title: "Warehousing",
    description: "Secure storage solutions across major Indian cities.",
    icon: Warehouse,
    details:
      "State-of-the-art facilities with 24/7 security, climate control options, and inventory management systems.",
  },
  {
    title: "International Shipping",
    description: "Seamless cargo transportation across borders.",
    icon: Globe,
    details:
      "Comprehensive international shipping services including customs clearance, documentation, and door-to-door delivery.",
  },
]

export default function ServiceDescriptions() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <service.icon className="mr-2 h-6 w-6" />
                {service.title}
              </CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{service.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

