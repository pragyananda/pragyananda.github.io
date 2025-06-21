export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'period',
            title: 'Period',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'achievements',
            title: 'Achievements',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
}