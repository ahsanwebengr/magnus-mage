import React from 'react';
import Welcome from '../components/Welcome';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { warningIcon } from '../assets';
import OTPInput from '../components/OTPInput';

const VerifyOtp = () => {
    const navigate = useNavigate();
    return (
        <section className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Welcome Column  */}
                <Welcome />
                {/* Login Form  */}
                <form className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
                    <h4 className='text-lg lg:text-2xl font-bold mb-6 text-center capitalize'>Forget password</h4>
                    <div className="bg-mega-warn-light flex gap-4 items-center p-4 rounded-xl mb-4">
                        <img src={warningIcon} alt="warning-icon" className='w-7 h-7 rounded-full object-cover' />
                        <p className='text-base text-mega-warn'>We have send you 6 digits verification code to your email. Please kindly check</p>
                    </div>

                    <OTPInput />
                    <Button
                        type={'submit'}
                        text={'Verify'}
                        className={'bg-primary text-white mt-12'}
                        onClick={() => navigate('/reset')} />
                    <Button
                        type={'button'}
                        text={'Back'}
                        className={'bg-white text-primary-color border border-primary-border'}
                        onClick={() => navigate('/forget')} />
                </form>
            </div>
        </section>
    );
};

export default VerifyOtp;