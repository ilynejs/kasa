import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Apartment from '../pages/Apartment';
import apartments from '@data/apartments.json';

const apartmentLoader = async ({ params }) => {
	const apartment = apartments.find(
		(apartment) => apartment.id === params.id
	);

	if (!apartment) {
		throw new Response('Not Found', { status: 404 });
	}

	return apartment;
};

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/',
					element: <Home />,
				},

				{
					path: '/about',
					element: <About />,
				},

				{
					path: '/apartment/:id',
					element: <Apartment />,
					loader: apartmentLoader,
				},

				{
					'/error': {
						element: <ErrorPage />,
					},
				},

				{
					'*': {
						element: <ErrorPage />,
					},
				},
			],
		},
	],
	{
		future: {
			v7_startTransition: true,
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true,
		},
	}
);

export default router;
