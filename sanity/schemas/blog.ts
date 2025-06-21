export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'readTime',
            title: 'Read Time',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
        },
        {
            name: 'views',
            title: 'Views',
            type: 'string',
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}