import { render, waitFor } from '@testing-library/react';
import PageTitle from './PageTitle';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useLocation: jest.fn().mockReturnValue({
        pathname: '/test-path',
        search: '',
        hash: '',
        state: null,
    }),
}));

describe('PageTitle tests', () => {
    test('title test', async () => {
        render(<PageTitle title='Test Page' />);
        await waitFor(() => {
            expect(document.title).toEqual('Test Page');
        });
    });
});
