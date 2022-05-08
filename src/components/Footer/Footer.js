import React from 'react';
import facebook from '../../icon/facebook.png';
import github from '../../icon/github.png';
import google from '../../icon/google.png';

const Footer = () => {
    return (
        <div className='bg-light'>
            <h2>Contact us</h2>
            <div>
                <a href="https://www.google.com/"><img width={30} className='m-2' src={google} alt="" /></a>
                <a href="https://www.facebook.com/"><img width={30} className='m-2' src={facebook} alt="" /></a>
                <a href="https://github.com/"><img width={30} className='m-2' src={github} alt="" /></a>
            </div>
        </div>
    );
};

export default Footer;