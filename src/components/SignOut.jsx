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
				className={`flex items-center justify-center rounded-lg  bg-gray-200 px-3 py-2 text-base font-semibold  text-gray-700 transition-all dark:bg-gray-600 dark:text-gray-100`}
			>
				{auth.currentUser.displayName.split(" ")[0]}
			</button>
			{isLogoutVisible && (
				<button
					onClick={signOutHandler}
					className="absolute top-12 left-[50%] w-full -translate-x-[50%] rounded-lg bg-red-600 px-3 py-2 text-sm  font-medium text-gray-100 shadow-lg transition-all"
				>
					Logout
				</button>
			)}
		</div>
	);
};

export default SignOut;
