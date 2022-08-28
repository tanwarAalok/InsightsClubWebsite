import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import EventsPage from "./pages/EventsPage/eventsPage";
import Landing from "./components/Landing/Landing";
import About from "./components/AboutPage/About";
import VideoPage from "./components/VideoPage/Video";
import BlogsLanding from "./pages/BlogsLanding/BlogsLanding";
import ArticleLanding from "./pages/ArticleLanding/ArticleLanding";
import DetailedArticle from "./components/Articles/DetailedArticles/DetailedArticle";
import EventDetails from "./components/DetailEvent/eventDetails";
import Create from "./components/Blogs/CreateBlog/Create";

export const UserContext = createContext();

function App() {
	const [userId, setUserId] = useState("");
	return (
		<UserContext.Provider value={(userId, { setUserId })}>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route exact path='' element={<Landing />} />
					<Route path='events' element={<EventsPage />} />
					<Route path='event/:id' element={<EventDetails />} />
					<Route path="about" element={<About />} />
					<Route path='videos' element={<VideoPage />} />
					<Route path='articles' element={<ArticleLanding />} />
					<Route path='article/:id' element={<DetailedArticle />} />
				</Route>
				<Route path='blogs' element={<BlogsLanding />} />
				<Route path='write' element={<Create />} />
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
