import type { Metadata, Viewport } from "next"
import { Roboto, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
  title: {
    default: "Raíz Vital — Nutre tu cuerpo, Equilibra tu vida",
    template: "%s | Raíz Vital",
  },
  description:
    "Encuentra orientación personalizada y productos naturales que tu cuerpo necesita para sanar desde la raíz. Blog educativo de salud y tienda naturista.",
  keywords: [
    "salud natural",
    "tienda naturista",
    "suplementos naturales",
    "asesoría nutricional",
    "bienestar",
    "productos naturales",
  ],
  openGraph: {
    title: "Raíz Vital — Nutre tu cuerpo, Equilibra tu vida",
    description:
      "Blog educativo de salud y tienda naturista. Orientación personalizada y productos naturales.",
    type: "website",
    locale: "es_LA",
  },
}

export const viewport: Viewport = {
  themeColor: "#1B432A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${roboto.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
