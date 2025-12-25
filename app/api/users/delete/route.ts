import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb';
import { User } from '@/models/user';

export async function DELETE(request: NextRequest) {
    try {
        await connectMongo();

        const url = new URL(request.url);
        const email = url.searchParams.get('email');

        if (!email) {
            return NextResponse.json({ message: 'Email parameter is required' }, { status: 400 });
        }

        const deletedUser = await User.findOneAndDelete({ email });

        if (!deletedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted successfully', user: deletedUser }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}