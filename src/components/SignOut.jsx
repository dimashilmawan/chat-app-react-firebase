import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
	const signOutHandler = () => {
		signOut(auth);
	};
	return (
		<button
			onClick={signOutHandler}
			className="flex items-center justify-center rounded-md  bg-red-500 px-4 py-2 font-semibold text-gray-100 "
		>
			Logout
		</button>
	);
};

export default SignOut;
