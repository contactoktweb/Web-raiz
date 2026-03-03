import { defineField, defineType } from 'sanity'

export const globalSettings = defineType({
    name: 'globalSettings',
    title: 'Configuración Global',
    type: 'document',
    fields: [
        defineField({
            name: 'siteName',
            title: 'Nombre del Sitio',
            type: 'string',
            description: 'El nombre comercial de la marca (ej: Raíz Vital). Se usa en el título de la pestaña y en el copyright del footer.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                    description: 'Importante para SEO y accesibilidad.',
                },
            ],
        }),
        defineField({
            name: 'footerDescription',
            title: 'Descripción del Footer',
            type: 'text',
            rows: 3,
            description: 'Breve descripción que aparece en el pie de página.',
        }),
        defineField({
            name: 'contactEmail',
            title: 'Correo Electrónico de Contacto',
            type: 'string',
            description: 'El correo electrónico principal donde los clientes enviarán sus consultas.',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'contactPhone',
            title: 'Teléfono de Contacto Principal',
            type: 'string',
            description: 'Número telefónico visible para los clientes (ej: +57 321 456 7890).',
        }),
        defineField({
            name: 'whatsappNumber',
            title: 'Número de WhatsApp de contacto',
            type: 'string',
            description: 'Número de WhatsApp para información general (ej: 573001234567).',
        }),
        defineField({
            name: 'whatsappFloatingNumber',
            title: 'Número de WhatsApp (Botón Flotante)',
            type: 'string',
            description: 'El número que se usará específicamente en el botón flotante que aparece en todo el sitio.',
        }),
        defineField({
            name: 'whatsappFloatingMessage',
            title: 'Mensaje Predeterminado (Botón Flotante)',
            type: 'string',
            description: 'El mensaje que aparecerá pre-escrito cuando el usuario haga clic en el botón flotante.',
        }),
        defineField({
            name: 'address',
            title: 'Dirección Física',
            type: 'string',
            description: 'Dirección de la tienda u oficina principal (ej: Calle 123 #45-67, Bogotá).',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Enlaces de Redes Sociales',
            type: 'object',
            description: 'Configura las URLs de las redes sociales de la marca. Si se dejan vacías, no aparecerán en el sitio.',
            fields: [
                { name: 'facebook', title: 'Facebook URL', type: 'url', description: 'Enlace completo a la página de Facebook.' },
                { name: 'instagram', title: 'Instagram URL', type: 'url', description: 'Enlace completo al perfil de Instagram.' },
                { name: 'tiktok', title: 'TikTok URL', type: 'url', description: 'Enlace completo al perfil de TikTok.' },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Configuración Global',
            }
        },
    },
})
