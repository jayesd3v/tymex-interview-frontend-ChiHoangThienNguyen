import HomePage from '../../pages/Home';
import MarketplacePage from '../../pages/Marketplace';

const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/marketplace',
        element: <MarketplacePage />,
    },
];

export default routes;
