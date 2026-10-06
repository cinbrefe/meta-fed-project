import './TestimonialCard.css';

export default function TestimonialCard({ rating, avatar, name, quote }) {
	return (
		<article className="testimonial-card">
			<img className="testimonial-card__avatar" src={avatar} alt="" width="100" height="100" loading="lazy" />
			<div className="testimonial-card__body">
				<p
					className="testimonial-card__rating"
					aria-label={`Rated ${rating} out of 5`}
					role="img"
				>
					{'★'.repeat(rating) + '☆'.repeat(5 - rating)}
				</p>
				<p className="testimonial-card__name">{name}</p>
				<blockquote className="testimonial-card__quote">
					<p>{quote}</p>
				</blockquote>
			</div>
		</article>
	);
}
