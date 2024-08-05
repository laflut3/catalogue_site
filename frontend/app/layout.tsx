"use client";

import React from 'react';
import '@/../src/styles/Globals.css';
import { Provider } from "./provider";
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import { AnimationProvider, useAnimation } from "@/../context/AnimationContext";
import ClientOnlyRedirect from '@/components/utils/RedirectOnRefresh';

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href='/fleo-web-reversed.ico'/>
            <title>Fleo-WEB</title>
        </head>
        <body>
        <Provider>
            <AnimationProvider>
                <ContentWrapper>
                    <ClientOnlyRedirect />  {/* Ajout du composant de redirection */}
                    {children}
                </ContentWrapper>
            </AnimationProvider>
        </Provider>
        </body>
        </html>
    );
};

const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAnimationComplete } = useAnimation();

    return (
        <>
            {!isAnimationComplete && (
                <style jsx global>{`
                    header, footer {
                        display: none;
                    }
                `}</style>
            )}
            {isAnimationComplete && <NavBar />}
            {children}
            {isAnimationComplete && <Footer />}
        </>
    );
};

export default RootLayout;
