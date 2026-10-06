import { useState } from 'react';

import Modal from './components/features/Modal/Modal';
import BookingForm from './components/features/BookingForm/BookingForm';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';
import Menu from './components/sections/Menu/Menu';
import Testimonials from './components/sections/Testimonials/Testimonials';
import About from './components/sections/About/About';

function App() {
	const [isBookingOpen, setIsBookingOpen] = useState(false);
	const openBooking = () => setIsBookingOpen(true);
	const closeBooking = () => setIsBookingOpen(false);

	return (
		<>
			<Header onReserveClick={openBooking} />
			<main id="main-content">
				<Hero onReserveClick={openBooking} />
				<Menu />
				<Testimonials />
				<About />
			</main>
			<Footer onReserveClick={openBooking} />
			<Modal isOpen={isBookingOpen} onClose={closeBooking} title="Reserve a table">
				<BookingForm onComplete={closeBooking} />
			</Modal>
		</>
	);
}

export default App;
