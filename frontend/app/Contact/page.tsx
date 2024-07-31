"use client";

import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import SectionContact from "@/components/section/Contact/SectionContact";

const Catalogue: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <SectionContact/>
            </main>
            <Footer/>
        </div>
    );
}

export default Catalogue;
