import React from "react";
import "../Header/header.css";

function Navbar() {
	return (
		<nav className='navbar navbar-light navbar-expand-md bg-light justify-content-between'>
			<div className='container-fluid'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='.dual-nav'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='navbar-collapse collapse dual-nav w-50 order-1 order-md-0'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<a className='nav-link pl-0' href='index.html'>
								Home <span className='sr-only'>Home</span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='project.html'>
								Projects
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='resume.html'>
								Resume
							</a>
						</li>
					</ul>
				</div>

				<div className='navbar-collapse collapse dual-nav w-50 order-2'>
					<ul className='nav navbar-nav ml-auto'>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='https://www.linkedin.com/in/zachary-sadovszky-b10a60196/'
							>
								<i className='fab fa-linkedin'></i>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='https://github.com/zsadov1'>
								<i className='fab fa-github'></i>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='mailto: zsadov1@gmail.com'>
								<i className='far fa-envelope'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
