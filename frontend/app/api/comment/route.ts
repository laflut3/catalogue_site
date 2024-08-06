import { NextResponse } from 'next/server';
import { connectDB } from '@/../Lib/MongoLib/mongodb';
import Commentaire from '@/../Lib/Testimonial/models/Testimonial';

// Connect to the database
async function connectDatabase() {
    await connectDB();
}

export async function GET() {
    await connectDatabase();

    try {
        const commentaires = await Commentaire.find();
        return NextResponse.json(commentaires);
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    await connectDatabase();

    try {
        const { User, objet, message, note } = await request.json();

        // Validate the input
        if (!User || !objet || !message || !note) {
            return NextResponse.json({ message: 'Tous les champs du formulaire doivent être complétés' }, { status: 400 });
        }

        // Create a new commentaire document
        const newCommentaire = new Commentaire({ User, objet, message, note, dateEnvoie: new Date() });
        await newCommentaire.save();

        return NextResponse.json({ message: 'Commentaire créé avec succès' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
