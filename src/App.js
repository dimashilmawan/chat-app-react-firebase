import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

function App() {
	const [user, loading] = useAuthState(auth);
	return (
		!loading && (
			<div className="flex h-screen flex-col bg-slate-100 ">
				<header className="shadow-sm">
					<Navbar />
				</header>
				<main className="flex flex-1 flex-col overflow-scroll bg-red-600">
					{user && <Chat />}
				</main>
			</div>
		)
	);
}

export default App;

/////////////////////////////////////////////////////////////
// import React from "react";

// const App = () => {
// 	return (
// 		<div className="flex h-screen flex-col bg-red-500">
// 			<div className="flex-1 overflow-y-auto bg-green-400">
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 				<p>lorem ipsum dolor sit amet, consectetur adip</p>
// 			</div>
// 			<div>huhuy</div>
// 		</div>
// 	);
// };

// export default App;
