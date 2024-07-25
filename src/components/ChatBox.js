import ChatMenu from "./ChatMenu";
import Chat from "./Chat";

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

function ChatBox() {
    return (
        <section className="container h-[calc(100%-80px)] flex items-center">
            <div className="flex gap-10 h-[90%] w-full">
                <section className="bg-white rounded-lg w-[75%] h-full flex">
                    <ChatMenu />
                    <Chat />
                </section>
                <section className="bg-white h-32">
                </section>
            </div>
        </section>
    )
}

export default ChatBox