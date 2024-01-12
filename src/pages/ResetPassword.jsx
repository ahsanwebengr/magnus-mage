import Button from "../components/Button";
import InputField from "../components/InputField";
import Welcome from "../components/Welcome";
import { passwordIcon } from "../assets";
import Heading from "../components/Heading";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPassword } from "../provider/features/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const ResetPassword = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth?.resetPassword?.isLoading);


    const validationSchema = yup.object().shape({
        password: yup
            .string()
            .required("Password is required")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            )
            .min(8, 'Password must be at least 8 characters long'),
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
            password: data?.password,
            confirmPassword: data?.confirmPassword,
        };
        dispatch(resetPassword({ payload, successCallBack: () => navigate('/') }));
    };

    return (
        <section className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Welcome Column  */}
                <Welcome />

                {/* Login Form  */}
                <form onSubmit={handleSubmit(onSubmit)} className="h-full mx-auto flex items-center justify-center flex-col w-full max-w-96 px-3 lg:p-0">
                    <Heading text={'Forget password'} style={'mb-16'} />

                    <InputField
                        placeholder='New Password'
                        type='password'
                        icon={passwordIcon}
                        name='password'
                        control={control}
                        errors={errors}
                        register={register}
                    />
                    <InputField
                        placeholder='Confirm Password'
                        type='password'
                        icon={passwordIcon}
                        name='confirmPassword'
                        control={control}
                        errors={errors}
                        register={register}
                    />

                    <Button type={'submit'} className={'bg-primary text-white mt-8'} >
                        {isLoading ? <Spinner /> : 'Reset Password'}
                    </Button>

                </form>
            </div>
        </section>
    );
};

export default ResetPassword;