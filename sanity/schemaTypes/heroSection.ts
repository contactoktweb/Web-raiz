import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
    name: 'heroSection',
    title: 'Sección Hero',
    type: 'document',
    fields: [
        defineField({
            name: 'badge',
            title: 'Etiqueta Superior (Badge)',
            type: 'string',
            description: 'Pequeño texto introductorio que aparece sobre el título principal.',
            initialValue: 'Raíz Vital | Salud natural y consciente',
        }),
        defineField({
            name: 'headlineLine1',
            title: 'Titular - Línea 1',
            type: 'string',
            description: 'La primera parte del título masivo (ej: Tu bienestar).',
            initialValue: 'Tu bienestar',
        }),
        defineField({
            name: 'headlineLine2Part1',
            title: 'Titular - Línea 2 (Parte Normal)',
            type: 'string',
            description: 'Texto que sigue a la línea 1 sin resaltado (ej: merece).',
            initialValue: 'merece',
        }),
        defineField({
            name: 'headlineLine2Part2',
            title: 'Titular - Línea 2 (Parte Resaltada)',
            type: 'string',
            description: 'La palabra o frase que llevará el estilo de subrayado botánico (ej: raíces).',
            initialValue: 'raíces',
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagen Principal (Izquierda)',
            type: 'image',
            description: 'Imagen de fondo del panel más grande del Hero.',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string',
                    description: 'Descripción de la imagen para Google (SEO).',
                })
            ]
        }),
        defineField({
            name: 'mainImageText',
            title: 'Texto sobre Imagen Principal',
            type: 'text',
            rows: 3,
            description: 'Frase inspiracional que aparece dentro del cuadro de la imagen principal.',
            initialValue: 'No existen fórmulas genéricas. Tu cuerpo merece una orientación personalizada.',
        }),
        defineField({
            name: 'ingredientsImage',
            title: 'Imagen de Ingredientes (Superior Derecha)',
            type: 'image',
            description: 'Imagen enfocada en los componentes naturales.',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string',
                    description: 'Descripción para accesibilidad.',
                })
            ]
        }),
        defineField({
            name: 'naturalBadge',
            title: 'Etiqueta "Natural"',
            type: 'string',
            description: 'Texto que aparece sobre la imagen de ingredientes (ej: 100% Natural).',
            initialValue: '100% Natural',
        }),
        defineField({
            name: 'statsNumber',
            title: 'Cifra de Estadísticas',
            type: 'string',
            description: 'Número impactante (ej: +500).',
            initialValue: '+500',
        }),
        defineField({
            name: 'statsDescription',
            title: 'Descripción de la Cifra',
            type: 'string',
            description: 'Texto corto bajo el número (ej: Vidas transformadas).',
            initialValue: 'Vidas transformadas con nuestro acompañamiento',
        }),
        defineField({
            name: 'productTeaserImage',
            title: 'Imagen del Teaser de Tienda',
            type: 'image',
            description: 'Imagen de producto que invita a la tienda (Derecha inferior).',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string',
                    description: 'Descripción para SEO.',
                })
            ]
        }),
        defineField({
            name: 'productTeaserText',
            title: 'Texto del Botón Tienda',
            type: 'string',
            description: 'Texto de llamado a la acción (ej: Ver Tienda).',
            initialValue: 'Ver Tienda',
        }),
        defineField({
            name: 'trustStrip',
            title: 'Franja de Confianza (Puntos Clave)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Lista de beneficios cortos resaltados al final del Hero.',
            initialValue: ['Envío Nacional', 'Asesoría Gratis', 'Ingredientes Puros', 'Resultados Reales'],
        }),
    ],
})
