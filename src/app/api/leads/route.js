import { NextResponse } from 'next/server'

// In-memory store (in production, use a real DB)
const leads = []

export async function POST(req) {
  try {
    const body = await req.json()

    // Basic validation
    if (!body.email || !body.firstName || !body.company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const lead = {
      id:        Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    }

    leads.push(lead)
    console.log('New lead captured:', lead.email, '— Total leads:', leads.length)

    return NextResponse.json({ success: true, message: 'Lead captured successfully', id: lead.id }, { status: 201 })
  } catch (err) {
    console.error('Lead capture error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  // Returns all leads (protect this in production!)
  return NextResponse.json({ leads, total: leads.length })
}
