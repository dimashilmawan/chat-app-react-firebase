import React from "react";
import { Comment } from "react-loader-spinner";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatMessage from "./ChatMessage";

const ChatRoom = React.forwardRef((props, ref) => {
	const [value, loading, error] = useCollection(
		query(collection(db, "messages"), orderBy("timestamp")),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);

	if (error) return <p>error</p>;

	if (loading)
		return (
			<div className="flex flex-1 items-center justify-center space-y-2 px-4 ">
				<Comment
					visible={true}
					height="80"
					width="80"
					ariaLabel="comment-loading"
					wrapperStyle={{}}
					wrapperClass="comment-wrapper"
					color="#f3f4f6"
					backgroundColor="#3b82f6"
				/>
			</div>
		);

	const messages = value.docs.map(doc => {
		return { ...doc.data(), id: doc.id };
	});

	return (
		<div className="flex-1 space-y-3 overflow-y-auto p-4">
			{messages.map(message => {
				return <ChatMessage key={message.id} message={message} />;
			})}
			<span ref={ref} />
		</div>
	);
});

export default ChatRoom;
