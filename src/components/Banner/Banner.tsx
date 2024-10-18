import { Container } from 'react-bootstrap';
import NewCharacterTile from '../NewCharacterTile';
import './banner.css';
import clsx from 'clsx';
import { NewCharacterTileProps } from '../NewCharacterTile/NewcharacterTile';

const NEW_CHARACTERS: NewCharacterTileProps[] = [
    {
        character: 'thedj',
        name: 'THE DJ',
    },
    {
        character: 'assassin',
        name: 'ASSASSIN',
    },
    {
        character: 'basketball-girl',
        name: 'BASKETBALL GIRL',
    },
    {
        character: 'mafia-england',
        name: 'MAFIA ENGLAND',
    },
    {
        character: 'neon-guy',
        name: 'NEON GUY',
    },
];

const Banner = () => {
    const renderNewCharacters = () =>
        NEW_CHARACTERS.length && (
            <div className='mobile-scrollable-section pt-5 pb-5 ps-5'>
                <div className='d-flex'>
                    {NEW_CHARACTERS.map(({ character, name }: NewCharacterTileProps, index) => (
                        <NewCharacterTile
                            key={character}
                            character={character}
                            name={name}
                            className={clsx(index === 0 && 'd-lg-none')}
                        />
                    ))}
                </div>
            </div>
        );

    const renderSpotlightCharacter = () => {
        const { character } = NEW_CHARACTERS[0];
        return (
            <div className='d-none d-lg-block spotlight-character'>
                <div className='image' style={{ backgroundImage: `url(/${character}.png)` }}></div>
            </div>
        );
    };

    return (
        <div className='banner'>
            <div className='new-arrival'>
                <img src='/new-arrival.png' alt='new-arrival' />
            </div>
            <div className='banner-holder'>
                <Container className='pt-3 pt-xl-3'>
                    {renderNewCharacters()}
                    {renderSpotlightCharacter()}
                </Container>
            </div>
        </div>
    );
};

export default Banner;
