import React from 'react';
import { errorImg } from '../assets';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='container px-2 min-h-screen grid place-items-center'>
            <div className="w-72">
                <img src={errorImg} alt="error-img" className='w-full h-auto object-cover' />
                <Button text={'Back to Login'} className={'bg-primary text-white'} onClick={() => navigate('/')} />
            </div>
        </div>
    );
};

export default NotFound;