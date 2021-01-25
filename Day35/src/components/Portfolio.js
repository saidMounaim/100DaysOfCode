import React from 'react';
import behance from '../images/social-media/behance.svg';
import dribble from '../images/social-media/dribble.svg';
import instagram from '../images/social-media/instagram.svg';
import linkedin from '../images/social-media/linkedin.svg';
import pinterest from '../images/social-media/pinterest.svg';
import MarkImg from '../images/mark.png';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<div className="leftSide">
				<small>Hello, I am</small>
				<h1>
					Mark <br />
					Reccardo
				</h1>
				<p>
					A young <span>UI/UX</span> designer with crazy for mobile & web design.
				</p>
				<div className="social-media">
					<h3>Find Me on</h3>
					<ul>
						<li>
							<a href="">
								<img src={behance} alt="behance" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={dribble} alt="dribble" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={instagram} alt="instagram" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={linkedin} alt="linkedin" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={pinterest} alt="pinterest" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="rightSide">
				<img src={MarkImg} alt="mark" />
			</div>
		</div>
	);
};

export default Portfolio;
