import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/navbar";
import Header from "../src/components/Header/header";
import Footer from "../src/components/Footer/footer";

import Projects from "../src/pages/Projects/projects";
import Resume from "../src/pages/Resume/resume";
import AboutMe from "../src/pages/Aboutme/aboutme";

import "./app.css";

function App() {
	return (
		<>
			<Router>
				<div>
					<div className='ContentDiv'>
						<Navbar />
						<Header />
						<Route exact path='/' component={AboutMe} />
						<Route exact path='/projects' component={Projects} />
						<Route exact path='/resume' component={Resume} />
					</div>
					<Footer />
				</div>
			</Router>
		</>
	);
}
export default App;
