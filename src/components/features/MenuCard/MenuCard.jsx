import './MenuCard.css';

export default function MenuCard({ image, title, price, description, href = '#top' }) {
	return (
		<article className="menu-card">
			<img className="menu-card__image" src={image} alt="" width="264" height="176" loading="lazy" />
			<div className="menu-card__content">
				<div className="menu-card__header">
					<h3 className="menu-card__title">{title}</h3>
					<p className="menu-card__price">{price}</p>
				</div>
				<p className="menu-card__description">{description}</p>
				<a className="menu-card__action" href={href} aria-label={`Order a delivery for ${title}`}>Order a delivery</a>
			</div>
		</article>
	);
}