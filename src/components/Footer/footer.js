import React from "react";
// import "./footer.css";

function Footer() {
	return (
		<footer id='lab_social_icon_footer'>
			<div className='text-center center-block'>
				<a href='https://www.linkedin.com/in/zachary-sadovszky-b10a60196/'>
					<i className='fab fa-linkedin fa-3x'></i>
				</a>
				<a href='https://github.com/zsadov1'>
					<i className='fab fa-github fa-3x'></i>
				</a>
				<a href='mailto:zsadov1@gmail.com'>
					<i className='far fa-envelope fa-3x'></i>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
