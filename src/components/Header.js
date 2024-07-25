import { GiDeathStar } from "react-icons/gi";
import { RiGroupLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { FiHash } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
    return (
        <header className="bg-white h-[80px] leading-[80px]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-6 flex-1">
                    <div>
                        <GiDeathStar className="text-4xl text-blue-500" />
                    </div>
                    <div>
                        <input type="text" placeholder="Search..." className="pl-8 pr-4 py-2 text-sm border rounded-full focus:outline-none bg-[url('../images/search.png')] bg-no-repeat bg-[10px]" />
                    </div>
                </div>
                <nav className="flex items-center gap-2">
                    <a className='cursor-pointer flex items-center gap-2 hover:bg-gray-100 rounded-3xl px-4 h-9 transition-all duration-300 ease-in-out'>
                        <RiGroupLine className="text-blue-500" />
                        <span className="text-sm">Connections</span>
                    </a>
                    <a className='cursor-pointer flex items-center gap-2 hover:bg-gray-100 rounded-3xl px-4 h-9 transition-all duration-300 ease-in-out'>
                        <TbMessage className="text-blue-500" />
                        <span className="text-sm">DMs</span>
                    </a>
                    <a className='cursor-pointer flex items-center gap-2 hover:bg-gray-100 rounded-3xl px-4 h-9 transition-all duration-300 ease-in-out'>
                        <FiHash className="text-blue-500" />
                        <span className="text-sm">Channels</span>
                    </a>
                    <a className='cursor-pointer flex items-center gap-2 hover:bg-gray-100 rounded-3xl px-4 h-9 transition-all duration-300 ease-in-out'>
                        <IoMdNotificationsOutline className="text-blue-500 text-lg" />
                        <span className="text-sm">Notifications</span>
                    </a>
                </nav>
                <div className="flex items-center flex-1 justify-end">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                        <img src="https://via.placeholder.com/150" alt="User avatar" className="w-full h-full object-cover" />
                    </div>
                    <span className="ml-2 text-gray-700">Erşad Başbağ</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
