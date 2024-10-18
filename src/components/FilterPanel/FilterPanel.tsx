import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { resetFilter, setKeyword, setSortByPrice, setSortByTime, setTier } from '../../redux/filterReducer';
import { fetchResults, setData } from '../../redux/resultReducer';
import './filterPanel.css';

const tierOptions = ['Basic', 'Premium', 'Deluxe'];

const sortByTimeOptions = ['Latest', 'Oldest'];
const sortByPriceOptions = ['Highest', 'Lowest'];

const FilterPanel = () => {
    const { keyword, tier, sortByTime, sortByPrice } = useAppSelector((state) => state.filter);
    const { data, loading, error } = useAppSelector((state) => state.result);

    const dispatch = useAppDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (loading) {
            return;
        }

        dispatch(setData([]));

        dispatch(
            fetchResults({
                filters: {
                    keyword,
                    tier,
                    sortByPrice,
                    sortByTime,
                },
                nextPage: 1,
            }),
        );
    };

    const onFilterChange = (e: any) => {
        const { name, value } = e.target;
        let action;
        switch (name) {
            case 'tier':
                action = setTier;
                break;
            case 'sortByTime':
                action = setSortByTime;
                break;
            case 'sortByPrice':
                action = setSortByPrice;
                break;
            default:
                action = setKeyword;
                break;
        }

        dispatch(action(value));
    };

    const handleResetClick = () => {
        dispatch(resetFilter());
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='tier'>
                <Form.Label>Keyword</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Quick Search'
                    onChange={onFilterChange}
                    name='keyword'
                    value={keyword}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='tier'>
                <Form.Label>TIER</Form.Label>
                <Form.Select onChange={onFilterChange} name='tier' value={tier}>
                    <option>All</option>
                    {tierOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='time'>
                <Form.Label>TIME</Form.Label>
                <Form.Select onChange={onFilterChange} name='sortByTime' value={sortByTime}>
                    {sortByTimeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='price'>
                <Form.Label>PRICE</Form.Label>
                <Form.Select onChange={onFilterChange} name='sortByPrice' value={sortByPrice}>
                    {sortByPriceOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Row}>
                <Col xs={7}>
                    <Button className='reset-button py-0S' variant='' onClick={handleResetClick}>
                        <img src='/close.png' /> Reset
                    </Button>
                </Col>
                <Col xs={5}>
                    <Button disabled={loading} variant='primary' className='btn-block w-100' type='submit'>
                        Search
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default FilterPanel;
