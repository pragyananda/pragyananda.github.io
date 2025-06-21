export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string', // Store icon name (e.g., "Code")
        },
    ],
}