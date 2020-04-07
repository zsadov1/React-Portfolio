import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../header/header.css";

function Header() {
	const location = useLocation();

	return (
		<header>
			<nav className='navbar navbar-expand-lg'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='.dual-nav'
					>
						<br></br>
						<span className='navbar-toggler-icon'>
							<i className='fas fa-hat-cowboy fa-lg'>
								<p className='howdy'>Howdy!</p>
							</i>
						</span>
					</button>

					<div className='navbar-collapse collapse dual-nav w-50 order-1 order-md-0'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link
									to='/'
									className={
										location.pathname === "/" ? "nav-link active" : "nav-link"
									}
								>
									Home.
								</Link>
							</li>

							<li className='nav-item'>
								<Link
									to='/projects'
									className={
										location.pathname === "/projects"
											? "nav-link active"
											: "nav-link"
									}
								>
									Projects.
								</Link>
							</li>

							<li className='nav-item'>
								<Link
									to='/resume'
									className={
										location.pathname === "/resume"
											? "nav-link active"
											: "nav-link"
									}
								>
									Resume.
								</Link>
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
		</header>
	);
}

export default Header;
