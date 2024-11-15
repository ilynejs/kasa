import Header from '@components/Header';
import Footer from '@components/Footer';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	// console.log(error);

	return (
		<>
			<Header />

			<div className="error__center">
				<h1 className="error__title">{error.status}</h1>

				<p className="error__details">
					Oups! La page que vous demandez n'existe pas.
				</p>

				<Link className="back" to="/">
					Retour à la page d'accueil
				</Link>
			</div>

			<Footer />
		</>
	);
};

export default ErrorPage;
