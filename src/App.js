import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

import Footer from "./components/footer/footer";

import Projects from "./pages/projects/projects";
import Resume from "./pages/resume/resume";
import Aboutme from "./pages/aboutme/aboutme";

import "./app.css";

function App() {
	return (
		<>
			<Router>
				<div>
					<div className='ContentDiv'>
						<Navbar />
						<Route exact path='/' component={Aboutme} />
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
