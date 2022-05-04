import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Footer/>
        </div>
    );
};

export default Home;