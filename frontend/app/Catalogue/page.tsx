"use client"

import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import SectionCatalogue from "@/components/section/Catalogue/SectionCatalogue";

const Page: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <SectionCatalogue/>
            </main>
            <Footer/>
        </div>
    );
}

export default Page;
