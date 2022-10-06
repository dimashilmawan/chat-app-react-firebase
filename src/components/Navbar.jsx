import React from "react";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { auth } from "../firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Navbar = () => {
	return (
		<nav className="flex h-[60px] items-center justify-between px-4 ">
			<div>
				<BsFillChatSquareTextFill className="text-3xl text-teal-700" />
			</div>
			{auth.currentUser ? <SignOut /> : <SignIn />}
		</nav>
	);
};

export default Navbar;
