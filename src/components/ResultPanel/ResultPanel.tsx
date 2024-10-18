import { Alert, Button, Row } from 'react-bootstrap';
import Card from '../Card';
import { CardProps } from '../Card/Card';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './resultPanel.css';
import { fetchResults } from '../../redux/resultReducer';
import { useEffect, useMemo, useRef } from 'react';
import CardSkeleton from '../CardSkeleton';

const { REACT_APP_AUTO_REFRESH_INTERVAL } = process.env;

const ResultPanel = () => {
    const scrollPanelRef = useRef<HTMLDivElement>(null);
    const { data, loading, error, currentPage, hasNext } = useAppSelector((state) => state.result);
    const filters = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();

    const loadData = (nextPage:number, replace:boolean = false) =>
        dispatch(
            fetchResults({
                filters,
                nextPage,
                replace,
            }),
        );

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
        loadData(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            loadData(currentPage, true);
        }, parseInt(REACT_APP_AUTO_REFRESH_INTERVAL as string));

        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    useEffect(() => {
        if (scrollPanelRef.current && currentPage > 1) {
            scrollPanelRef.current.scrollTop = scrollPanelRef.current.scrollHeight;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                {!error && !loading && (
                                    <div className='text-center w-100 py-5 text-white'>
                                        There are no results for your search.
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
                            onClick={() => loadData(currentPage + 1)}
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
