import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EventsPage from "./pages/EventsPage/eventsPage";
import Landing from "./components/Landing/Landing";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navbar />}>
				<Route exact path="" element={<Landing />} />
				<Route path="events" element={<EventsPage />} />
			</Route>
		</Routes>
	);
}

export default App;
