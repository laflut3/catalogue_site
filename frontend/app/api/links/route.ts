import { NextResponse } from 'next/server';
import {connectDB} from '@/../Lib/MongoLib/mongodb';
import Link from '@/../Lib/LinksLib/models/Links';

export async function GET() {
    await connectDB();

    try {
        const links = await Link.find();
        return NextResponse.json(links);
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}