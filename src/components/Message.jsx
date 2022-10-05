import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "../firebase";
import { auth } from "../firebase";

const Message = () => {
	const { displayName, uid } = auth.currentUser;
	const inputRef = useRef();
	const submitHandler = async e => {
		e.preventDefault();
		const input = inputRef.current.value;
		inputRef.current.value = "";
		await addDoc(collection(db, "messages"), {
			text: input,
			timestamp: serverTimestamp(),
			displayName,
			uid,
		});
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input ref={inputRef} type="text" placeholder="type text" />
				<button type="submit">Enter</button>
			</form>
		</div>
	);
};

export default Message;
