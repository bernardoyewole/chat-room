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

let favorites = users.filter(u => u.favorites);
let otherUsers = users.filter(u => !u.favorites);

function ChatMenu() {
    return (
        <div className="h-full flex flex-col shrink-0 bg-white w-[24%] pb-4">
            <div className="pl-6 font-semibold pb-5 pt-5 bg-inherit">
                <h1>Chat Room</h1>
            </div>
            <div className="overflow-y-auto scrollbar">
                {favorites.length > 0 &&
                    <div className="flex flex-col mb-5">
                        <p className="text-[12px] text-[#767978] pl-6 mb-1 mt-2">FAVORITES</p>
                        {favorites.map(user => (
                            <div key={user.id} className="h-[45px] flex items-center gap-2 pl-6 hover:bg-gray-100 hover:cursor-pointer">
                                <div className="h-7 w-7">
                                    <img src={user.avatar} className="rounded-[50%]" />
                                </div>
                                <p className="text-[13px]">{user.name}</p>
                            </div>
                        ))}
                    </div>}
                {otherUsers.length > 0 &&
                    <div className="flex flex-col">
                        <p className="text-[12px] text-[#767978] pl-6 mb-1">DIRECT MESSAGES</p>
                        {favorites.map(user => (
                            <div key={user.id} className="h-[45px] flex items-center gap-2 pl-6 hover:bg-gray-100 hover:cursor-pointer">
                                <div className="h-7 w-7">
                                    <img src={user.avatar} className="rounded-[50%]" />
                                </div>
                                <p className="text-[13px]">{user.name}</p>
                            </div>
                        ))}
                    </div>}
            </div>
        </div>
    )
}

export default ChatMenu