import React from "react";
import "./project.css";
function Project() {
	return (
		<div className='box'>
			<div className='col-lg-4'>
				<div
					id='carouselExampleSlidesOnly'
					className='carousel slide'
					data-ride='carousel'
				>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<img
								src='../public/BW(2).jpeg'
								className='d-block w-100'
								alt='...'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='../public/BW(2).jpeg'
								className='d-block w-100'
								alt='...'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='../public/BW(2).jpeg'
								className='d-block w-100'
								alt='...'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Project;
