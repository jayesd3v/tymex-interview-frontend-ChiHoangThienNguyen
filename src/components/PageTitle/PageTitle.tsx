import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageTitleProps } from './index.d';

const PageTitle = ({ title }: PageTitleProps) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [title, location]);

    return null;
};

export default PageTitle;
