// app/layout.tsx
import React from 'react';
import '@/../src/styles/Globals.css';
import {Provider} from "./provider";

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
            {children}
        </Provider>
        </body>
        </html>
    );
}

export default RootLayout;
