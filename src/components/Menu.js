import { PiHashBold } from "react-icons/pi";
import { PiChatsCircleFill } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GiDeathStar } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function Menu() {
    return (
        <div className="flex flex-col shrink-0 justify-between items-center h-full w-[6%] bg-[#F3F5F2] pt-4 pb-4">
            <div>
                <button>
                    <GiDeathStar className="text-3xl text-[#1DBF7B]" />
                </button>
            </div>
            <div className="flex flex-col items-center w-full">
                <button className="w-full grid place-content-center h-14 border-r-2 border-transparent hover:border-r-[#1DBF7B] transition-all duration-300 ease-in-out">
                    <PiHashBold className="text-xl text-[#767978]" />
                </button>
                <button className="w-full grid place-content-center h-14 border-r-2 border-transparent hover:border-r-[#1DBF7B] transition-all duration-300 ease-in-out">
                    <PiChatsCircleFill className="text-xl text-[#767978]" />
                </button>
                <button className="w-full grid place-content-center h-14 border-r-2 border-transparent hover:border-r-[#1DBF7B] transition-all duration-300 ease-in-out">
                    <IoMdNotificationsOutline className="text-xl text-[#767978]" />
                </button>
                <button className="w-full grid place-content-center h-14 border-r-2 border-transparent hover:border-r-[#1DBF7B] transition-all duration-300 ease-in-out">
                    <GoPeople className="text-xl text-[#767978]" />
                </button>
            </div>
            <div>
                <FaUser className="text-xl text-[#767978]" />
            </div>
        </div>
    )
}

export default Menu