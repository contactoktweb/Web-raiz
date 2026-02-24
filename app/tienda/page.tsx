import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TiendaContent } from "@/components/tienda-content"

export const metadata: Metadata = {
  title: "Tienda Naturista",
  description:
    "Productos naturales organizados por beneficios. Suplementos de alta calidad para energía, salud hormonal, digestiva y más.",
}

export default function TiendaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <TiendaContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
