import './Hero.css';
import heroImage from '../../../assets/images/hero-image.jpg';

export default function Hero() {
	return (
		<section className="hero page-section--compact">
			<div className="container hero__inner">
				<div className="hero__content">
					<h1 className="hero__title">
						Little Lemon
						<span className="hero__location">Chicago</span>
					</h1>
					<p className="hero__text">
						We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
					</p>
					<button className="button button--primary hero__button">Reserve a Table</button>
				</div>
				<img className="hero__image" src={heroImage} alt="Little Lemon restaurant" />
			</div>
		</section>
	);
}