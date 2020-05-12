import React from "react";
import Header from "../../components/header/header";

import "./aboutme.css";

function About() {
	return (
		<>
			&nbsp;
			<Header />
			<div className='container'>
				<div className='row'>
					<div className='text-center col-md-6'>
						<h1> Hi I'm Zach.</h1>
						&nbsp;
						<p>0.Full stack web developer</p>
						<p>1.Living in Richmond, Virginia.</p>
					</div>
					<div className='col-md-6'>
						<p className='text-left'>
							<br></br>I have a real passion creating applications and solving
							problems. I'm interested in the ever changing landscape of web
							development, and excited to play a role in future application
							utilization. I'm working towards my Certificate in Full Stack Web
							Development (MERN Stack) from the University of Richmond.
						</p>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<p className='text-justify'>
							I'm a native Richmonder. Upon my arrival into the adult world I
							was at a stalemate with what I wanted to do. I did the college
							thing for a little while and ultimately ended up working full
							time.I downloaded a few coding apps and dipped my toes into the
							water, and found out it wasn't very cold. I really enjoyed the
							puzzles and solutions I was able to come up with. With this new
							found hobby I decided to take a dive and signed up for the the
							University of Richmond's Full Stack Bootcamp. When I'm not coding
							or at work, I love to skateboard with my friends and play music.
						</p>
					</div>

					<div className='col-md-6'>
						<h2 className='text-center titleunderline'>Technical Skills</h2>
						<p className='text-center'>
							<h3 className=' titleunderline'>Languages</h3>
							&nbsp;JavaScript, HTML, CSS, SQL
							<br />
							<h3 className='titleunderline'>JavaScript Libraries</h3>
							&nbsp;React, jQuery, Chart.js, Moment.js, React Native
							<br />
							<h3 className='titleunderline'>CSS Preprocessors Frameworks</h3>
							&nbsp;Bootstrap, Materialize
							<br />
							<h3 className=' titleunderline'>Databases</h3>
							&nbsp;MongoDB, MySQL, Firebase
							<br />
							<h3 className=' titleunderline'>Server-Side Development</h3>
							&nbsp;Node.js, Express, Handlebars, Mongoose, Sequelize,
							Passport.js
							<br />
							<h3 className=' titleunderline'>Deployment</h3>
							&nbsp;Git, GitHub, Heroku, JawsDB
							<br />
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
