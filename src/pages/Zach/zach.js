import React from "react";
import Image from "react-image-resizer";
import Serious from "../Zach/serious.png";
import Question from "../Zach/question.png";
import Silly from "../Zach/silly.png";
import Excited from "../Zach/excited.png";

import "./zach.css";

function AboutMe() {
	return (
		<>
			<div className='container-fluid'>
				<div className='row text-center'>
					<div className='col-md-6'>
						<Image src={Question} width={350} height={350} />
						<p className='letters'>Z</p>
						<p>
							<i class='far fa-meh fa-lg'></i>
						</p>
					</div>
					<div className='col-md-6'>
						<Image src={Excited} width={350} height={350} />
						<p className='letters'>A</p>
						<p>
							<i class='far fa-grin-beam fa-lg'></i>
						</p>
					</div>
					<div className='col-md-6'>
						<Image src={Silly} width={350} height={350} />
						<p className='letters'>C</p>
						<p>
							<i class='far fa-laugh-squint fa-lg'></i>
						</p>
					</div>
					<div className='col-md-6'>
						<Image src={Serious} width={350} height={350} />
						<p className='letters'>H</p>
						<p>
							<i class='far fa-smile fa-lg'></i>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutMe;
