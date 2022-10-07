import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

function App() {
	const [user, loading] = useAuthState(auth);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const themeToggleHandler = () => {
		setIsDarkMode(prevState => !prevState);
	};
	return (
		!loading && (
			<div className={isDarkMode ? " dark bg-gray-300" : "bg-gray-100"}>
				<div className="mx-auto flex h-screen flex-col bg-gray-300 transition-all dark:bg-gray-800/95 sm:max-w-2xl  md:max-w-3xl">
					<header className="shadow-md dark:shadow-gray-700">
						<Navbar
							onThemeToggle={themeToggleHandler}
							isDarkMode={isDarkMode}
						/>
					</header>
					<main className="flex flex-1 flex-col overflow-scroll ">
						{user && <Chat />}
					</main>
				</div>
			</div>
		)
	);
}

export default App;
