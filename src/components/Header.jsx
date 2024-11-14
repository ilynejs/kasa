import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<img
					src="/src/assets/img/logo-pink.png"
					alt="Logo Kasa"
					className="header__logo"
				/>
			</Link>

			<nav className="header__nav">
				<ul className="header__nav__list">
					<li className="header__nav__list-item">
						<NavLink to="/">Accueil</NavLink>
					</li>

					<li className="header__nav__list-item">
						<NavLink to="/about">A propos</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
