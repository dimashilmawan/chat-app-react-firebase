import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
	const signOutHandler = () => {
		signOut(auth);
	};
	return (
		<p
			onClick={signOutHandler}
			className="flex items-center justify-center rounded-md   text-base font-semibold text-blue-500 underline underline-offset-[3px] "
		>
			{auth.currentUser.displayName.split(" ")[0]}
		</p>
	);
};

export default SignOut;
