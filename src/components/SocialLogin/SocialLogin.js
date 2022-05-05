import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../icon/google.png';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className='mt-3'>
            <div className='d-flex align-items-center'>
                <hr className='w-50' />
                <div className='p-2 mt-3'><p>OR</p></div>
                <hr className='w-50' />
            </div>
            <div className='text-center'>
                <button
                    className='btn btn-light w-75'
                    onClick={() => signInWithGoogle()}
                >
                    <img style={{ height: '30px' }} src={google} alt="" />
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;