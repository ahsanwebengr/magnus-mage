import React, { useState } from 'react';
import Welcome from '../components/Welcome';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { warningIcon } from '../assets';
import OTPInput from '../components/OTPInput';
import Heading from '../components/Heading';
import { useDispatch } from 'react-redux';
import { verifyOTP } from '../provider/features/auth/auth.slice';

const VerifyOtp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOTPChange = (otpValue) => {
        // Do something with the OTP value, for example, update state
        console.log('Received OTP:', otpValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: "iamahsan512@gmail.com",
            code: otpValue
        };

        dispatch(verifyOTP({ payload, successCallBack: () => navigate('/verify-otp') }));

    };

    return (
        <section className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Welcome Column  */}
                <Welcome />

                {/* Login Form  */}
                <form onSubmit={handleSubmit} className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
                    <Heading text={'Forget password'} style={'mb-6'} />
                    <div className="bg-mega-warn-light flex gap-4 items-center p-4 rounded-xl mb-4">
                        <img src={warningIcon} alt="warning-icon" className='w-7 h-7 rounded-full object-cover' />
                        <p className='text-base text-mega-warn'>We have send you 6 digits verification code to your email. Please kindly check</p>
                    </div>
                    {/* OTP Input Fields  */}
                    <OTPInput onChange={handleOTPChange} />
                    <div className="text-end w-full">
                        <p className="text-primary capitalize text-base font-bold">resend Code</p>
                    </div>

                    <Button
                        type={'submit'}
                        className={'bg-primary text-white mt-12'}>
                        Verify
                    </Button>

                    <Button
                        type={'button'}
                        className={'bg-white text-primary-color border border-primary-border'}
                        onClick={() => navigate('/forget')} >
                        Back
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default VerifyOtp;