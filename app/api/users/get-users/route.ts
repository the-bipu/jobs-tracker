import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb.js';
import { User } from '@/models/user';

export async function GET(request: NextRequest) {
    try {
        await connectMongo();

        const users = await User.find({ type: 'user' }).select('-password');

        if (!users || users.length === 0) {
            return NextResponse.json({ message: 'No regular users found' }, { status: 404 });
        }

        return NextResponse.json(users, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}