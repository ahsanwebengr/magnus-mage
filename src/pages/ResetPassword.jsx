import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Welcome from "../components/Welcome";
import { passwordIcon } from "../assets";

const ResetPassword = () => {
    return (
        <section className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Welcome Column  */}
                <Welcome />
                {/* Login Form  */}
                <form className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
                    <h4 className='text-lg lg:text-2xl font-bold mb-16 text-center capitalize'>Forget password</h4>
                    <InputField placeholder='New Password' type='password' fieldIcon={passwordIcon} />
                    <InputField placeholder='Confirm Password' type='password' fieldIcon={passwordIcon} />

                    <Button type={'submit'} text={'Reset password'} className={'bg-primary text-white mt-8'} />

                </form>
            </div>
        </section>
    );
};

export default ResetPassword;