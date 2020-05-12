import React from "react";

// import Header from "../../components/header/header";

import Serious from "./serious.jpg";
import Pro from "./pro.png";
import Happy from "./happy.jpg";

import "./aboutme.css";

function About() {
	return (
		<>
			&nbsp;
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<img src={Pro} className='img-fluid pro' />
					</div>
					<div className='col-md-6'>
						<div className='hi'>
							<h1> Hi,</h1>
							<h1> I'm</h1>
							<h1> Zach!</h1>
							&nbsp;
							<div className=' col-md-12 binary'>
								<p>0.Full Stack Web Developer</p>
								<p>1.Living in Richmond, Virginia.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<p className='brand'>
							I have a real passion creating applications and solving problems.
							I'm interested in the ever changing landscape of web development,
							and excited to play a role in future application utilization. I'm
							working towards my Certificate in Full Stack Web Development (MERN
							Stack) from the University of Richmond.
						</p>
					</div>
					<div className='col-md-6 '>
						<img src={Serious} className='img-fluid serious' />
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 '>
						<img src={Happy} className='img-fluid funny' />
					</div>
					<div className='col-md-6'>
						<p className='bio'>
							I'm a native Richmonder. Upon my arrival into the adult world I
							was at a stalemate with what I wanted to do. I did the college
							thing for a little while and ultimately ended up working full
							time.I downloaded a few coding apps and dipped my toes into the
							water, and found out it wasn't very cold. I really enjoyed the
							puzzles and solutions I was able to come up with. With this new
							found hobby I decided to take a dive and signed up for the the
							University of Richmond's Full Stack Bootcamp. When I'm not coding
							or at work, I love to skateboard, and play music, with my friends.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
