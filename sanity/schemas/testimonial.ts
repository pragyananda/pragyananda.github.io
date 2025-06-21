export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule: any) => Rule.min(1).max(5),
        },
    ],
}