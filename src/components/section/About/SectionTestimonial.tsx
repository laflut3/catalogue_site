"use client";

import React from 'react';
import TestimonialForm from "@/components/section/About/AboutUtils/TestimonialForm";
import TestimonialExposition from "@/components/section/About/AboutUtils/TestimonialExposition";

const Testimonial: React.FC = () => {
    return (
        <section className="min-h-screen justify-center text-center items-center">
            <h1 className="text-2xl font-bold mb-4">Commentaire</h1>
            <TestimonialExposition/>
            <TestimonialForm/>
        </section>
    );
};

export default Testimonial;
