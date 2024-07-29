import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const onSubmit = data => {
        const trimmedData = {
            email: data.email.trim(),
            password: data.password.trim(),
            firstName: data.firstName.trim(),
            lastName: data.lastName.trim()
        };

        axios.post('https://localhost:44315/api/Account/register', trimmedData)
            .then(res => {
                if (res.data.message === "User registered successfully" && res.status === 200) {
                    if (res.headers.isfirsttimeuser === "true") {
                        localStorage.setItem(`${trimmedData.email}`, 'isFirstTimeUser');
                    }

                    navigate('/accountConfirmation', { replace: true });
                }
            })
            .catch(err => {
                const duplicateUserName = err.response.data.DuplicateUserName;

                if (duplicateUserName && duplicateUserName.length > 0) {
                    setErrorMessage('An account exists with this email');
                }
            });
    }

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
                                    {...register('firstName',
                                        {
                                            required: 'First Name is required',
                                            pattern: {
                                                value: /^(?!\s*$).+/,
                                                message: 'First Name cannot be empty'
                                            }
                                        })}
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
                                    {...register('lastName', {
                                        required: 'Last Name is required',
                                        pattern: {
                                            value: /^(?!\s*$).+/,
                                            message: 'Last Name cannot be empty'
                                        }
                                    })}
                                />
                                <p className="text-[10px] leading-none text-red-500 h-2">{errors.lastName && `${errors.lastName.message}`}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mb-2">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 px-3 transition-all duration-300 ease-out text-[15px]"
                                autoComplete="off"
                                {...register('email',
                                    {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Enter a valid email address'
                                        }

                                    })}
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
                                    {...register('password',
                                        {
                                            required: 'Password is required',
                                            validate: {
                                                length: value => value.length >= 6 || 'Password must be at least 6 characters long',
                                                uppercase: value => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
                                                lowercase: value => /[a-z]/.test(value) || 'Password must contain at least one lowercase letter',
                                                digit: value => /\d/.test(value) || 'Password must contain at least one numeric digit',
                                                nonalphanumeric: value => /[^a-zA-Z0-9]/.test(value) || 'Password must contain at least one nonalphanumeric character',
                                                emptySpace: value => value.trim() === value || 'Password must not have leading or trailing spaces'
                                            }
                                        }
                                    )}
                                />
                                {!isPasswordVisible && <FaRegEyeSlash className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={togglePassword} />}
                                {isPasswordVisible && <FaRegEye className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={togglePassword} />}
                            </div>
                            <p className="text-[10px] leading-none text-red-500 h-2">{errors.password && `${errors.password.message}`}</p>
                            <div>
                                <ul className="text-[11px] text-gray-500">
                                    <li>
                                        - at least six characters long
                                    </li>
                                    <li>
                                        - at least one uppercase letter
                                    </li>
                                    <li>
                                        - at least one lowercase letter
                                    </li>
                                    <li>
                                        - at least one numeric digit
                                    </li>
                                    <li>
                                        - at least one nonalphanumeric character
                                    </li>
                                </ul>
                            </div>
                            <p className="h-2 text-xs text-center text-red-600">{errorMessage && `${errorMessage}`}</p>
                        </div>
                        <button type="submit" className="w-full bg-[#263238] text-white rounded-sm py-2 mt-2">Sign Up</button>
                    </form>
                    <div>
                        <p className="mt-4 text-center text-sm text-gray-500">
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