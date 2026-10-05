import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the little lemon landing page', () => {
	render(<App />);

	expect(
		screen.getByRole('heading', { name: /welcome to little lemon/i })
	).toBeInTheDocument();
	expect(
		screen.getByText(/your favorite greek restaurant in town/i)
	).toBeInTheDocument();
});
