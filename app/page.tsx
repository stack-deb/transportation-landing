import Hero from "./components/Hero"
import QuoteForm from "./components/QuoteForm"
import ServicesOverview from "./components/ServicesOverview"
import WhereWeServe from "./components/WhereWeServe"
import OurProcess from "./components/OurProcess"
import FeaturedBlogs from "./components/FeaturedBlogs"
import TrustedPartners from "./components/TrustedPartners"
import AboutUsSnippet from "./components/AboutUsSnippet"

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <QuoteForm />
      <ServicesOverview />
      <WhereWeServe />
      <OurProcess />
      <FeaturedBlogs />
      <TrustedPartners />
      <AboutUsSnippet />
    </div>
  )
}

