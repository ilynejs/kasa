import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Hotel from '../pages/Hotel';

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
				path: '/hotel/:id',
				element: <Hotel />,
			},
		],
	},
]);

export default router;
