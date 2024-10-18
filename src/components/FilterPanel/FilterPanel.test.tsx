import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../redux/storeTestUtil';
import FilterPanel from './FilterPanel';
import * as resultReducer from '../../redux/resultReducer';

const initialState = {
    filter: {
        keyword: '',
        tier: '',
        sortByTime: 'Latest',
        sortByPrice: 'Highest',
    },
    result: {
        loading: false,
    },
};

const renderFilterPanel = (preloadedState: any = initialState) => {
    return renderWithProviders(<FilterPanel />, {
        preloadedState,
    });
};

describe('FilterPanel tests', () => {
    test('render default form', () => {
        const { container } = renderFilterPanel();
        fireEvent.input(screen.getByTestId('keyword'), { target: { value: 'Search' } });
        fireEvent.change(screen.getByTestId('tier'), { target: { value: 'Deluxe' } });
        fireEvent.change(screen.getByTestId('sortByTime'), { target: { value: 'Oldest' } });
        fireEvent.change(screen.getByTestId('sortByPrice'), { target: { value: 'Lowest' } });

        expect(screen.getByTestId('keyword')).toHaveValue('Search');
        expect(screen.getByTestId('tier')).toHaveValue('Deluxe');
        expect(screen.getByTestId('sortByTime')).toHaveValue('Oldest');
        expect(screen.getByTestId('sortByPrice')).toHaveValue('Lowest');
    });

    test('able to reset form element', async () => {
        renderFilterPanel();
        act(() => {
            fireEvent.input(screen.getByTestId('keyword'), { target: { value: 'Search' } });
            fireEvent.change(screen.getByTestId('tier'), { target: { value: 'Deluxe' } });
            fireEvent.change(screen.getByTestId('sortByTime'), { target: { value: 'Oldest' } });
            fireEvent.change(screen.getByTestId('sortByPrice'), { target: { value: 'Lowest' } });
            fireEvent.click(screen.getByText(/Reset/i));
        });
        expect(screen.getByTestId('keyword')).toHaveValue('');
        expect(screen.getByTestId('tier')).toHaveValue('All');
        expect(screen.getByTestId('sortByTime')).toHaveValue('Latest');
        expect(screen.getByTestId('sortByPrice')).toHaveValue('Highest');
    });

    test('form submission working correctly', () => {
        renderFilterPanel();
        const resetResult = jest.spyOn(resultReducer, 'resetResult');
        const fetchResults = jest.spyOn(resultReducer, 'fetchResults');
        act(() => {
            fireEvent.click(screen.getByText('Search'));
        });
        expect(resetResult).toHaveBeenCalled();
        expect(fetchResults).toHaveBeenCalled();
    });

    test('prevent form submission when loading result', () => {
        renderFilterPanel({
            ...initialState,
            result: {
                loading: true,
            }
        });
        const resetResult = jest.spyOn(resultReducer, 'resetResult');
        const fetchResults = jest.spyOn(resultReducer, 'fetchResults');
        act(() => {
            fireEvent.click(screen.getByText('Search'));
        });
        expect(resetResult).not.toHaveBeenCalled();
        expect(fetchResults).not.toHaveBeenCalled();
    });
});
