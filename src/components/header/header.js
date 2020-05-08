import React from "react";
import Pro from "../header/serious.png";

import "./header.css";

function Header() {
	return (
		<>
			<div className='flex-container'>
				<img src={Pro} className='img-fluid headshot' alt='Serious Headshot' />
			</div>
		</>
	);
}

export default Header;
