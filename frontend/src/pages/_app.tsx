import React from 'react';
import "../styles/globals.css";
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="App">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
