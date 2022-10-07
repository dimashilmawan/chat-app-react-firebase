import React, { useRef } from "react";
import { IoSend } from "react-icons/io5";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

const SendMessage = ({ scroll }) => {
	const { displayName, uid, photoURL } = auth.currentUser;
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

		scroll.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<form className="flex space-x-2  p-4 pt-0" onSubmit={submitHandler}>
			<input
				className=" flex-1 rounded-lg bg-gray-50 p-3 pl-3 text-lg font-medium text-gray-700 transition-all focus:outline-none focus:ring-2 dark:bg-gray-600 dark:text-gray-200 dark:placeholder:text-gray-300 dark:focus:ring-gray-400"
				ref={inputTextRef}
				type="text"
				placeholder="Type here..."
			/>
			<button
				className="rounded-lg bg-blue-600 px-3 text-gray-100 focus:border-none focus:outline-none focus:ring"
				type="submit"
			>
				<IoSend className="text-xl" />
			</button>
		</form>
	);
};

export default SendMessage;
