import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card, { CardProps } from './Card';

const renderCard = (
    props: CardProps = {
        id: 30,
        title: 'Bassketball Girl',
        category: 'Rare',
        price: 199.79,
        isFavorite: true,
        createdAt: 1693738981000,
        theme: 'Dark',
        tier: 'Premium',
        imageId: 10,
        author: {
            firstName: 'Halsy',
            lastName: 'McGeown',
            email: 'hmcgeowna@bloglovin.com',
            gender: 'Male',
            avatar: 'https://robohash.org/minimasedmolestias.png?size=100x100&set=set1',
            onlineStatus: 'busy',
        },
    },
) => render(<Card {...props} />);

describe('Card tests', () => {
    test('should contain general info', () => {
        renderCard();
        expect(screen.queryByText('[Premium] Bassketball Girl')).toBeInTheDocument();
        expect(screen.queryByText('199.79')).toBeInTheDocument();
        expect(screen.queryByText('Halsy McGeown')).toBeInTheDocument();
        expect(screen.queryByText('Rare')).toBeInTheDocument();
    });
});
