export default {
    name: 'stats',
    title: 'Stats',
    type: 'document',
    fields: [
        {
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'key', title: 'Key', type: 'string' },
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'value', title: 'Value', type: 'number' },
                        { name: 'suffix', title: 'Suffix', type: 'string' },
                    ],
                },
            ],
        },
    ],
}