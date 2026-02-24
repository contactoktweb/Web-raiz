import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TiendaContent } from "@/components/tienda-content"

export const metadata: Metadata = {
  title: "Tienda Naturista | Raiz Vital",
  description:
    "Productos naturales organizados por beneficios. Suplementos de alta calidad para energia, salud hormonal, digestiva y mas.",
}

export default function TiendaPage() {
  return (
    <>
      <Navbar />
      <main>
        <TiendaContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
