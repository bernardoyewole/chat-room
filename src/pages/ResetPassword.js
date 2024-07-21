import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function ResetPassword() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const password = watch('password', '');

    const query = useQuery();
    const email = query.get('email');
    const resetCode = query.get('code').replaceAll(' ', '+');

    const [message, setMessage] = useState('');

    const onSubmit = async (data) => {
        const newPassword = data.password;

        try {
            const response = await axios.post('https://localhost:44315/api/Account/resetPassword', {
                email,
                resetCode,
                newPassword
            });

            if (response.status === 200) {
                setMessage("Password has been reset successfully");
            }

            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (error) {
            setMessage("There was an error resetting your password");
            console.error(error);
        }
    };

    return (
        <div className="bg-[url('../images/login-bg.jpg')] h-screen bg-cover">
            <div className="bg-black/70 h-full grid place-items-center">
                <div className="bg-white p-6 rounded-md w-96">
                    <h1 className="text-2xl text-center mb-4">CHAT <span className="text-[#34b17d]">ROOM</span></h1>
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-1 mb-1">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="border-[1px] border-gray-300 rounded-sm h-10 px-3 transition-all duration-300 ease-out text-[15px] cursor-not-allowed"
                                value={email}
                                readOnly={true}
                            />
                            <p className="text-[10px] leading-none text-red-500 h-2">{errors.email && `${errors.email.message}`}</p>
                        </div>
                        <div className="flex flex-col gap-1 mb-1">
                            <label htmlFor="password" className="text-sm">New Password</label>
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
                                <p className="text-[10px] leading-none text-red-500 h-2">{errors.password && `${errors.password.message}`}</p>
                                {!isPasswordVisible && <FaRegEyeSlash className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={togglePassword} />}
                                {isPasswordVisible && <FaRegEye className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={togglePassword} />}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mb-1">
                            <label htmlFor="retypedPassword" className="text-sm">Retype Password</label>
                            <div className="relative">
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    id="retypedPassword"
                                    className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 pl-3 pr-10 transition-all duration-300 ease-out w-full text-[15px]"
                                    autoComplete="off"
                                    {...register('retypedPassword',
                                        {
                                            required: 'Please retype your password',
                                            validate: value => value === password || "The passwords do not match"
                                        }
                                    )}
                                />
                                {!isPasswordVisible && <FaRegEyeSlash className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={togglePassword} />}
                                {isPasswordVisible && <FaRegEye className="absolute right-3.5 top-3.5 cursor-pointer text-gray-600 text-sm" onClick={togglePassword} />}
                            </div>
                            <p className="text-[10px] leading-none text-red-500 h-2">{errors.retypedPassword && `${errors.retypedPassword.message}`}</p>
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
                        </div>
                        <p className="h-2 text-xs text-[#34b17d]">{message}</p>
                        <button type="submit" className="w-full bg-[#263238] text-white rounded-sm py-2 mt-4">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ResetPassword