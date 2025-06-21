export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
        },
        {
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                        { name: 'icon', title: 'Icon', type: 'string' }, // Store icon name (e.g., "Code")
                    ],
                },
            ],
        },
        {
            name: 'journey',
            title: 'Journey',
            type: 'array',
            of: [{ type: 'block' }], // Portable text for rich formatting
        },
    ],
}