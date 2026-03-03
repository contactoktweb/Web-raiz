"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Symptom {
  id: string
  label: string
}

interface AsesoriaSectionProps {
  data: {
    badge: string
    title: string
    description: string
    symptoms: Symptom[]
    buttonText: string
    footerText: string
  }
  whatsappNumber: string
}

export function AsesoriaSection({ data, whatsappNumber }: AsesoriaSectionProps) {
  const [selected, setSelected] = useState<string | null>(null)

  if (!data) return null

  const symptoms = data.symptoms || []

  const handleSubmit = () => {
    if (!selected) return
    const symptom = symptoms.find((s) => s.id === selected)
    const message = `Hola, me gustaría recibir una asesoría personalizada. Mi síntoma principal es: ${symptom?.label}. ¿Podrían ayudarme?`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="asesoria" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
          {data.badge}
        </span>
        <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          {data.title}
        </h2>
        <p className="mt-4 mx-auto max-w-2xl leading-relaxed text-primary-foreground/70">
          {data.description}
        </p>

        {/* Symptom Selector */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {symptoms.map((symptom) => (
            <button
              key={symptom.id}
              onClick={() => setSelected(symptom.id)}
              className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${selected === symptom.id
                  ? "border-secondary bg-primary-foreground/10 shadow-md"
                  : "border-primary-foreground/10 hover:border-primary-foreground/30"
                }`}
            >
              {selected === symptom.id && (
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
              )}
              <span
                className={`text-sm font-medium ${selected === symptom.id
                    ? "text-primary-foreground"
                    : "text-primary-foreground/70"
                  }`}
              >
                {symptom.label}
              </span>
            </button>
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!selected}
          size="lg"
          className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:opacity-40 gap-2"
        >
          <Send className="h-5 w-5" />
          {data.buttonText}
        </Button>
        <p className="mt-4 text-xs text-primary-foreground/50">
          {data.footerText}
        </p>
      </div>
    </section>
  )
}
