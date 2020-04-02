import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/header";
import Project from "./components/Project/project";
import Navbar from "./components/Navbar/navbar";
// import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "./app.css";

function App() {
	return (
		<>
			{/* <Router> */}
			<div>
				<div>
					<Header />
					<Navbar />
					<Project />
					{/* <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} /> */}
				</div>
				<Footer />
			</div>
			{/* </Router> */}
		</>
	);
}
export default App;
