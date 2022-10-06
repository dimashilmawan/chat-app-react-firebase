import React from "react";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatMessage from "./ChatMessage";
const ChatRoom = () => {
	const [value, loading, error] = useCollection(
		query(collection(db, "messages"), orderBy("timestamp")),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);

	if (error) return <p>error</p>;

	if (loading) return <div className="flex-1 space-y-2 px-4">... Loading</div>;

	const messages = value.docs.map(doc => {
		return { ...doc.data(), id: doc.id };
	});

	return (
		<div className="flex-1 space-y-3 overflow-y-auto p-4">
			{messages.map(message => {
				return <ChatMessage key={message.id} message={message} />;
			})}
		</div>
	);
};

export default ChatRoom;
