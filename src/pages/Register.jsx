import React, { useState } from 'react';
import Welcome from '../components/Welcome';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { emailIcon, passwordIcon, userIcon, globalIcon } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signUp } from '../provider/features/auth/auth.slice';
import Spinner from '../components/Spinner';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth?.signUp?.isLoading);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const payload = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
      confirmPassword: data?.confirmPassword
    };
    dispatch(signUp({ payload, successCallBack: () => navigate('/') }));
  };

  return (
    <>
      <section className='container'>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* Welcome Column  */}
          <Welcome />

          {/* Login Form  */}
          <form onSubmit={handleSubmit(onSubmit)} className="h-full mx-auto flex items-center justify-center flex-col gap-4 w-full max-w-96 px-3 lg:p-0">
            <Heading text={'create account'} style={'mb-16'} />
            <InputField
              placeholder='Name'
              type='text'
              icon={userIcon}
              control={control}
              errors={errors}
              register={register}
              name='name'
            />
            <InputField
              placeholder='Email'
              type='email'
              icon={emailIcon}
              control={control}
              errors={errors}
              register={register}
              name='email'
            />
            <InputField
              placeholder='Password'
              type='password'
              icon={passwordIcon}
              control={control}
              errors={errors}
              register={register}
              name='password'
            />
            <InputField
              placeholder='Confirm Password'
              type='password'
              icon={passwordIcon}
              control={control}
              errors={errors}
              register={register}
              name='confirmPassword'
            />
            <div className='mb-12 w-full relative'>
              <span>
                <img src={globalIcon} alt="email-icon" className='absolute left-2 top-[52%] translate-y-[-50%] h-5 object-cover' />
              </span>
              <select
                className={`border border-gray p-2 w-full h-10 rounded-lg 
                text-md font-medium focus:outline-primary px-10 text-primary-color`}
                name='country'
              >
                <option value=''>Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="England">England</option>
                <option value="France">France</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            <Button type={'submit'}
              className={'bg-primary text-white'} >
              {isLoading ? <Spinner /> : 'Register'}
            </Button>
            <div className="w-full mb-6 mt-2 text-center">
              <span className=" text-primary-color or-line">Or</span>
            </div>
            <p
              className="font-normal text-md text-primary-color">
              Have an account yet? 
              <Link to={'/'} className="text-primary-light font-semibold hover:underline">
                Login</Link> </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
