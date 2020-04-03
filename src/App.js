import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

import AboutMe from "../src/pages/AboutMe/aboutMe";
// import Projects from "./pages/Projects/projects";
// import Resume from "./pages/Resume/resume";

import "./app.css";

function App() {
	return (
		<>
			<Router>
				<div>
					<div>
						<Navbar />
						<Header />
						<Route exact path='/' component={AboutMe} />
						{/* <Route exact path='/projects' component={Projects} /> */}
						{/* <Route exact path='/contact' component={Contact} />  */}
					</div>
					<Footer />
				</div>
			</Router>
		</>
	);
}
export default App;
