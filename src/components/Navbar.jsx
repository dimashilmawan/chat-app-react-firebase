import React from "react";
import { auth } from "../firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Navbar = () => {
	return (
		<nav className="flex h-[68px] items-center justify-between px-4">
			<div>Logo</div>
			{auth.currentUser ? <SignOut /> : <SignIn />}
		</nav>
	);
};

export default Navbar;
