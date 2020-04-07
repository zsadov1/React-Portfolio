import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Projects from "./pages/Projects/projects";
import Resume from "./pages/Resume/resume";
import Aboutme from "./pages/Aboutme/aboutme";

import "./app.css";

function App() {
	return (
		<>
			<Router>
				<div>
					<div className='ContentDiv'>
						<Navbar />
						<Header />
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
