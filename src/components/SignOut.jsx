import React, { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
	const [isLogoutVisible, setIsLogoutVisible] = useState(false);
	const signOutHandler = () => {
		signOut(auth);
	};

	return (
		<div className="relative">
			<button
				onClick={() => setIsLogoutVisible(prevState => !prevState)}
				className="flex items-center justify-center  px-4 text-base font-semibold text-teal-800 underline underline-offset-[3px]"
			>
				{auth.currentUser.displayName.split(" ")[0]}
			</button>
			{isLogoutVisible && (
				<button
					onClick={signOutHandler}
					className="absolute top-7 left-[50%] w-full -translate-x-[50%]  bg-gray-200 px-3 py-1 text-gray-700 shadow-lg transition-all"
				>
					Logout
				</button>
			)}
		</div>
	);
};

export default SignOut;
