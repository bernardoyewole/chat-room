import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState(null);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://localhost:44315/api/Account/forgotPassword', data);

            if (response.status === 200) {
                setMessage("Recovery email sent successfully");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-[url('../images/login-bg.jpg')] h-screen bg-cover">
            <div className="bg-black/70 h-full grid place-items-center">
                <div className="bg-white p-6 rounded-md w-96">
                    <h1 className="text-2xl text-center mb-4">CHAT <span className="text-[#34b17d]">ROOM</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-sm text-gray-700 mb-4">Enter your email to get a password reset link</p>
                        <div className="flex flex-col gap-1">
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
                        <p className="h-2 text-xs text-[#34b17d]">{message}</p>
                        <button type="submit" className="w-full bg-[#263238] text-white rounded-sm py-2 mt-4">Send Link</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword