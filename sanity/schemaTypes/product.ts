import { defineField, defineType } from 'sanity'

export const product = defineType({
    name: 'product',
    title: 'Producto',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre del Producto',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descripción Corta',
            type: 'text',
            rows: 2,
            description: 'Aparece en las tarjetas del catálogo.',
        }),
        defineField({
            name: 'longDescription',
            title: 'Descripción Detallada',
            type: 'text',
            rows: 5,
            description: 'Aparece en la página de detalle del producto.',
        }),
        defineField({
            name: 'price',
            title: 'Precio (COP)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'categories',
            title: 'Categorías',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'badge',
            title: 'Etiqueta (Badge)',
            type: 'string',
            description: 'Ej: Mas vendido, Popular, Nuevo, Recomendado.',
        }),
        defineField({
            name: 'rating',
            title: 'Calificación',
            type: 'number',
            initialValue: 5,
            validation: (Rule) => Rule.min(0).max(5),
        }),
        defineField({
            name: 'reviews',
            title: 'Número de Reseñas',
            type: 'number',
            initialValue: 0,
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagen Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'gallery',
            title: 'Galería de Imágenes',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Texto Alternativo',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'benefits',
            title: 'Beneficios',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'ingredients',
            title: 'Ingredientes',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'howToUse',
            title: 'Modo de Uso',
            type: 'text',
            rows: 3,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'mainImage',
            price: 'price',
        },
        prepare(selection) {
            const { title, media, price } = selection
            return {
                title: title,
                subtitle: price ? `$${new Intl.NumberFormat('es-CO').format(price)}` : 'Sin precio',
                media: media,
            }
        },
    },
})
