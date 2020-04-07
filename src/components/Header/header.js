import React from "react";
import Serious from "../header/serious.png";

import "./header.css";

function Header() {
	return (
		<>
			<div className='flex-container'>
				<img
					src={Serious}
					className='img-fluid headshot'
					alt='Serious Headshot'
				/>
			</div>
		</>
	);
}

export default Header;

// Hope this works
