import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewCharacterTile, { NewCharacterTileProps } from './NewcharacterTile';

const renderNewCharacterTile = (
    props: NewCharacterTileProps = {
        character: 'thedj',
        name: 'The DJ',
    },
) => render(<NewCharacterTile {...props} />);

describe('NewCharacterTile tests', () => {
    test('Name was rendered', () => {
        renderNewCharacterTile();
        expect(screen.getByText('The DJ')).toBeInTheDocument();
    });
});
