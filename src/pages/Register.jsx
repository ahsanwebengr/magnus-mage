import React, { useState } from 'react';
import Welcome from '../components/Welcome';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { emailIcon, passwordIcon, userIcon, globalIcon } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/authSlice';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signUp({ name, email, password, confirmPassword, country }));
      toast.success(`${name} your account Successfully create!`);
      // navigate('/'); 
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.log(error.message);
    }
  };
  return (
    <>
      <section className='container'>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* Welcome Column  */}
          <Welcome />
          {/* Login Form  */}
          <form onSubmit={handleRegister} className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
            <Heading text={'create account'} style={'mb-16'} />
            <InputField placeholder='Name' type='text' fieldIcon={userIcon} value={name} onChange={(e) => setName(e.target.value)} />
            <InputField placeholder='Email' type='email' fieldIcon={emailIcon} value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField placeholder='Password' type='password' fieldIcon={passwordIcon} value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputField placeholder='Confirm Password' type='password' fieldIcon={passwordIcon} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <div className='mb-12 w-full relative'>
              <span>
                <img src={globalIcon} alt="email-icon" className='absolute left-2 top-[52%] translate-y-[-50%] h-5 object-cover' />
              </span>
              <select
                className={`border border-gray p-2 w-full h-10 rounded-lg text-md font-medium focus:outline-primary px-10 text-primary-color`}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value='null'>Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="England">England</option>
                <option value="France">France</option>
                <option value="Australia">Australia</option>
              </select>

            </div>

            <Button type={'submit'} text={'Register'} className={'bg-primary text-white'} />
            <div className="w-full mb-6 mt-2 text-center">
              <span className=" text-primary-color or-line">Or</span>
            </div>
            <p className="font-normal text-md text-primary-color">Have an account yet? <Link to={'/'} className="text-primary-light font-semibold hover:underline">Login</Link> </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;