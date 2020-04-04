import React from "react";
import Image from "react-image-resizer";
import CarFree from "./carfree.png";
import Lucidity from "./lucidity.png";
import Password from "./passwordgenerator.png";
import Dayplanner from "./dayplanner.png";
import Fitness from "./fitnesstracket.png";
import "./projects.css";

function Projects() {
	return (
		<>
			<div className='flex-container'>
				<div className='col-md-6'>
					<div>
						<Image src={Lucidity} width={400} height={400} />
						<h5>.Lucidity</h5>
						<p>A music generator based on your mood.</p>
						<a
							href='https://zsadov1.github.io/Day-planner-5/'
							className='btn btn-dark'
						>
							<i className='fas fa-headphones-alt fa-3x'></i>
						</a>
					</div>
				</div>

				<div className='col-md-6'>
					<div>
						<Image src={CarFree} width={400} height={400} />
						<div>
							<h5>Carfree</h5>
							<p className='card-text'>
								Carfree is a hyper-minimalist interface to provide the most
								concise answer to one of life’s most commonly asked and urgent
								questions: "Is it gone rain?"
							</p>
							<a
								href='https://marykatewhite.github.io/Project1/'
								className='btn btn-dark'
							>
								<i className='fas fa-walking fa-3x'></i>
							</a>
						</div>
					</div>
				</div>

				<div className='col-md-6'>
					<div>
						<Image src={Password} width={400} height={400} />
						<div>
							<h5>Random Password Generator</h5>
							<p>
								This application can be used to generate a random password
								between 8 and 128 characters, using a slider.
							</p>
							<a
								href='https://zsadov1.github.io/Password-Generator-3/'
								className='btn btn-dark'
							>
								<i className='fas fa-lock fa-3x'></i>
							</a>
						</div>
					</div>
				</div>

				<div className='col-md-6'>
					<div>
						<Image src={Fitness} width={400} height={400} />
						<div>
							<h5>Fitness Tracker</h5>
							<p>
								A daily workout tracker that uses a Mongo database with a
								Mongoose schema and handles routes with Express. Users can
								create a new workout plan, add exercises to an existing workout
								plan, and view statistics about previous workouts
							</p>
							<a
								href='https://zsadov1.github.io/Password-Generator-3/'
								className='btn btn-dark'
							>
								<i className='fas fa-heartbeat fa-3x'></i>
							</a>
						</div>
					</div>
				</div>

				<div className='col-md-6'>
					<div>
						<Image src={Dayplanner} width={400} height={400} />
						<div>
							<h5>Day Planner</h5>
							<p>
								This can be used to plan your work day from 9AM to 5pm. The task
								are stored to local storage and will stay in on the planner when
								the page is refreshed.
							</p>
							<a
								href='https://zsadov1.github.io/Day-planner-5/'
								className='btn btn-dark'
							>
								<i className='far fa-calendar-check fa-3x'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
