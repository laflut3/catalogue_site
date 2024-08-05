import { NextResponse } from 'next/server';
import { connectDB } from '@/../Lib/MongoLib/mongodb';
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

export async function POST(request: Request) {
    await connectDB();

    try {
        const { url, type } = await request.json();

        // Validate the input
        if (!url || !type) {
            return NextResponse.json({ message: 'URL and type are required' }, { status: 400 });
        }

        // Create a new link document
        const newLink = new Link({ url, type });
        await newLink.save();

        return NextResponse.json({ message: 'Link created successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    await connectDB();

    try {
        const { id } = await request.json();

        // Validate the input
        if (!id) {
            return NextResponse.json({ message: 'ID is required' }, { status: 400 });
        }

        // Delete the link document
        const deletedLink = await Link.findByIdAndDelete(id);

        if (!deletedLink) {
            return NextResponse.json({ message: 'Link not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Link deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    await connectDB();

    try {
        const { id, url, type } = await request.json();

        // Validate the input
        if (!id || !url || !type) {
            return NextResponse.json({ message: 'ID, URL, and type are required' }, { status: 400 });
        }

        // Update the link document
        const updatedLink = await Link.findByIdAndUpdate(
            id,
            { url, type },
            { new: true }
        );

        if (!updatedLink) {
            return NextResponse.json({ message: 'Link not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Link updated successfully', link: updatedLink }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
