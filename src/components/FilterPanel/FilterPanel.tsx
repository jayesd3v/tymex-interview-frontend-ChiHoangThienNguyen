import { Button, Col, Form, Row } from 'react-bootstrap';
import './filterPanel.css';
import React from 'react';

const tierOptions = ['Basic', 'Premium', 'Deluxe'];

const sortByTimeOptions = ['Latest', 'Oldest'];
const sortByPriceOptions = ['Highest', 'Lowest'];

const FilterPanel = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

    const onFilterChange = (e: any) => {
        const { name, value } = e.target;
        console.log('Filter Change', name, value);
    };

    return (
        <Form>
            <Form.Control type='text' placeholder='Quick Search' onChange={onFilterChange} name='keyword' />
            <Form.Group className='mb-3' controlId='tier'>
                <Form.Label>TIER</Form.Label>
                <Form.Select onChange={onFilterChange} name='tier'>
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
                <Form.Select onChange={onFilterChange} name='sortByTime'>
                    {sortByTimeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='price'>
                <Form.Label>PRICE</Form.Label>
                <Form.Select onChange={onFilterChange} name='sortByPrice'>
                    {sortByPriceOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Row}>
                <Col xs={7}>
                    <Button type='reset' className='reset-button py-0S' variant=''>
                        <img src='/close.png' /> Reset
                    </Button>
                </Col>
                <Col xs={5}>
                    <Button variant='primary' className='btn-block w-100'>
                        Search
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default FilterPanel;
