import React, { useRef } from "react";
import { IoSend } from "react-icons/io5";

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
		<form className="flex space-x-2  p-4" onSubmit={submitHandler}>
			<input
				className="flex-1 rounded-lg bg-gray-50 p-3 pl-3 text-lg font-medium text-gray-700 focus:outline-none dark:bg-gray-600 dark:text-gray-200 dark:placeholder:text-gray-300"
				ref={inputTextRef}
				type="text"
				placeholder="Type here..."
			/>
			<button
				className="rounded-lg bg-blue-600 px-3 text-gray-100 focus:border-none focus:outline-none"
				type="submit"
			>
				<IoSend className="text-xl" />
			</button>
		</form>
	);
};

export default SendMessage;
