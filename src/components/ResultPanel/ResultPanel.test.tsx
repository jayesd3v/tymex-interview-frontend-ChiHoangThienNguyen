import '@testing-library/jest-dom';
import { act, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../redux/storeTestUtil';
import ResultPanel from './ResultPanel';
import * as resultReducer from '../../redux/resultReducer';

const initialState = {
    filter: {
        keyword: '',
        tier: '',
        sortByTime: 'Latest',
        sortByPrice: 'Highest',
    },
    result: {
        data: [],
        loading: false,
        error: false,
        currentPage: 1,
        hasNext: true,
    },
};

const renderFilterPanel = (preloadedState: any = initialState) => {
    return renderWithProviders(<ResultPanel />, {
        preloadedState,
    });
};

describe('FilterPanel tests', () => {
    test('render notification when there is no result', async () => {
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve([]) })) as jest.Mock;
        renderFilterPanel();
        await waitFor(() => {
            expect(screen.getByText(/no results/i)).toBeInTheDocument();
        });
    });

    test('render skeleton cards when loading', async () => {
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve([]) })) as jest.Mock;
        renderFilterPanel({
            ...initialState,
            result: {
                ...initialState.result,
                loading: true,
            },
        });
        await waitFor(() => {
            expect(screen.getAllByTestId('skeleton-card').length).toBe(8);
        });
    });

    test('render cards when there is data', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve([
                        {
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
                    ]),
            }),
        ) as jest.Mock;
        renderFilterPanel();
        await waitFor(() => {
            expect(screen.getByText('[Premium] Bassketball Girl')).toBeInTheDocument();
        });
    });
});
