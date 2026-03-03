import { defineField, defineType } from 'sanity'

export const storeSection = defineType({
    name: 'storeSection',
    title: 'Sección de Tienda (Home)',
    type: 'document',
    fields: [
        defineField({
            name: 'badge',
            title: 'Etiqueta (Badge)',
            type: 'string',
            description: 'Ej: Catálogo Premium.',
        }),
        defineField({
            name: 'title',
            title: 'Título de la Sección',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'viewAllText',
            title: 'Texto del Botón "Ver Todo"',
            type: 'string',
            initialValue: 'Ver Todo el Catálogo',
        }),
        defineField({
            name: 'featuredProducts',
            title: 'Productos Destacados',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }],
            description: 'Selecciona los productos que aparecerán en el home (máximo 4-6 recomendados).',
            validation: (Rule) => Rule.max(8),
        }),
    ],
})
