import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const SignIn = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	return (
		<button
			onClick={() => signInWithGoogle()}
			className="flex items-center space-x-1 rounded-md bg-gray-50 p-[1px] px-3 py-2 text-gray-500/90 shadow-md transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 dark:bg-gray-600 dark:text-gray-200 dark:focus:ring-gray-300"
		>
			<div className="">
				<img src="/google-icon.png" alt="" className="h-8 w-8  " />
			</div>
			<span className=" text-sm font-semibold">Sign in with Google</span>
		</button>
	);
};

export default SignIn;
