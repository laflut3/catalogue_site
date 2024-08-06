"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Testimonial {
    User: {
        name: string;
        image: string;
    };
    objet: string;
    message: string;
    note: string;
}

const Testimonials: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('/api/comment');
                setTestimonials(response.data);
            } catch (error) {
                setError('Failed to load testimonials.');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-blue-500 p-6 rounded-lg shadow-md text-white flex flex-col items-center"
                        >
                            <Image
                                src={testimonial.User.image}
                                alt={testimonial.User.name}
                                width={96}
                                height={96}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-lg font-bold">{testimonial.User.name}</h3>
                            <p className="text-sm">{testimonial.objet}</p>
                            <p className="mt-2">{testimonial.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
