import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

export default function Modal({ isOpen, onClose, title, children }) {
	const dialogRef = useRef(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (isOpen && !dialog.open) dialog.showModal();
		if (!isOpen && dialog.open) dialog.close();
	}, [isOpen]);

	const handleClick = (e) => {
		if (e.target === dialogRef.current) onClose();
	};

	return createPortal(
		<dialog
			ref={dialogRef}
			className="modal"
			aria-labelledby="modal-title"
			onClose={onClose}
			onClick={handleClick}
		>
			<div className="modal__content">
				<header className="modal__header">
					<h2 id="modal-title" className="modal__title">{title}</h2>
					<button type="button" className="modal__close" aria-label="Close" onClick={onClose}>
						×
					</button>
				</header>
				{children}
			</div>
		</dialog>,
		document.getElementById('modal')
	);
}
