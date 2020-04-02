import React from "react";
import "../Header/header.css";
import Headshot from "./serious-headshot.png";
import Image from "react-image-resizer";

function Header() {
	return (
		<header>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-6-lg'>
						<h1 className='text-center'>Howdy,</h1>
						<h1 className='text-center'>I'm Zach.</h1>
						<p className='text-center'> Full Stack Web Developer </p>
						<p className='text-center'>Richmond, Virginia</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
