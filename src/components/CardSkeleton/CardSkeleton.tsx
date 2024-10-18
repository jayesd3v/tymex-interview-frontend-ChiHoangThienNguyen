import { Col, Placeholder } from 'react-bootstrap';

const CardSkeleton = () => {
    return (
        <Col xs={12} md={6} lg={4} xl={3} data-testid='skeleton-card'>
            <div className='character-card p-2 rounded mb-3'>
                <Placeholder as='div' animation='glow' className='w-100'>
                    <Placeholder
                        xs={12}
                        style={{
                            height: '150px',
                            width: '100%',
                        }}
                    />
                </Placeholder>
                <Placeholder as='div' animation='glow' className='w-100 mt-4'>
                    <Placeholder
                        xs={12}
                        style={{
                            height: '20px',
                            width: '100%',
                        }}
                    />
                </Placeholder>

                <Placeholder as='div' animation='glow' className='w-100 mt-4'>
                    <Placeholder
                        xs={12}
                        style={{
                            height: '20px',
                            width: '100%',
                        }}
                    />
                </Placeholder>
            </div>
        </Col>
    );
};

export default CardSkeleton;
