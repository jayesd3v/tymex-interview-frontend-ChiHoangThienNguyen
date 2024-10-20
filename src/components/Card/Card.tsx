import { Col } from 'react-bootstrap';
import clsx from 'clsx';
import './card.css';
import Author, { AuthorProps } from '../Author/Author';

export interface CardProps {
    id: number;
    title: string;
    category: "Upper Body" | "Lower Body" | "Hat" | "Shoes" | "Accessory" | "Legendary" | "Mythic" | "Epic" | "Rare";
    price: number;
    isFavorite: boolean;
    createdAt: number;
    theme: "Dark" | "Light" | "Colorful" | "Halloween";
    tier: "Basic" | "Premium" | "Deluxe";
    imageId: number; // 1 -> 20 (integer)
    author: AuthorProps;
}

const Card = ({ title, category, price, isFavorite, theme, tier, imageId, author }: CardProps) => {
    return (
        <Col xs={12} md={6} lg={4} xl={3}>
            <div className='character-card p-2 rounded mb-3'>
                <div className={clsx('theme', theme.toLowerCase())}>
                    <div className='character' style={{ backgroundImage: `url(/images/${imageId}.png)` }}></div>
                    <div className='category'>{category}</div>
                    <div className={clsx('is-favorite', isFavorite && 'active')}>
                        <img src='/heart.svg' alt='love' />
                    </div>
                </div>
                <div className='d-flex mt-4'>
                    <div className='title'>[{tier}] {title}</div>
                    <div className='price ms-auto'>
                        <img src='/logos_ethereum.png' alt='ETH icon' /> {price}
                    </div>
                </div>
                <Author classNames='pt-3' {...author} />
            </div>
        </Col>
    );
};

export default Card;
