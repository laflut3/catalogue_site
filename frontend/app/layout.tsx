"use client";

import React from 'react';
import '@/../src/styles/Globals.css';
import { Provider } from "./provider";
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import { usePathname } from 'next/navigation';

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    const pathname = usePathname();
    const showNavAndFooter = pathname !== '/';

    return (
        <html lang="en">
        <head>
            <link rel="icon" href='/fleo-web-reversed.ico' />
            <title>Fleo-WEB</title>
        </head>
        <body>
        <Provider>
            {showNavAndFooter && <NavBar />}
            {children}
            {showNavAndFooter && <Footer />}
        </Provider>
        </body>
        </html>
    );
}

export default RootLayout;
