import React from "react";
import Image from "react-image-resizer";
import Serious from "../Header/serious.png";
import Question from "../Header/question.png";
import Silly from "../Header/silly.png";
import Excited from "../Header/excited.png";
import "../Header/header.css";

function Header() {
	return (
		<header>
			<div className='container-fluid'>
				<div className='row mood-pics'>
					<div className='col-md-6'>
						<div className='center-pics'>
							<Image src={Question} width={300} height={300} />
							<p className='letters'>Z</p>
							<Image src={Excited} width={300} height={300} />
							<p className='letters'>A</p>
						</div>
					</div>
					<div className='col-md-6'>
						<Image src={Silly} width={300} height={300} />
						<p className='letters'>C</p>
						<Image src={Serious} width={300} height={300} />
						<p className='letters'>H.</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
