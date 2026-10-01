import './Nav.css';
import logo from '../../assets/logo-little-lemon.svg';

function Nav() {
	return (
		<nav className="main-nav">
			<img src={logo} alt="Little Lemon Logo" className="nav-logo" />
			<ul className="nav-list">
				<li className="nav-item"><a href="/">Home</a></li>
				<li className="nav-item"><a href="/about">About</a></li>
				<li className="nav-item"><a href="/menu">Menu</a></li>
				<li className="nav-item"><a href="/contact">Reservation</a></li>
				<li className="nav-item"><a href="/order">Order Online</a></li>
				<li className="nav-item"><a href="/login">Login</a></li>
			</ul>
		</nav>
	);
}

export default Nav;