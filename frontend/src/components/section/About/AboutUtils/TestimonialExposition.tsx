"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { FaStar } from 'react-icons/fa';

interface Testimonial {
    _id: string;
    User: {
        _id: string;
        name: string;
        username: string;
        image: string;
    };
    objet: string;
    message: string;
    note: number;
}

const Modal: React.FC<{
    testimonial: Testimonial | null;
    onClose: () => void;
    onSave: (updatedTestimonial: Testimonial) => void;
}> = ({ testimonial, onClose, onSave }) => {
    const [objet, setObjet] = useState(testimonial?.objet || '');
    const [message, setMessage] = useState(testimonial?.message || '');
    const [note, setNote] = useState(testimonial?.note.toString() || '');

    const handleSave = () => {
        if (testimonial) {
            onSave({ ...testimonial, objet, message, note: Number(note) });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Modifier le témoignage</h2>
                <label className="block mb-4">
                    <span className="text-gray-700">Sujet</span>
                    <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={objet}
                        onChange={(e) => setObjet(e.target.value)}
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Description</span>
                    <textarea
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <label className="block mb-6">
                    <span className="text-gray-700">Note</span>
                    <input
                        type="number"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        min="1"
                        max="5"
                    />
                </label>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const { data: session, status } = useSession();
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('/api/comment');
                setTestimonials(response.data);
            } catch (error) {
                console.error('Error loading testimonials:', error);
                setError('Failed to load testimonials.');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const userId = session?.user?.id;
            const isAdmin = session?.user?.isAdmin;
            console.log('Deleting testimonial with id:', id, 'userId:', userId, 'isAdmin:', isAdmin);

            const response = await axios.delete('/api/comment', {
                data: { commentaireId: id, userId: userId, isAdmin: isAdmin }
            });

            if (response.status === 200) {
                setTestimonials(testimonials.filter(testimonial => testimonial._id !== id));
            } else {
                throw new Error(response.data.message || 'Failed to delete testimonial.');
            }
        } catch (error) {
            console.error('Error deleting testimonial:', error);
            setError('Failed to delete testimonial.');
        }
    };

    const handleSave = async (updatedTestimonial: Testimonial) => {
        try {
            console.log('Saving updated testimonial:', updatedTestimonial);
            await axios.patch('/api/comment', {
                commentaireId: updatedTestimonial._id,
                userId: session?.user?.id,
                newMessage: updatedTestimonial.message,
                newObjet: updatedTestimonial.objet,
                newNote: updatedTestimonial.note
            });
            setTestimonials(testimonials.map(testimonial =>
                testimonial._id === updatedTestimonial._id ? updatedTestimonial : testimonial
            ));
            setEditingTestimonial(null);
        } catch (error) {
            console.error('Error editing testimonial:', error);
            setError('Failed to edit testimonial.');
        }
    };

    if (loading) {
        return <div className="text-center mt-12">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-12 text-red-500">{error}</div>;
    }

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-blue-500 p-6 rounded-lg shadow-md flex flex-col items-center text-center text-white"
                        >
                            <Image
                                src={testimonial.User.image}
                                alt={testimonial.User.name}
                                width={96}
                                height={96}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-xl font-bold">{testimonial.User.name}</h3>
                            <p className="text-sm">@{testimonial.User.username}</p>
                            <p className="mt-2">{testimonial.objet}</p>
                            <p className="mt-2">{testimonial.message}</p>
                            <div className="flex items-center justify-center mt-2">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar key={i} className={i < testimonial.note ? 'text-yellow-400' : 'text-gray-300'} />
                                ))}
                            </div>
                            {status === "authenticated" && (
                                <div className="flex space-x-2 mt-4">
                                    {session?.user?.id === testimonial.User._id && (
                                        <button
                                            onClick={() => setEditingTestimonial(testimonial)}
                                            className="text-blue-500 bg-white border border-blue-500 rounded-full p-2 hover:bg-blue-100"
                                        >
                                            ✏️
                                        </button>
                                    )}
                                    {(session?.user?.id === testimonial.User._id || session?.user?.isAdmin) && (
                                        <button
                                            onClick={() => handleDelete(testimonial._id)}
                                            className="text-red-500 bg-white border border-red-500 rounded-full p-2 hover:bg-red-100"
                                        >
                                            🗑️
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {editingTestimonial && (
                    <Modal
                        testimonial={editingTestimonial}
                        onClose={() => setEditingTestimonial(null)}
                        onSave={handleSave}
                    />
                )}
            </div>
        </section>
    );
};

export default Testimonials;
