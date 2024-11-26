

const Chat2 = () => {
    return (
        <div className='flex flex-col bg-base-300 rounded-3xl p-4 w-[350px] h-[650px] gap-10'>
            <>
            <div className="chat chat-start mt-10">
                <div className="chat-header">
                    Homer
                </div>

                <div className="chat-bubble">
                My favorite food is probably pizza. It has been my favorite since I
                was little.
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
                </div>

                <div className="chat chat-end">     
                    <div className="chat-header">
                    Homer
                </div>

                <div className="chat-bubble">
                I think it would be cool if we could have some sort of toast school for people that want
                to learn how to make their own bread. I know there is one place where they teach you how to bake 
                bread but its really expensive. It might be nice to have something more affordable so everyone has
                access to it.<br /><br />
                -- The only thing necessary for evil to triumph is for good men to do nothing. - Edmund Burke
                </div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
            </>
        </div>
    );
};

export default Chat2;