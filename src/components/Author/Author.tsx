import clsx from 'clsx';
import './author.css';

export interface AuthorProps {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    avatar: string;
    onlineStatus: string;
    classNames?: string;
}

const Author = ({ firstName, lastName, email, avatar, onlineStatus, classNames }: AuthorProps) => {
    return (
        <div className={clsx('author d-flex', classNames)}>
            <div className='avatar'>
                <img src={avatar} alt='avatar' />
                <div className={clsx('status', onlineStatus)}></div>
            </div>
            <div className='name d-flex align-items-center ms-2'>
                {firstName} {lastName}
            </div>
        </div>
    );
};

export default Author;
