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
        console.error('Error fetching comments:', error);
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
        console.error('Error creating comment:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    await connectDatabase();

    try {
        const { userId, isAdmin, commentaireId } = await request.json();

        console.log('Received DELETE request with data:', { userId, isAdmin, commentaireId });

        if (!userId || !commentaireId) {
            console.error('Invalid request data:', { userId, commentaireId });
            return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
        }

        const commentaire = await Commentaire.findById(commentaireId);
        if (!commentaire) {
            console.error('Commentaire not found:', { commentaireId });
            return NextResponse.json({ message: 'Commentaire not found' }, { status: 404 });
        }

        if (commentaire.User._id !== userId && !isAdmin) {
            console.error('Unauthorized delete attempt by user:', { userId, commentaireId });
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        await Commentaire.findByIdAndDelete(commentaireId);
        console.log('Commentaire deleted successfully:', { commentaireId });

        return NextResponse.json({ message: 'Commentaire deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting comment:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    await connectDatabase();

    try {
        const { userId, commentaireId, newMessage, newObjet, newNote } = await request.json();

        console.log('Received PATCH request with data:', { userId, commentaireId, newMessage, newObjet, newNote });

        if (!userId || !commentaireId || !newMessage || !newObjet || !newNote) {
            console.error('Invalid request data:', { userId, commentaireId, newMessage, newObjet, newNote });
            return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
        }

        const commentaire = await Commentaire.findById(commentaireId);
        if (!commentaire) {
            console.error('Commentaire not found:', { commentaireId });
            return NextResponse.json({ message: 'Commentaire not found' }, { status: 404 });
        }

        if (commentaire.User._id !== userId) {
            console.error('Unauthorized edit attempt by user:', { userId, commentaireId });
            return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        }

        commentaire.message = newMessage;
        commentaire.objet = newObjet;
        commentaire.note = newNote;
        await commentaire.save();

        console.log('Commentaire updated successfully:', { commentaireId });

        return NextResponse.json({ message: 'Commentaire updated successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error updating comment:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
