import { FaPlus } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import { MdFilterList } from "react-icons/md";

const users = [
    {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "John Doe",
        favorites: true
    },
    {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Jane Smith",
        favorites: false
    },
    {
        id: 3,
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Michael Brown",
        favorites: true
    },
    {
        id: 4,
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Emily Davis",
        favorites: false
    },
    {
        id: 5,
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "James Wilson",
        favorites: true
    },
    {
        id: 6,
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Olivia Johnson",
        favorites: false
    },
    {
        id: 7,
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "David Martinez",
        favorites: true
    },
    {
        id: 8,
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Sophia Lee",
        favorites: false
    },
    {
        id: 9,
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Chris Taylor",
        favorites: true
    },
    {
        id: 10,
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        name: "Isabella Gonzalez",
        favorites: false
    }
];

function ChatMenu() {
    return (
        <section className="w-[30%] h-full border-r-[1px] border-b-gray-200">
            <div className="h-[9%] w-full flex justify-between items-center px-5 border-b-[1px] border-b-gray-200">
                <h1>Message</h1>
                <div className="flex gap-6 items-center">
                    <div className="p-2 rounded-[50%] border-[1px] border-gray-400">
                        <FaPlus className="text-xs" />
                    </div>
                    <TbDots />
                </div>
            </div>
            <div className="h-[8%] flex justify-between items-center px-5 border-b-[1px] border-b-gray-200">
                <FaPlus className="shrink-0 text-gray-500" />
                <input placeholder="Search message..." className="text-sm font-normal w-[70%]" />
                <MdFilterList className="shrink-0" />
            </div>
            <div className="h-[83%] overflow-y-auto custom-scrollbar">
                {users.map(user => (
                    <div key={user.id} className={`h-24 flex items-center gap-4 px-5 border-l-2 transition-all duration-300 ease-in-out border-transparent hover:bg-gray-100 hover:border-l-blue-500 cursor-pointer ${users[users.length - 1].id !== user.id ? 'border-b-[1px] border-b-gray-200' : ''}`}>
                        <div className="h-10 w-10 shrink-0">
                            <img src={user.avatar} className="rounded-[50%]" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-center shrink-0">
                                <p className="text-sm">{user.name}</p>
                                <p className="text-xs text-gray-500">06 Jan</p>
                            </div>
                            <p className="text-[13px] text-gray-500">Hey man, wassup, send me the Ps!</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ChatMenu