import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { _type, _id, ...data } = body
    console.log('Webhook received:', { _type, _id, data })

    if (!_type || !_id) {
        return NextResponse.json({ message: 'Missing _type or _id' }, { status: 400 })
    }

    try {
        const client = new MongoClient(process.env.MONGODB_URI!)
        await client.connect()
        const db = client.db('portfolio')
        const collection = db.collection(_type)

        await collection.updateOne(
            { _id },
            { $set: { ...data, _id } },
            { upsert: true }
        )

        await client.close()
        return NextResponse.json({ message: 'Synced successfully' })
    } catch (error) {
        console.error('Sync error:', error)
        return NextResponse.json({ message: 'Error syncing data' }, { status: 500 })
    }
}