import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from './store';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
}

export const Wrapper = ({ children }: any, initialState: any) => {
    const store = setupStore(initialState);
    return <Provider store={store}>{children}</Provider>;
};

export const renderWithProviders = (
    element: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {},
) => {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }
    return { store, ...render(element, { wrapper: Wrapper, ...renderOptions }) };
};
