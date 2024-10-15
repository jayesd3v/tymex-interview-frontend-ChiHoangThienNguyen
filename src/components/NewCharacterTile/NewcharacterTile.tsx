import clsx from 'clsx';
import { NewCharacterTileProps } from './index.d';
import './newCharacterTile.css';

const NewCharacterTile = ({ character, name, className }: NewCharacterTileProps) => {
    return (
        <div className={clsx('new-character-tile me-5', className)}>
            <div className='character' style={{ backgroundImage: `url(/${character}.png)` }}></div>
            <div className='name text-center'>{name}</div>
        </div>
    );
};

export default NewCharacterTile;
