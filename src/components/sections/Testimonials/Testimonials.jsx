import { testimonialItems } from '../../../data/testimonials';
import CardGrid from '../../features/CardGrid/CardGrid';
import TestimonialCard from '../../features/TestimonialCard/TestimonialCard';

import './Testimonials.css';

export default function Testimonials() {
	return (
		<section id="testimonials" className="testimonials page-section">
			<div className="container testimonials__inner">
				<h2 className="testimonials__title">Testimonials</h2>
				<CardGrid
					items={testimonialItems}
					modifier="two-col"
					renderItem={(testimonial) => <TestimonialCard {...testimonial} />}
				/>
			</div>
		</section>
	);
}