import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import BlogsLanding from "./pages/BlogsLanding/BlogsLanding";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/blogs' element={<BlogsLanding />} />
		</Routes>
	);
}

export default App;
