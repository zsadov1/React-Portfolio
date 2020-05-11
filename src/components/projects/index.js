import React from "react";

import "./style.css";

import Carfree from "./carfree.png";
import RollCall from "./rollcall.png";
import Lucidity from "./lucidity.png";
import Budget from "./budget.png";
import NoteTaker from "./notetaker.png";
import Userdirectory from "./userdirectory.png";

function ProjectComponent() {
	return (
		<>
			<div className='container'>
				<div className='row rowborder'>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={Carfree} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 class='card-title'>Carfree</h5>
								</div>
								<div class='button-container'>
									<a
										href='https://zsadov1.github.io/Carfree/'
										className=' mt-auto projectbutton'>
										Demo
									</a>
									<a
										href='https://github.com/zsadov1/Carfree'
										className=' mt-auto projectbutton'>
										Code
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={RollCall} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 class='card-title'>Roll Call</h5>
								</div>
								<div class='button-container'>
									<a
										href='https://roll-call-2020.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo
									</a>
									<a
										href='https://github.com/josi3006/RollCall'
										className=' mt-auto projectbutton'>
										Code
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={Lucidity} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 class='card-title'>Lucidity.</h5>
								</div>
								<div class='button-container'>
									<a
										href='https://roll-call-2020.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo
									</a>
									<a
										href='https://github.com/zsadov1/.Lucidity'
										className=' mt-auto projectbutton'>
										Code
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row rowborder'>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card .bg-transparent'>
							<img src={Budget} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 class='card-title'>Budget-Tracker</h5>
								</div>
								<div class='button-container'>
									<a
										href='https://budget-tracker-18.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo
									</a>
									<a
										href='https://github.com/zsadov1/Budget-Tracker'
										className=' mt-auto projectbutton'>
										Code
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={NoteTaker} class='card-img-top' alt='...' />
							<div class='bg-transparent d-flex flex-column card-body '>
								<div className='projecttitle'>
									<h5 class='card-title'>Note Taker</h5>
								</div>
								<div class='button-container'>
									<a
										href='https://note-taker-11.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo
									</a>
									<a
										href='https://github.com/zsadov1/Note-Taker-11'
										className=' mt-auto projectbutton'>
										Code
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={Userdirectory} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 class='card-title'>User Directory</h5>
								</div>
								<div class='button-container'>
									<a
										href='https://bowltrolls.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo
									</a>
									<a
										href='https://github.com/zsadov1/User-Directory'
										className=' mt-auto projectbutton'>
										Code
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default ProjectComponent;
