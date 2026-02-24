import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { BlogPreview } from "@/components/blog-preview"
import { AsesoriaSection } from "@/components/asesoria-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <BlogPreview />
        <AsesoriaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
