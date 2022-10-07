import { useRef } from "react";
import ChatRoom from "./ChatRoom";
import SendMessage from "./SendMessage";

const Chat = () => {
	const scrollToRef = useRef();

	return (
		<>
			<ChatRoom ref={scrollToRef} />
			<SendMessage scroll={scrollToRef} />
		</>
	);
};

export default Chat;
