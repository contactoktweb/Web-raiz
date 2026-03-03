import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Artículos del Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            description: 'El título del artículo.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'La URL amigable del artículo.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Extracto',
            type: 'text',
            rows: 3,
            description: 'Breve resumen que aparece en los listados.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'string',
            description: 'Ej: Hormonal, Adulto Mayor, Sistema Nervioso.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'readTime',
            title: 'Tiempo de Lectura',
            type: 'string',
            description: 'Ej: 8 min de lectura.',
            initialValue: '5 min de lectura',
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
                    description: 'Importante para SEO y accesibilidad.',
                }
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Contenido',
            type: 'text',
            description: 'El cuerpo del artículo. Puedes usar resaltados con **texto** y títulos con ##.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'relatedProducts',
            title: 'Productos Relacionados',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Lista de nombres de productos relacionados para mostrar al final del artículo.',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Fecha de Publicación',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'category',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author ? `Categoría: ${author}` : '' }
        },
    },
})
