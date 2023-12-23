import React from 'react';
import Welcome from '../components/Welcome';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { emailIcon } from '../assets';
import { useNavigate } from 'react-router-dom';

const Forget = () => {
  const navigate = useNavigate();

  return (
    <section className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Welcome Column  */}
        <Welcome />
        {/* Login Form  */}
        <form className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
          <h4 className='text-lg lg:text-2xl font-bold mb-6 text-center capitalize'>Forget password</h4>
          <p className='text-center text-base text-primary-color mb-8'>Seems you forget your password, we’ll send a recovery code to your email</p>
          <InputField placeholder='Email' type='email' fieldIcon={emailIcon} />
          <Button
            type={'submit'}
            text={'Send'}
            className={'bg-primary text-white mt-12'}
            onClick={() => navigate('/verify-otp')} />
          <Button
            type={'button'}
            text={'Back'}
            className={'bg-white text-primary-color border border-primary-border'}
            onClick={() => navigate('/')} />
        </form>
      </div>
    </section>
  );
};

export default Forget;