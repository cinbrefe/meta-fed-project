import aboutImage from '../../../assets/images/about-image.jpg';

import './About.css';

export default function About() {
	return (
		<section id="about" className="about page-section page-section--compact">
			<div className="container about__inner">
				<div className="about__content">
					<h2 className="about__title">
						Little Lemon
						<span className="about__location">Chicago</span>
					</h2>
					<p className="about__text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet, velit vitae pulvina bibendum, est nibh rhoncus. Morbi imperdiet, velit vitae pulvinar bibendum, est nibh rhoncus neque, at scelerisque augue velit vitae sem. Nam a tempor lectus, at varius eros. Maecenas fermentum, purus at faucibus lacinia, neque libero mattis ligula, quis fringilla nisi dolor nec sapien. Suspendisse sagittis libero lectus, a euismod tortor porta in.
					</p>
				</div>
				<img
					className="about__image"
					src={aboutImage}
					alt="Two Little Lemon chefs talking while preparing dishes in the kitchen"
					loading="lazy"
					width="370"
					height="367"
				/>
			</div>
		</section>
	);
}