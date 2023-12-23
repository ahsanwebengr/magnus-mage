import InputField from "../components/InputField";
import Welcome from "../components/Welcome";
import { emailIcon } from '../assets';
import { passwordIcon } from '../assets';
import { Link } from "react-router-dom";
import Button from "../components/Button";


const Login = () => {
  const handleChange = () => {
    console.log('Login');
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <section className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Welcome Column  */}
        <Welcome />
        {/* Login Form  */}
        <form className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
          <h4 className='text-lg lg:text-2xl font-bold mb-16 text-center capitalize'>Welcome Back</h4>
          <InputField placeholder='Email' type='email' onChange={handleChange} fieldIcon={emailIcon} />
          <InputField placeholder='Password' type='password' onChange={handleChange} fieldIcon={passwordIcon} />

          <div className="text-end w-full mb-8">
            <Link to={'/forget'} className="text-primary-light text-md font-normal hover:underline">Forgot password?</Link>
          </div>
          <Button type={'submit'} text={'Login'} onClick={handleLogin} className={'bg-primary text-white'} />
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