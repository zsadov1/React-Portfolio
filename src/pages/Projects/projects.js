import React from "react";

function Projects() {
	return (
		<>
			<div className='row'>
				<div className='col-lg-4'>
					<div className='card'>
						{/* <img src="assets/images/Screenshot (25).png "className="card-img-top" alt="Day Planner"> */}
						<div className='card-body'>
							<h5 className='card-title'>.Lucidity</h5>
							<p className='card-text'>A music generator based on your mood.</p>
							<a
								href='https://zsadov1.github.io/Day-planner-5/'
								classNameclassName='btn btn-dark'
							>
								<i className='fas fa-headphones-alt fa-3x'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='col-lg-4'>
					<div className='card'>
						{/* <img src="assets/images/carfree.png"className="card-img-top" alt="Carfree"> */}
						<div className='card-body'>
							<h5 className='card-title'>Carfree</h5>
							<p className='card-text'>
								Carfree is a hyper-minimalist interface to provide the most
								concise answer to one of life’s most commonly asked and urgent
								questions: "Is it gone rain?"
							</p>
							<a
								href='https://marykatewhite.github.io/Project1/'
								classNameclassName='btn btn-dark'
							>
								<i className='fas fa-walking fa-3x'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='col-lg-4'>
					<div className='card'>
						{/* <img src="assets/images/passwordgenerator.png"className="card-img-top" alt="Random Password Generator"> */}
						<div className='card-body'>
							<h5 className='card-title'>Random Password Generator</h5>
							<p className='card-text'>
								This application can be used to generate a random password
								between 8 and 128 characters, using a slider. The user can
								choose how they want to construct their password. They have the
								choice of uppercase letters, lowercase letters, numeric
								characters, and special characters to construct the password.
								The password is then randomly generated when the generate button
								is clicked. They can also save the generated password to their
								clipboard, by pressing the copy to clipboard button.
							</p>
							<a
								href='https://zsadov1.github.io/Password-Generator-3/'
								classNameclassName='btn btn-dark'
							>
								<i className='fas fa-lock fa-3x'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='col-lg-4'>
					<div className='card'>
						{/* <img src="assets/images/dayplanner.png "className="card-img-top" alt="Day Planner"> */}
						<div className='card-body'>
							<h5 className='card-title'>Day Planner</h5>
							<p className='card-text'>
								This can be used to plan your work day from 9AM to 5pm. The task
								are stored to local storage and will stay in on the planner when
								the page is refreshed.
							</p>
							<a
								href='https://zsadov1.github.io/Day-planner-5/'
								classNameclassName='btn btn-dark'
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
