import clsx from 'clsx';
import './newCharacterTile.css';

export interface NewCharacterTileProps {
    character: string;
    name: string;
    className?: string;
}

const NewCharacterTile = ({ character, name, className }: NewCharacterTileProps) => {
    return (
        <div className={clsx('new-character-tile me-5', className)}>
            <div className={clsx('character', character)}></div>
            <div className='name text-center'>{name}</div>
        </div>
    );
};

export default NewCharacterTile;
