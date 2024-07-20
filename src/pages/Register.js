import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRetypePasswordVisible, setIsRetypePasswordVisible] = useState(false);

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const toggleRetypePassword = () => {
        setIsRetypePasswordVisible(!isRetypePasswordVisible);
    }

    const onSubmit = data => {
        console.log(data);
        // Handle form submission
    }

    // useEffect(() => {
    //     axios.get('https://localhost:44315/api/User')
    //         .then(res => {
    //             const users = res;
    //             console.log(users);
    //         })
    // }, []);

    const password = watch('password');

    return (
        <div className="bg-[url('../images/login-bg.jpg')] h-screen bg-cover">
            <div className="bg-black/70 h-full grid place-items-center">
                <div className="bg-white p-6 rounded-md w-[410px]">
                    <h1 className="text-2xl text-center">CHAT <span className="text-[#34b17d]">ROOM</span></h1>
                    <form className="pt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-4 mb-2 w-full">
                            <div className="w-1/2">
                                <label htmlFor="firstName" className="text-sm">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 px-3 transition-all duration-300 ease-out text-[15px]"
                                    autoComplete="off"
                                    {...register('firstName', { required: 'First Name is required' })}
                                />
                                <p className="text-[10px] leading-none text-red-500 h-2">{errors.firstName && `${errors.firstName.message}`}</p>
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="lastName" className="text-sm">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 px-3 transition-all duration-300 ease-out text-[15px]"
                                    autoComplete="off"
                                    {...register('lastName', { required: 'Last Name is required' })}
                                />
                                <p className="text-[10px] leading-none text-red-500 h-2">{errors.lastName && `${errors.lastName.message}`}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mb-2">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 px-3 transition-all duration-300 ease-out text-[15px]"
                                autoComplete="off"
                                {...register('email', { required: 'Email is required' })}
                            />
                            <p className="text-[10px] leading-none text-red-500 h-2">{errors.email && `${errors.email.message}`}</p>
                        </div>
                        <div className="flex flex-col gap-1 mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <div className="relative">
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    id="password"
                                    className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 pl-3 pr-10 transition-all duration-300 ease-out w-full text-[15px]"
                                    autoComplete="off"
                                    {...register('password', { required: 'Password is required' })}
                                />
                                {!isPasswordVisible && <FaRegEyeSlash className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={togglePassword} />}
                                {isPasswordVisible && <FaRegEye className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={togglePassword} />}
                            </div>
                            <p className="text-[10px] leading-none text-red-500 h-2">{errors.password && `${errors.password.message}`}</p>
                        </div>
                        <div className="flex flex-col gap-1 mb-2">
                            <label htmlFor="retypePassword" className="text-sm">Retype Password</label>
                            <div className="relative">
                                <input
                                    type={isRetypePasswordVisible ? 'text' : 'password'}
                                    id="retypePassword"
                                    className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 pl-3 pr-10 transition-all duration-300 ease-out w-full text-[15px]"
                                    autoComplete="off"
                                    {...register('retypePassword', {
                                        required: 'Please retype your password',
                                        validate: value =>
                                            value === password || 'The passwords do not match'
                                    })}
                                />
                                {!isRetypePasswordVisible && <FaRegEyeSlash className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={toggleRetypePassword} />}
                                {isRetypePasswordVisible && <FaRegEye className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={toggleRetypePassword} />}
                            </div>
                            <p className="text-[10px] leading-none text-red-500 h-2">{errors.retypePassword && `${errors.retypePassword.message}`}</p>
                        </div>
                        <button type="submit" className="w-full bg-[#263238] text-white rounded-sm py-2 mt-4">Sign Up</button>
                    </form>
                    <div className="create-account">
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an account?
                            <Link className="font-semibold leading-6 text-[#34b17d] pl-2" to='/login'>Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register