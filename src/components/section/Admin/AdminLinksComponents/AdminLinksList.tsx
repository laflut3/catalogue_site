"use client";

import React from 'react';
import AdminLinksBox from '@/components/section/Admin/AdminLinksComponents/AdminLinksUtils/AdminLinksBox';

interface ILink {
    _id: string;
    url: string;
    type: string;
}

const AdminLinksList: React.FC<{ links: ILink[], onDelete: () => void, onModify: (updatedLink: ILink) => void }> = ({ links, onDelete, onModify }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mt-4">
            {links.map((link) => (
                <AdminLinksBox key={link._id} link={link} onDelete={onDelete} onModify={onModify} />
            ))}
        </div>
    );
};

export default AdminLinksList;
