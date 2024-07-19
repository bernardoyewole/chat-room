import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className="bg-[url('../images/login-bg.jpg')] h-screen bg-cover">
            <div className="bg-black/70 h-full grid place-items-center">
                <div className="bg-white p-6 rounded-md w-96">
                    <h1 className="text-2xl text-center">CHAT <span className="text-[#34b17d]">ROOM</span></h1>
                    <form className="pt-6">
                        <div className="flex flex-col gap-1 mb-4">
                            <label htmlFor="username" className="text-sm">Email</label>
                            <input
                                type="text"
                                id="username"
                                className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 py-2 px-3 transition-all duration-300 ease-out text-md"
                                autocomplete="off"
                                {...register('username', { required: 'Username or email is required' })}
                            />
                            {errors.username && <p>{errors.username.message}</p>}
                        </div>
                        <div className="flex flex-col gap-1 mb-4">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 py-2 px-3 transition-all duration-300 ease-out"
                                autocomplete="off"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <div className="w-full flex justify-end">
                            <a href="#" className="text-xs underline underline-offset-2 text-[#34b17d]">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full bg-[#263238] text-white rounded-sm py-2 mt-4">Sign in</button>
                    </form>
                    <div className="create-account">
                        <p class="mt-10 text-center text-sm text-gray-500">
                            Are you new?
                            <a href="#" class="font-semibold leading-6 text-[#34b17d]"> Create an Account!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login