import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NewSection from '../NewSection/NewSection';
import Products from '../products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <NewSection/>
            <Footer/>
        </div>
    );
};

export default Home;