import './CardGrid.css';

// modifier: optional layout variant, e.g. "two-col" → .card-grid--two-col
export default function CardGrid({ items = [], renderItem, modifier }) {
	return (
		<ul className={`card-grid${modifier ? ` card-grid--${modifier}` : ''}`}>
			{items.map(({ id, ...item }) => (
				<li className="card-grid__item" key={id}>
					{renderItem(item)}
				</li>
			))}
		</ul>
	);
}