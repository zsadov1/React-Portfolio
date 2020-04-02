import React from "react";
import "../Header/header.css";

function Header() {
	return (
		<header>
			<div className='container'>
				<div className='jumbotron-fluid'>
					<h1 className='text-center'>Howdy, I'm Zach!</h1>
					<p className='text-center'> Full Stack Web Developer </p>
					<p className='text-center'>Richmond, Virginia</p>
				</div>
				<p>This is some text.</p>
				<p>This is another text.</p>
			</div>
		</header>
	);
}

export default Header;
