import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner';
import BottomLines from '../components/BottomLines';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import FilterPanel from '../components/FilterPanel';
import ResultPanel from '../components/ResultPanel';

const MarketplacePage = () => {
    return (
        <>
            <PageTitle title='Marketplace' />
            <Header />
            <Banner />
            <Container className='py-5'>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        <FilterPanel />
                    </Col>
                    <Col xs={12} md={8} lg={9}>
                        <ResultPanel />
                    </Col>
                </Row>
            </Container>
            <BottomLines />
            <Footer />
        </>
    );
};

export default MarketplacePage;
