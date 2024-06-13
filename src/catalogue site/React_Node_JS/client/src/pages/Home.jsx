import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import FirstSectionComponent from '../components/home/FirstSectionComponent';
import SecondSectionComponent from '../components/home/SecondSectionComponent';

const Home = () => {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        axios.get('/api')
            .then((response) => {
                setServerData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <NavbarComponent />
            <FirstSectionComponent />
            <SecondSectionComponent serverData={serverData} />
            <FooterComponent />
        </>
    );
};

export default Home;
