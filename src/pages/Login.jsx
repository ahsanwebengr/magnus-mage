import React from "react";
import Welcome from "../components/Welcome";
import InputField from "../components/InputField";
import { emailIcon, passwordIcon } from '../assets';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../provider/features/auth/auth.slice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const moveRouter = (response) => {
    if (response.message === 'Success') {
      navigate('/dashboard');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ payload: formData, successCallBack: moveRouter }));
    
  };

  return (
    <section className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Welcome Column  */}
        <Welcome />

        {/* Login Form  */}
        <form onSubmit={handleLogin} className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
          <Heading text={'Welcome Back'} style={'mb-16'} />
          <InputField
            placeholder='Email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            fieldIcon={emailIcon}
            name='email'
          />
          <InputField
            placeholder='Password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            fieldIcon={passwordIcon}
            name='password'
          />

          <div className="text-end w-full mb-8">
            <Link to={'/forget'} className="text-primary-light text-md font-normal hover:underline">Forgot password?</Link>
          </div>
          <Button type={'submit'} text={'Login'} className={'bg-primary text-white'} />
          <div className="w-full mb-6 mt-2 text-center">
            <span className=" text-primary-color or-line">Or</span>
          </div>
          <p className="font-normal text-md text-primary-color">Have no account yet? <Link to={'/register'} className="text-primary-light font-semibold hover:underline">Register</Link> </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
