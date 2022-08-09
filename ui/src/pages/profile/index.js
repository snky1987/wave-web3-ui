import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { SayHelloForm } from '../../components/SayHelloForm';

export const Profile = ({ isLoading, serverError }) => {
    const handleSubmit = (text) => {
        console.log('Submitted Container', text);
    };

    return (
        <div className="wrapper profile-page">
            <Header />
            <div className="section">
                <Container>
                    <div className="button-container" />
                    <h3 className="title">About me</h3>
                    <h5 className="description">
                        A Tech-lead level Web2 developer working with JS environment in front-end and back-end since 2012.
                        Currently aspiring to become a Web3 developer because I see the future of the internet in Web3
                    </h5>
                    <Row>
                        <Col className="ml-auto mr-auto">
                            <h4 className="title text-center mt-10">Send me inspiring quote</h4>
                            <SayHelloForm onSubmit={handleSubmit} isLoading={isLoading} serverError={serverError} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};
