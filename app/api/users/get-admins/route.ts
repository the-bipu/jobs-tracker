import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb.js';
import { User } from '@/models/user';

export async function GET(request: NextRequest) {
    try {
        await connectMongo();

        const admins = await User.find({ type: 'admin' }).select('-password');

        if (!admins || admins.length === 0) {
            return NextResponse.json({ message: 'No admin users found' }, { status: 404 });
        }

        return NextResponse.json(admins, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}