import React from "react";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { auth } from "../firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Navbar = ({ onThemeToggle, isDarkMode }) => {
	return (
		<nav className="flex h-[76px] items-center justify-between px-4 ">
			<button
				onClick={onThemeToggle}
				className="rounded-full bg-yellow-200 p-3 transition-all  hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-50 active:scale-95 dark:bg-gray-200 dark:focus:ring-gray-500"
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
