import React, { useState } from 'react';
import Welcome from '../components/Welcome';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { emailIcon } from '../assets';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../provider/features/auth/auth.slice';
import Spinner from '../components/Spinner';

const Forget = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth?.forgotPassword?.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({ payload: email, successCallBack: () => navigate('/verify-otp') }));
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
          <InputField
            placeholder='Email'
            type='email'
            fieldIcon={emailIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Button
            type={'submit'}
            className={'bg-primary text-white mt-12'}
          >
            {isLoading ? <Spinner /> : 'Send'}
          </Button>

          <Button
            type={'button'}
            className={'bg-white text-primary-color border border-primary-border'}
            onClick={() => navigate('/')} >
            Back
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Forget;