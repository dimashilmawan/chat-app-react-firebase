import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
function App() {
	const [user, loading] = useAuthState(auth);
	return (
		!loading && (
			<div className="h-screen bg-slate-100">
				<header className="shadow-sm">
					<Navbar />
				</header>
				<main>{user && <Chat />}</main>
			</div>
		)
	);
}

export default App;
