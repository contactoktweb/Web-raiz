import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { BlogPreview } from "@/components/blog-preview"
import { AsesoriaSection } from "@/components/asesoria-section"
import { StoreSection } from "@/components/store-section"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/lib/client"
import {
  heroSectionQuery,
  benefitsSectionQuery,
  latestPostsQuery,
  asesoriaSectionQuery,
  globalSettingsQuery,
  storeSectionQuery,
} from "@/sanity/lib/queries"

export default async function HomePage() {
  const [heroData, benefitsData, latestPosts, asesoriaData, globalData, storeData] = await Promise.all([
    client.fetch(heroSectionQuery),
    client.fetch(benefitsSectionQuery),
    client.fetch(latestPostsQuery),
    client.fetch(asesoriaSectionQuery),
    client.fetch(globalSettingsQuery),
    client.fetch(storeSectionQuery)
  ])

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection data={heroData} />
        <BenefitsSection data={benefitsData} />
        <StoreSection data={storeData} />
        <BlogPreview posts={latestPosts} />
        <AsesoriaSection data={asesoriaData} whatsappNumber={globalData?.whatsappNumber} />
      </main>
      <Footer />
    </>
  )
}
