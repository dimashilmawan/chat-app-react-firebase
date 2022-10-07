import React, { useRef } from "react";
import { auth } from "../firebase";

const ChatMessage = ({ message: { displayName, photoURL, text, uid } }) => {
	const isLogin = auth.currentUser.uid === uid;
	return (
		<div
			className={`flex max-w-max space-x-2  ${isLogin ? "ml-auto" : "mr-auto"}`}
		>
			{!isLogin && (
				<div className="flex items-start">
					<img
						className="h-10 w-10 rounded-full"
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
					className={`text-base font-semibold text-gray-800 dark:text-gray-200  ${
						isLogin ? "text-right" : "text-left"
					}`}
				>{`${isLogin ? "You" : displayName.split(" ")[0]}`}</h4>
				<p
					className={`break-all p-1  px-3  pb-[6px] text-base leading-tight transition-all ${
						isLogin
							? "rounded-lg rounded-tr-none bg-blue-500 text-gray-50 dark:bg-blue-600 dark:text-gray-100"
							: "rounded-lg rounded-tl-none bg-gray-100 text-gray-800 dark:bg-gray-500 dark:text-gray-200 "
					}`}
				>
					{text}
				</p>
			</div>
		</div>
	);
};

export default ChatMessage;
