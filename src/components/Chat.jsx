import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

const Chat = () => {
	const [value, loading, error] = useCollection(
		query(collection(db, "messages"), orderBy("timestamp")),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);
	if (error) {
		console.log(error);
		return <p>error</p>;
	}
	if (loading) {
		return <p>... Loading</p>;
	}
	const messages = value.docs.map(doc => {
		return { ...doc.data(), id: doc.id };
	});
	return (
		<div>
			{messages.map(message => {
				return <p key={message.id}>{message.text}</p>;
			})}
			<Message />
		</div>
	);
};

export default Chat;
