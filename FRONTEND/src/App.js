import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EventsPage from "./pages/EventsPage/eventsPage";
import Landing from "./components/Landing/Landing";
import VideoPage from "./components/VideoPage/Video";
import BlogsLanding from "./pages/BlogsLanding/BlogsLanding";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navbar />}>
				<Route exact path='' element={<Landing />} />
				<Route path='events' element={<EventsPage />} />
				<Route path='videos' element={<VideoPage />} />
			</Route>
			<Route path='blogs' element={<BlogsLanding />} />
		</Routes>
	);
}

export default App;
