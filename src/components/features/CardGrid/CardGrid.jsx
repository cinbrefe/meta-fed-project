import Card from '../Card/Card';

import './CardGrid.css';

export default function CardGrid({ items = [] }) {
	return (
		// role="list" restores list semantics in Safari/VoiceOver, which drops them when list-style is none
		// eslint-disable-next-line jsx-a11y/no-redundant-roles
		<ul className="card-grid" role="list">
			{items.map(({ id, ...item }) => (
				<li className="card-grid__item" key={id}>
					<Card {...item} />
				</li>
			))}
		</ul>
	);
}