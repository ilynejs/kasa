import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Apartment from '../pages/Apartment';

const router = createBrowserRouter([
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
]);

export default router;
