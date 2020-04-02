import React from "react";
import "../Header/header.css";

function Header() {
	return (
		<header>
			<div className='container'>
				<div class='jumbotron'>
					<h1 className='text-center'>Howdy, I'm Zach.</h1>
					<p className='text-center'> Full Stack Web Developer </p>
					<p className='text-center'>Richmond, Virginia</p>
					<br></br>
				</div>
			</div>
		</header>
	);
}

export default Header;
