import InputField from "../components/InputField";
import Welcome from "../components/Welcome";
import { emailIcon } from '../assets';
import { passwordIcon } from '../assets';
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/authSlice";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));

    console.log(email, password);
  };
  return (
    <section className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Welcome Column  */}
        <Welcome />
        {/* Login Form  */}
        <form onSubmit={handleLogin} className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
          <Heading text={'Welcome Back'} style={'mb-16'} />
          <InputField placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} fieldIcon={emailIcon} />
          <InputField placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} fieldIcon={passwordIcon} />

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