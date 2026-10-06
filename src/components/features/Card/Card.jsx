import './Card.css';

export default function Card({ image, title, price, description, href = '#top' }) {
	return (
		<article className="card">
			<img className="card__image" src={image} alt="" width="264" height="176" loading="lazy" />
			<div className="card__content">
				<div className="card__header">
					<h3 className="card__title">{title}</h3>
					<p className="card__price">{price}</p>
				</div>
				<p className="card__description">{description}</p>
				<a className="card__action" href={href} aria-label={`Order a delivery for ${title}`}>Order a delivery</a>
			</div>
		</article>
	);
}