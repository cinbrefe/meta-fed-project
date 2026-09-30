import logo from '../assets/logo-little-lemon.svg';

function Nav() {
	return (
		<nav>
			<img src={logo} alt="Little Lemon Logo" />
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/menu">Menu</a></li>
				<li><a href="/contact">Reservation</a></li>
				<li><a href="/order">Order Online</a></li>
				<li><a href="/login">Login</a></li>
			</ul>
		</nav>
	);
}

export default Nav;