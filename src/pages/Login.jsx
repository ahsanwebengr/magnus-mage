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

  const handleLogin = () => {
    console.log('login');
  };
  return (
    <section className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Welcome Column  */}
        <Welcome />
        {/* Login Form  */}
        <div className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3">
          <h4 className='text-lg lg:text-2xl font-bold mb-16 text-center'>Welcome Back</h4>
          <InputField placeholder='Email' type='email' onChange={handleChange} styling={''} fieldIcon={emailIcon} />
          <InputField placeholder='Password' type='password' onChange={handleChange} styling={''} fieldIcon={passwordIcon} />

          <div className="text-end w-full mb-8">
            <Link to={'/forget'} className="text-primary-light text-md font-normal">Forgot password?</Link>
          </div>
          <Button type={'button'} text={'Login'} onClick={handleLogin} className={'bg-primary text-white'} />
        </div>
      </div>
    </section>
  );
};

export default Login;