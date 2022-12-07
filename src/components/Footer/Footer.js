import React from 'react';
import facebook from '../../icon/facebook.png';
import github from '../../icon/github.png';
import google from '../../icon/google.png';

const Footer = () => {
    return (
        // <div className='bg-light'>
        //     <h2>Contact us</h2>
        //     <div>
        //         <a href="https://www.google.com/"><img width={30} className='m-2' src={google} alt="" /></a>
        //         <a href="https://www.facebook.com/"><img width={30} className='m-2' src={facebook} alt="" /></a>
        //         <a href="https://github.com/"><img width={30} className='m-2' src={github} alt="" /></a>
        //     </div>
        // </div>
        <div class=" mt-4">

            <footer class="text-center text-white"  style={{background: '#f1f1f1'}}>
                <div class="container pt-4">
                    <section class="mb-4">
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><a href="https://www.facebook.com/profile.php?id=100042861825143/"><img width={20} src={facebook} alt="" /></a></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><a href="https://www.google.com/"><img width={20} src={google} alt="" /></a></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><a href="https://github.com/Junayed5/"><img width={20} src={github} alt="" /></a></a>

                    </section>
                </div>

                <div class="text-center text-dark p-3"  style={{background: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2022 Copyright
                </div>
            </footer>

        </div>
    );
};

export default Footer;