import heroImage from '../../../assets/images/hero-image.jpg';

import './Hero.css';

export default function Hero({ onReserveClick }) {
	return (
		<section className="hero page-section page-section--compact">
			<div className="container hero__inner">
				<div className="hero__content">
					<h1 className="hero__title">
						Little Lemon
						<span className="hero__location">Chicago</span>
					</h1>
					<p className="hero__text">
						We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
					</p>
					<button
						type="button"
						className="button button--primary hero__button"
						onClick={onReserveClick}
					>
						Reserve a Table
					</button>
				</div>
				<img className="hero__image" src={heroImage} alt="Little Lemon restaurant" />
			</div>
		</section>
	);
}