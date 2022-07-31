import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EventsPage from "./pages/EventsPage/eventsPage";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navbar />}>
				<Route path="events" element={<EventsPage />} />
			</Route>
		</Routes>
	);
}

export default App;
