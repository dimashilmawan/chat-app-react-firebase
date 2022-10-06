import React, { useRef } from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

const SendMessage = () => {
	const { displayName, uid, photoURL } = auth.currentUser;
	console.log(auth.currentUser);
	const inputTextRef = useRef();
	const submitHandler = async e => {
		e.preventDefault();
		const inputText = inputTextRef.current.value;

		if (inputText.length === 0) return alert("Please input some text");

		inputTextRef.current.value = "";

		await addDoc(collection(db, "messages"), {
			text: inputText,
			timestamp: serverTimestamp(),
			displayName,
			uid,
			photoURL,
		});
	};
	return (
		<form className="flex" onSubmit={submitHandler}>
			<input
				className="flex-1 p-3"
				ref={inputTextRef}
				type="text"
				placeholder="type text"
			/>
			<button
				className="bg-teal-700 p-2 text-gray-100 focus:border-none focus:outline-none"
				type="submit"
			>
				Enter
			</button>
		</form>
	);
};

export default SendMessage;
