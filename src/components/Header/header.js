import React from "react";
import "../Header/header.css";

function Header() {
	return (
		<div className='container'>
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
						<a className='nav-link pl-0' href='/'>
							About Me.
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/Projects'>
							Projects.
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/'>
							Resume.
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
	);
}

export default Header;
