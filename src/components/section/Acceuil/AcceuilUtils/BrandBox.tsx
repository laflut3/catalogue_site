"use client";

import React from 'react';
import Image from "next/image";

interface BrandBoxProps {
    imageSrc: any;
    title: string;
    prix: string;
    isVisible: boolean;
}

const BrandBox: React.FC<BrandBoxProps> = ({ imageSrc, title, prix, isVisible }) => {
    return (
        <div className={`bg-white rounded-lg shadow-md p-6 text-center transition-all transform w-full max-w-xs mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} duration-500 ease-in-out`}>
            <Image src={imageSrc} alt={title} className="w-full h-auto rounded-lg mb-4 z-10" />
            <h3 className="text-2xl text-blue-500 mb-4">{title}</h3>
            <div className="flex items-center justify-between">
                <p>{prix}</p>
            </div>
        </div>
    );
};

export default BrandBox;
