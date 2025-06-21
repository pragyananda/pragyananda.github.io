export default {
    name: 'skillCategory',
    title: 'Skill Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
}