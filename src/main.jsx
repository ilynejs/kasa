import './assets/styles/index.scss';
import { createRoot } from 'react-dom/client';
import router from './routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
