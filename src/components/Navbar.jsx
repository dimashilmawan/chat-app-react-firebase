import React from "react";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { auth } from "../firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Navbar = ({ onThemeToggle, isDarkMode }) => {
	return (
		<nav className="flex h-[72px] items-center justify-between px-4 ">
			<button
				onClick={onThemeToggle}
				className="rounded-full bg-yellow-200 p-3 transition-all duration-500 dark:bg-gray-200"
			>
				{isDarkMode ? (
					<BsFillMoonStarsFill className="text-2xl text-gray-700" />
				) : (
					<BsSun className="text-2xl text-yellow-700" />
				)}
			</button>
			{auth.currentUser ? <SignOut /> : <SignIn />}
		</nav>
	);
};

export default Navbar;
