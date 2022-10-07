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
			<div className={isDarkMode ? " dark" : ""}>
				<div className="flex h-screen flex-col bg-gray-300 transition-all dark:bg-gray-800/95 ">
					<header className="bg-gray-400/20 dark:bg-gray-800">
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
