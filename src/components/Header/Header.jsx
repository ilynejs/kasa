// import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	return (
		<header>
			<h1>Header</h1>

			<nav>
				<ul>
					<li>
						<NavLink to="/">Accueil</NavLink>
						{/* <Link>Test</Link> */}
					</li>

					<li>
						<NavLink to="/about">À propos</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
