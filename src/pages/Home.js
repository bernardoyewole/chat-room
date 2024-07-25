import ChatMenu from "../components/ChatMenu";
import Menu from "../components/Menu";
import Chat from "../components/Chat";
import Header from "../components/Header";
import ChatBox from "../components/ChatBox";

function Home() {
    return (
        <div className="bg-[#F8F8F9] h-screen">
            <Header />
            <ChatBox />
            {/* <div className="h-[80%] w-[70%] bg-white flex">
                <Menu />
                <ChatMenu />
                <Chat />
            </div> */}
        </div>
    )
}

export default Home