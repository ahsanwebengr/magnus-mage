import React from "react";
import Welcome from "../components/Welcome";
import InputField from "../components/InputField";
import { emailIcon, passwordIcon } from '../assets';
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "../components/Button";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../provider/features/auth/auth.slice";
import Spinner from "../components/Spinner";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth?.login?.isLoading);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
    password: yup
      .string()
      .required("Password is required")
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
      email: data.email,
      password: data.password,
    };
    dispatch(login({ payload, successCallBack: moveRouter }));
  };


  const moveRouter = (response) => {
    if (response.message === 'Success') {
      navigate('/dashboard');
    }
  };

  return (
    <section className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Welcome Column  */}
        <Welcome />

        {/* Login Form  */}
        <form onSubmit={handleSubmit(onSubmit)} className="h-full mx-auto flex items-center justify-center  flex-col w-full max-w-96 px-3 lg:p-0">
          <Heading text={'Welcome Back'} style={'mb-16'} />
          <InputField
            placeholder='Email'
            type='text'
            icon={emailIcon}
            name='email'
            control={control}
            errors={errors}
            register={register}
          />

          <InputField
            placeholder='Password'
            type='password'
            icon={passwordIcon}
            control={control}
            register={register}
            name='password'
            errors={errors}
          />

          <div className="text-end w-full mb-8">
            <Link to={'/forget'}
              className="text-primary-light text-md font-normal hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button
            type={'submit'}
            className={'bg-primary text-white'} >
            {isLoading ? <Spinner /> : 'Login'}
          </Button>

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
