import React from 'react';
import Image from "next/image";

interface BrandBoxProps {
    imageSrc: string;
    title: string;
    prix: string;
}

const BrandBox : React.FC<BrandBoxProps> = ({ imageSrc, title, prix }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:-translate-y-2 w-full max-w-xs mx-auto">
            <Image src={imageSrc} alt={title} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl text-blue-500 mb-4">{title}</h3>
            <div className="flex items-center justify-between">
                <p>{prix}</p>
            </div>
        </div>
    );
};

export default BrandBox;