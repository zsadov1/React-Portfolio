import React from "react";

function About() {
	return (
		<>
			<br></br>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<h1>I'm Zach.</h1>
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
					<div className='col-md-6'>
						<p className='text-justify'>
							I'm a native Richmonder. Upon my arrival into the adult world I
							was at a stalemate with what I wanted to do. I did the college
							thing for a little while and ultimately ended up working full
							time.I downloaded a few coding apps and I dipped my toes into the
							water, and found out it wasn't very cold. I really enjoyed the
							puzzles and solutions I was able to come up with. With this new
							found hobby I decided to take a dive and signed up for the the
							University of Richmond's Full Stack Bootcamp. When I'm not coding
							or at work I love to skateboard with my friends and play music.
						</p>
					</div>
					<div className='col-md-6'>
						<h2 className='text-left'>Technical Skills:</h2>
						<p className='text-left'>
							<span className='font-weight-bold'>Languages:</span>
							&nbsp;JavaScript, HTML, CSS, SQL
							<br />
							<span className='font-weight-bold'>JavaScript Libraries:</span>
							&nbsp;React, jQuery, Chart.js, Moment.js
							<br />
							<span className='font-weight-bold'>
								CSS Preprocessors Frameworks:
							</span>
							&nbsp;Bootstrap
							<br />
							<span className='font-weight-bold'>Databases:</span>
							&nbsp;MongoDB, MySQL
							<br />
							<span className='font-weight-bold'>Server-Side Development:</span>
							&nbsp;Node.js, Express, Handlebars, Mongoose, Sequelize,
							Passport.js
							<br />
							<span className='font-weight-bold'>Deployment:</span>
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
