import React, { useRef } from "react";
import { auth } from "../firebase";

const messageClasses = {
	sender: `ml-auto `,
	recipient: `mr-auto `,
};

const nameClasses = {
	sender: `text-right`,
	recipient: `text-left`,
};

const textClasses = {
	sender: `rounded-lg rounded-tr-none bg-teal-700 `,
	recipient: `rounded-lg rounded-tl-none bg-teal-400 text-gray-700 `,
};

const ChatMessage = ({ message: { displayName, photoURL, text, uid } }) => {
	const isLogin = auth.currentUser.uid === uid;
	return (
		<div
			className={`flex max-w-max space-x-2  ${
				isLogin ? messageClasses.sender : messageClasses.recipient
			}`}
		>
			{!isLogin && (
				<div className="flex items-start">
					<img
						className="w-h-10 h-10 rounded-full"
						src={photoURL}
						referrerPolicy="no-referrer"
						alt={`${displayName}'s profile`}
					/>
				</div>
			)}
			<div
				className={`flex flex-1 flex-col space-y-1 ${
					isLogin ? "items-end" : "items-start"
				} `}
			>
				<h4
					className={`text-sm font-semibold  ${
						isLogin ? nameClasses.sender : nameClasses.recipient
					}`}
				>{`${isLogin ? "You" : displayName}`}</h4>
				<p
					className={`break-all p-1  px-3 pb-[6px] text-sm leading-tight text-gray-100 ${
						isLogin ? textClasses.sender : textClasses.recipient
					}`}
				>
					{text}
				</p>
			</div>
		</div>
	);
};

export default ChatMessage;
