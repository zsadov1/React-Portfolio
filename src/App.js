import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import Zach from "./pages/Zach/zach";
import About from "./pages/AboutMe/aboutme";
import Projects from "./pages/Projects/projects";
// import Resume from "./pages/Resume/resume";

import "./app.css";

function App() {
	return (
		<>
			<Router>
				<div>
					<div>
						<Header />
						<Route exact path='/' component={Zach} />
						<Route exact path='/about' component={About} />
						<Route exact path='/projects' component={Projects} />
						{/* <Route exact path='/contact' component={Contact} />  */}
					</div>
					<Footer />
				</div>
			</Router>
		</>
	);
}
export default App;
