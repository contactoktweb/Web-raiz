"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "573001234567"
const DEFAULT_MESSAGE = "Hola, me gustaría recibir más información sobre los productos de Raíz Vital."

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  )
}
