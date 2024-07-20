import { Link } from "react-router-dom"

function AccountConfirmation() {
    return (
        <div className="bg-[url('../images/login-bg.jpg')] h-screen bg-cover">
            <div className="bg-black/70 h-full grid place-items-center">
                <div className="bg-white p-6 rounded-md w-96">
                    <h1 className="text-2xl text-center mb-4">CHAT <span className="text-[#34b17d]">ROOM</span></h1>
                    <div className="text-sm">
                        <p>
                            Your account has been successfully created. Please check your email to confirm your account,
                            then <Link to='/login' className="underline underline-offset-2 text-[#34b17d] font-semibold">log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountConfirmation