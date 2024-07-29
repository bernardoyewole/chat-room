import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../provider/AuthProvider";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const { setToken } = useAuth();

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const trimmedData = {
            email: data.email.trim(),
            password: data.password.trim(),
        };

        axios.post('https://localhost:44315/login', trimmedData)
            .then(res => {
                if (res.data.accessToken.length > 0) { //check 200
                    setToken(res.data.accessToken, res.data.refreshToken, res.data.expiresIn);

                    const isFirstTimeUserData = localStorage.getItem(`${trimmedData.email}`) === "isFirstTimeUser";

                    if (isFirstTimeUserData === true) {
                        navigate(`/createProfile/${trimmedData.email}`);
                    } else {
                        navigate(`/${trimmedData.email}`);
                    }
                }
            })
            .catch(err => {
                if (err.response.data.status === 401 && err.response.data.title === 'Unauthorized') {
                    setErrorMessage('Invalid email or password');
                } else {
                    setErrorMessage('Some error occurred, try again')
                }
            });
    }

    return (
        <div className="bg-[url('../images/login-bg.jpg')] h-screen bg-cover">
            <div className="bg-black/70 h-full grid place-items-center">
                <div className="bg-white p-6 rounded-md w-96">
                    <h1 className="text-2xl text-center">CHAT <span className="text-[#34b17d]">ROOM</span></h1>
                    <form className="pt-6" onSubmit={handleSubmit(onSubmit)}>
                        <p className="h-2 text-xs text-center text-red-600">{errorMessage && `${errorMessage}`}</p>
                        <div className="flex flex-col gap-1 mb-2">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input
                                type="text"
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
                        <div className="w-full flex justify-end">
                            <Link to='/forgotPassword' className="text-xs underline underline-offset-2 text-[#34b17d]">Forgot password?</Link>
                        </div>
                        <button type="submit" className="w-full bg-[#263238] text-white rounded-sm py-2 mt-4">Sign in</button>
                    </form>
                    <div className="create-account">
                        <p className="mt-4 text-center text-sm text-gray-500">
                            Are you new?
                            <Link className="font-semibold leading-6 text-[#34b17d] pl-2" to='/register'>Create an Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login