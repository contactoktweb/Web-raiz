import type { Metadata, Viewport } from "next"
import { Roboto, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { CartSidebar } from "@/components/cart-sidebar"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://raizvital.com"),
  title: {
    default: "Raíz Vital — Nutre tu cuerpo, Equilibra tu vida",
    template: "%s | Raíz Vital",
  },
  description:
    "Encuentra orientación personalizada y productos naturales que tu cuerpo necesita para sanar desde la raíz. Blog educativo de salud y tienda naturista.",
  keywords: [
    "tienda naturista online",
    "salud natural",
    "productos naturales",
    "suplementos deportivos",
    "nutrición deportiva",
    "rendimiento físico",
    "energía y concentración",
    "salud inmunológica",
    "cuidado del adulto mayor",
    "bienestar",
    "asesoría nutricional personalizada",
  ],
  authors: [{ name: "K&T" }],
  creator: "K&T",
  publisher: "Raíz Vital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Raíz Vital — Nutre tu cuerpo, Equilibra tu vida",
    description:
      "Blog educativo de salud y tienda naturista. Orientación personalizada y productos naturales.",
    url: "https://raizvital.com",
    siteName: "Raíz Vital",
    images: [
      {
        url: "/logo-oficial.png",
        width: 1200,
        height: 630,
        alt: "Raíz Vital Logo",
      },
    ],
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raíz Vital — Nutre tu cuerpo, Equilibra tu vida",
    description: "Blog educativo de salud y tienda naturista. Orientación personalizada.",
    images: ["/logo-oficial.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#1B432A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

import { client } from "@/sanity/lib/client"
import { globalSettingsQuery } from "@/sanity/lib/queries"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const revalidate = 60 // Revalidate layout every 60 seconds to fetch new global settings

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const globalSettings = await client.fetch(globalSettingsQuery)

  return (
    <html lang="es" className={`${roboto.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <CartSidebar whatsappNumber={globalSettings?.whatsappNumber} />
        </CartProvider>
        <WhatsAppButton
          number={globalSettings?.whatsappFloatingNumber || globalSettings?.whatsappNumber}
          message={globalSettings?.whatsappFloatingMessage}
        />
        <Analytics />
      </body>
    </html>
  )
}
