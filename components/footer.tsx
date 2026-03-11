import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { globalSettingsQuery } from "@/sanity/lib/queries"

const footerLinks = {
  navegacion: [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Blog" },
    { href: "/tienda", label: "Tienda" },
    { href: "#asesoria", label: "Asesoría" },
  ],
  categorias: [
    { href: "/tienda", label: "Rendimiento Deportivo" },
    { href: "/tienda", label: "Energía y Concentración" },
    { href: "/tienda", label: "Relajación y Sueño" },
    { href: "/tienda", label: "Sistema Inmunológico" },
    { href: "/tienda", label: "Desarrollo Infantil" },
  ],
}

export async function Footer() {
  const settings = await client.fetch(globalSettingsQuery);
  const logoUrl = settings?.logoUrl || "/logo-oficial.png";
  const logoAlt = settings?.logoAlt || "Raíz Vital Logo Blanco";
  const description = settings?.footerDescription || "Nutre tu cuerpo, Equilibra tu vida. Productos naturales y orientación personalizada para tu bienestar integral.";
  const fallbackYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand - Takes up more space */}
          <div className="flex flex-col gap-4 lg:col-span-6 lg:pr-12">
            <div className="flex items-center">
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={80}
                height={80}
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              {description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {settings?.whatsappNumber && settings.whatsappNumber.replace(/\\D/g, "").length > 5 && (
                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/\\D/g, "")}?text=Hola,%20me%20gustaría%20recibir%20más%20información`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 fill-current">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
              )}
              {settings?.socialLinks?.instagram && (
                <a
                  href={settings.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
              {settings?.socialLinks?.facebook && (
                <a
                  href={settings.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {settings?.socialLinks?.tiktok && (
                <a
                  href={settings.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-serif text-lg font-semibold">Navegación</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-serif text-lg font-semibold">Categorías</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.categorias.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-primary-foreground/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-primary-foreground/60 w-full sm:w-auto text-center">
            {fallbackYear} {settings?.siteName || "Raíz Vital"}. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm w-full sm:w-auto justify-center sm:justify-end">
            <Link
              href="/politica-de-datos"
              className="text-primary-foreground/60 transition-colors hover:text-primary-foreground underline underline-offset-4"
            >
              Política de Tratamiento de Datos
            </Link>
            <span className="hidden sm:inline text-primary-foreground/20">•</span>
            <a
              href="https://www.kytcode.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 transition-colors hover:text-primary-foreground flex items-center justify-center gap-1"
            >
              Desarrollado por K&T 🤍
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
