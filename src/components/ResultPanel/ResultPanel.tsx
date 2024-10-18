import { Alert, Button, Row, Toast, ToastContainer } from 'react-bootstrap';
import Card from '../Card';
import { CardProps } from '../Card/Card';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './resultPanel.css';
import { fetchResults } from '../../redux/resultReducer';
import { useEffect, useMemo, useRef } from 'react';
import CardSkeleton from '../CardSkeleton';

const ResultPanel = () => {
    const scrollPanelRef = useRef<HTMLDivElement>(null);
    const { data, loading, error, nextPage, hasNext } = useAppSelector((state) => state.result);
    const filters = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();

    const handleViewMoreClick = () => {
        dispatch(
            fetchResults({
                filters,
                nextPage,
            }),
        );
    };

    const skeletonCards = useMemo(
        () =>
            loading ? (
                <>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </>
            ) : null,
        [loading],
    );

    useEffect(() => {
        if (scrollPanelRef.current) {
            scrollPanelRef.current.scrollTop = scrollPanelRef.current.scrollHeight;
        }
    }, [loading]);

    return (
        <>
            <div>
                <div className='scroll-panel' ref={scrollPanelRef}>
                    <Row>
                        {data.length ? (
                            data.map((card: CardProps) => <Card key={card.id} {...card} />)
                        ) : (
                            <>
                                {!error && (
                                    <div className='text-center w-100 py-5 text-white'>
                                        Sorry for the inconvenience, but there are no results to show.
                                    </div>
                                )}
                                {error && (
                                    <Alert variant='danger' className='w-100 text-center'>
                                        Something went wrong. Please try again.
                                    </Alert>
                                )}
                            </>
                        )}
                        {skeletonCards}
                    </Row>
                </div>
                {data.length && hasNext && (
                    <div className='text-center'>
                        <Button
                            disabled={loading}
                            variant='primary'
                            className='w-50 py-3 mt-4'
                            onClick={handleViewMoreClick}
                        >
                            View more
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ResultPanel;
