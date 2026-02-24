import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "573001234567"
const ASESORIA_MESSAGE =
  "Hola, me gustaría agendar una asesoría personalizada con Raíz Vital."

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ASESORIA_MESSAGE)}`

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-secondary/10" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-secondary/5" />
        <div className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-accent/5" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-24 lg:flex-row lg:gap-16 lg:px-8">
        {/* Text Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Blog Educativo & Tienda Naturista
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl text-balance">
            Nutre tu cuerpo, Equilibra tu vida
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            No existen fórmulas genéricas. Encuentra la orientación personalizada
            y los productos naturales que tu cuerpo necesita para sanar desde la
            raíz.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                <Calendar className="h-5 w-5" />
                Agendar Asesoría Personalizada
              </Button>
            </a>
            <Link href="/tienda">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
              >
                Explorar la Tienda
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                <svg
                  className="h-4 w-4 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                <svg
                  className="h-4 w-4 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">Asesoría Personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                <svg
                  className="h-4 w-4 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">Envío Nacional</span>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-secondary/10 blur-2xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-2 border-secondary/20 bg-card shadow-xl md:h-96 md:w-96">
              <svg
                className="h-40 w-40 text-primary md:h-56 md:w-56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 20h10" />
                <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
