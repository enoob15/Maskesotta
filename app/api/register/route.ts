import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { isMinnesotaZip } from '@/lib/mn-zips';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, address_line1, city, zip, email } = body;

        // Validate required fields
        if (!name || !address_line1 || !city || !zip || !email) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate Minnesota ZIP code
        if (!isMinnesotaZip(zip)) {
            return NextResponse.json(
                { error: 'ZIP code must be in Minnesota' },
                { status: 400 }
            );
        }

        // Insert into Supabase
        const supabase = await createClient();
        const { data, error } = await supabase
            .from('recipients')
            .insert([
                {
                    name,
                    address_line1,
                    city,
                    zip,
                    email,
                    status: 'waiting',
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to register recipient' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
