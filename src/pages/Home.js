import ChatMenu from "../components/ChatMenu";
import Menu from "../components/Menu";
import Chat from "../components/Chat";

function Home() {
    return (
        <div className="bg-[#C5DCD7] h-full w-full flex justify-center items-center">
            <div className="h-[80%] w-[70%] bg-white flex">
                <Menu />
                <ChatMenu />
                <Chat />
            </div>
        </div>
    )
}

export default Home