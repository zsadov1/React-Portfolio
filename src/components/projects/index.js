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
								<h5 class='card-title'>Carfree</h5>
								<p class='card-text small'>
									Carfree is a hyper-minimalist interface to provide the most
									concise answer to one of life’s most commonly asked and urgent
									questions: "Is it gone rain?"
								</p>
								<div class='button-container'>
									<button className=' mt-auto projectbutton'>Code</button>
									<button className='mt-auto projectbutton'>Demo</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={RollCall} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<h5 class='card-title'>Roll Call</h5>
								<p class='card-text small'>
									Roll Call allows caregivers in a childcare environment to keep
									a visual record of the children in their care, and to move
									children between caregivers, in real time.
								</p>
								<div class='button-container'>
									<button className=' mt-auto projectbutton'>Code</button>
									<button className='mt-auto projectbutton'>Demo</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={Lucidity} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<h5 class='card-title'>Lucidity.</h5>
								<p class='card-text small'>
									Where your mood and music meet. We have crated a music
									generator that gives you a song based on your current mood.
								</p>
								<div class='button-container'>
									<button className=' mt-auto projectbutton'>Code</button>
									<button className='mt-auto projectbutton'>Demo</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row rowborder'>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={Budget} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<h5 class='card-title'>Budget-Tracker</h5>
								<p class='card-text small'>
									An online/offline Progressive Web App that tracks account
									balance, withdrawals, and deposits. It can be downloaded and
									used online or offline due to the inclusion of an app manifest
									and service worker. Data entered in offline mode is stored
									client-side in IndexedDB, then stored server-side in MongoDB
									once online again. The app also uses compress…
								</p>
								<div class='button-container'>
									<button className=' mt-auto projectbutton'>Code</button>
									<button className='mt-auto projectbutton'>Demo</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={NoteTaker} class='card-img-top' alt='...' />
							<div class='d-flex flex-column card-body '>
								<h5 class='card-title'>Lucidity.</h5>
								<p class='card-text small'>
									Note taking app using Javascript, Express, and node JS.
								</p>
								<div class='button-container'>
									<button className=' mt-auto projectbutton'>Code</button>
									<button className='mt-auto projectbutton'>Demo</button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4 d-flex align-items-stretch'>
						<div class='card'>
							<img src={Userdirectory} class='card-img-top' alt='...' />
							<div class='card-body d-flex flex-column'>
								<h5 class='card-title'>User Directory</h5>
								<p class='card-text small'>
									A responsive, single-page React employee directory application
									that enables sorting and filtering employee data. The
									application uses React props, stateful and stateless
									components. The Bootstrap CSS framework is used for styling.
								</p>
								<div class='button-container'>
									<button className=' mt-auto projectbutton'>Code</button>
									<button className='mt-auto projectbutton'>Demo</button>
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
