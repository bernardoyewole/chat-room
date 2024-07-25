import { FiPlus } from "react-icons/fi";
import { TbDots } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { VscSmiley } from "react-icons/vsc";
import { GrMicrophone } from "react-icons/gr";

function Chat() {
    return (
        <section className="w-[70%] h-full px-6 pt-0 pb-6 flex flex-col">
            <div className="flex h-[12%] justify-between items-center">
                <div className="flex flex-col gap-1">
                    <p>John Doe</p>
                    <p className="flex items-center text-gray-500 text-xs">
                        <GoDotFill className="text-green-600 inline" />
                        Online
                    </p>
                </div>
                <TbDots />
            </div>
            <div className="bg-[#F8F8F9] h-[91%] rounded-lg p-4 flex items-end">
                <div className="bg-white w-full flex items-center gap-4 p-4">
                    <div className="p-2.5 rounded-[50%] border-[1px] border-gray-300">
                        <FiPlus className="text-gray-800" />
                    </div>
                    <div className="flex items-center justify-between gap-2 border-[1px] border-gray-300 py-2.5 px-3 w-[80%] rounded-full">
                        <input className="w-[92%] pl-1 text-[15px]" placeholder="Message..." />
                        <VscSmiley className="text-xl" />
                    </div>
                    <div className="p-2.5 rounded-[50%] border-[1px] border-gray-300">
                        <GrMicrophone className="text-gray-700" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat