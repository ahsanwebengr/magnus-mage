import Button from "../components/Button";
import InputField from "../components/InputField";
import Welcome from "../components/Welcome";
import { passwordIcon } from "../assets";
import Heading from "../components/Heading";

const ResetPassword = () => {
    return (
        <section className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Welcome Column  */}
                <Welcome />
                {/* Login Form  */}
                <form className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
                    <Heading text={'Forget password'} style={'mb-16'} />
                    <InputField placeholder='New Password' type='password' fieldIcon={passwordIcon} />
                    <InputField placeholder='Confirm Password' type='password' fieldIcon={passwordIcon} />

                    <Button type={'submit'} className={'bg-primary text-white mt-8'} >
                        Reset password
                    </Button>

                </form>
            </div>
        </section>
    );
};

export default ResetPassword;