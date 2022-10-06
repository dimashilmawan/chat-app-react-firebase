import React, { useRef } from "react";

const ChatMessage = ({ message: { displayName, photoURL, text } }) => {
	return (
		<div className="flex w-max space-x-2  rounded-3xl rounded-bl-none bg-yellow-300 p-2 pr-5">
			<div className="">
				<img
					className="w-h-14 h-14 rounded-full"
					src={photoURL}
					referrerPolicy="no-referrer"
					alt={`${displayName}'s profile`}
				/>
			</div>
			<div className="flex flex-1 flex-col items-start ">
				<h4 className="text-base font-semibold ">{displayName}</h4>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ChatMessage;
