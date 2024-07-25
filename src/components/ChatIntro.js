function ChatIntro() {
    return (
        <div className="h-full flex flex-col items-center justify-center gap-4">
            <div className="shrink-0 p-6 bg-white rounded-[50%]">
                <TbMessage className="text-6xl text-blue-500" />
            </div>
            <p>Message someone and chat right now!</p>
            <button className="bg-blue-500 px-6 py-3 text-white rounded-full">Send Message</button>
        </div>
    )
}

export default ChatIntro