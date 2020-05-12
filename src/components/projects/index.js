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
						<div className='card'>
							<img src={Carfree} className='card-img-top' alt='...' />
							<div className='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 className='card-title'>Carfree</h5>
								</div>
								<div className='button-container'>
									<a
										href='https://zsadov1.github.io/Carfree/'
										className=' mt-auto projectbutton'>
										Demo.
									</a>
									<a
										href='https://github.com/zsadov1/Carfree'
										className=' mt-auto projectbutton'>
										Code.
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div className='card'>
							<img src={RollCall} className='card-img-top' alt='...' />
							<div className='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 className='card-title'>Roll Call</h5>
								</div>
								<div className='button-container'>
									<a
										href='https://roll-call-2020.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo.
									</a>
									<a
										href='https://github.com/josi3006/RollCall'
										className=' mt-auto projectbutton'>
										Code.
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div className='card'>
							<img src={Lucidity} className='card-img-top' alt='...' />
							<div className='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 className='card-title'>Lucidity.</h5>
								</div>
								<div className='button-container'>
									<a
										href='https://roll-call-2020.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo.
									</a>
									<a
										href='https://github.com/zsadov1/.Lucidity'
										className=' mt-auto projectbutton'>
										Code.
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row rowborder'>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div className='card .bg-transparent'>
							<img src={Budget} className='card-img-top' alt='...' />
							<div className='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 className='card-title'>Budget-Tracker</h5>
								</div>
								<div className='button-container'>
									<a
										href='https://budget-tracker-18.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo.
									</a>
									<a
										href='https://github.com/zsadov1/Budget-Tracker'
										className=' mt-auto projectbutton'>
										Code.
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div className='card'>
							<img src={NoteTaker} className='card-img-top' alt='...' />
							<div className='bg-transparent d-flex flex-column card-body '>
								<div className='projecttitle'>
									<h5 className='card-title'>Note Taker</h5>
								</div>
								<div className='button-container'>
									<a
										href='https://note-taker-11.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo.
									</a>
									<a
										href='https://github.com/zsadov1/Note-Taker-11'
										className=' mt-auto projectbutton'>
										Code.
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div className='card'>
							<img src={Userdirectory} className='card-img-top' alt='...' />
							<div className='card-body d-flex flex-column'>
								<div className='projecttitle'>
									<h5 className='card-title'>User Directory</h5>
								</div>
								<div className='button-container'>
									<a
										href='https://bowltrolls.herokuapp.com/'
										className=' mt-auto projectbutton'>
										Demo.
									</a>
									<a
										href='https://github.com/zsadov1/User-Directory'
										className=' mt-auto projectbutton'>
										Code.
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
