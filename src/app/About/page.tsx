"use client"

import Testimonial from '@/components/section/About/SectionTestimonial';
import TitleComponent from '@/components/utils/TitleComponent';
import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <TitleComponent title="About" />
            <Testimonial />
        </div>
    );
};

export default About;
