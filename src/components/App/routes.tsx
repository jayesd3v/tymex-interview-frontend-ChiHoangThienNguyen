import HomePage from '../../pages/Home';
import MarketplacePage from '../../pages/Marketplace';

export default [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/marketplace',
        element: <MarketplacePage />,
    },
];
