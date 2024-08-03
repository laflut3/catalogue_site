"use client"

import React from 'react';

interface ILink {
    _id: string;
    url: string;
    type: string;
}

const CatalogueCard: React.FC<{ link: ILink }> = ({ link }) => {
    return (
        <div className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <div>
                <p>Type : {link.type}</p>
            </div>
            <a href={link.url} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                visiter <i className="fas fa-external-link-alt"></i>
            </a>
        </div>
    );
};

export default CatalogueCard;
