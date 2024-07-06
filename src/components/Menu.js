import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiChatsCircleFill } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GiDeathStar } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function Menu() {
    return (
        <div className="flex flex-col justify-between items-center h-full w-[8%] bg-[#FAFAFA] pt-4 pb-4">
            <div>
                <button>
                    <GiDeathStar className="text-3xl text-[#1DBF7B]" />
                </button>
            </div>
            <div className="flex flex-col items-center w-full">
                <button className="w-full grid place-content-center h-14 border-r-[3px] border-transparent hover:border-r-[#1DBF7B] transition-all duration-300 ease-in-out">
                    <HiOutlineEnvelope className="text-xl text-[#8C918F]" />
                </button>
                <button className="w-full grid place-content-center h-14 border-r-[3px] border-transparent hover:border-r-[#1DBF7B] transition-all duration-300 ease-in-out">
                    <PiChatsCircleFill className="text-xl text-[#8C918F]" />
                </button>
                <button className="w-full grid place-content-center h-14 border-r-[3px] border-transparent hover:border-r-[#1DBF7B] transition-all duration-300 ease-in-out">
                    <IoMdNotificationsOutline className="text-xl text-[#8C918F]" />
                </button>
                <button className="w-full grid place-content-center h-14 border-r-[3px] border-transparent hover:border-r-[#1DBF7B] transition-all duration-300 ease-in-out">
                    <GoPeople className="text-xl text-[#8C918F]" />
                </button>
            </div>
            <div>
                <FaUser />
            </div>
        </div>
    )
}

export default Menu