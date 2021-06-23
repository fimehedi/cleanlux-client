import React from 'react';
import Cover from '../Cover/Cover';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <Feature />
            <Services />
            <Cover />
            <Testimonial />
            <Footer />
        </>
    );
};

export default Home;