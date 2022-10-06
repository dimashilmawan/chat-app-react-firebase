import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const SignIn = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	return (
		<button
			onClick={() => signInWithGoogle()}
			className="flex items-center space-x-1 rounded-md bg-white p-[1px] px-4 py-3 text-gray-500/80 shadow-md"
		>
			<div className="">
				<img src="/google-icon.png" alt="" className="h-6 w-6  " />
			</div>
			<span className="-mt-1 text-sm font-semibold">Sign in with Google</span>
		</button>
	);
};

export default SignIn;
