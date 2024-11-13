import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<>
			<h1 className="error-title">404</h1>

			<p className="error-detail">
				Oups! La page que vous demandez n'existe pas.
			</p>

			<NavLink className="back" to="/">
				Retour à la page d'accueil
			</NavLink>
		</>
	);
};

export default ErrorPage;
