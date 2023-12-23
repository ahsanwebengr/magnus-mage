import React from 'react';
import Welcome from '../components/Welcome';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { emailIcon } from '../assets';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';

const Forget = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify-otp');
  };

  return (
    <section className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Welcome Column  */}
        <Welcome />
        {/* Login Form  */}
        <form onSubmit={handleSubmit} className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
          <Heading text={'Forget password'} style={'mb-6'} />
          <p className='text-center text-base text-primary-color mb-8'>Seems you forget your password, we’ll send a recovery code to your email</p>
          <InputField placeholder='Email' type='email' fieldIcon={emailIcon} />
          <Button
            type={'submit'}
            text={'Send'}
            className={'bg-primary text-white mt-12'}
          />
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