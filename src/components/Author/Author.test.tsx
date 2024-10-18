import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Author, { AuthorProps } from './Author';

const renderAuthor = (
    props: AuthorProps = {
        avatar: 'https://randomuser.me/api/portraits',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        gender: 'Male',
        onlineStatus: 'online',
    },
) => {
    return render(<Author {...props} />);
};

describe('Author tests', () => {
    test('Name was rendered', () => {
        renderAuthor();
        expect(screen.queryByText(`John Doe`)).toBeInTheDocument();
    });

    test('Status was rendered correct ly', () => {
        renderAuthor();
        expect(screen.queryByTitle('online')).toBeInTheDocument();
    });
});
