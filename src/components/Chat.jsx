

const Chat = () => {
    return (
        <div className='flex flex-col bg-base-300 rounded-3xl p-4 w-[350px] h-[650px] gap-10'>
            <>
            <div className="chat chat-start mt-10">
                <div className="chat-header">
                    Crayon
                    <time className="text-xs opacity-50">12:45</time>
                </div>

                <div className="chat-bubble">
                    Your comments about me are funny because I am trying to explain my
                    point by using humor. That said, I think you should try to
                    understand why people find these things amusing rather than
                    dismissing them out of hand. If you want to see someone else laugh
                    at their stupidity then maybe read a book instead of posting here.
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
                </div>

                <div className="chat chat-end">     
                    <div className="chat-header">
                    Crayon
                    <time className="text-xs opacity-50">12:46</time>
                </div>

                <div className="chat-bubble">
                    Your comment has been removed due to spam. Please use the search
                    function at the top right corner of this page if you want to find
                    what you were looking for again.
                </div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
            </>
        </div>
    );
};

export default Chat;