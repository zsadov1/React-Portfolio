import React from "react";
// import Image from "react-image-resizer";
import Serious from "../Header/serious.png";
import Question from "../Header/question.png";
import Silly from "../Header/silly.png";
import Excited from "../Header/excited.png";

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
