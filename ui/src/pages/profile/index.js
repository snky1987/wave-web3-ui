import React from 'react';
import { Container } from 'reactstrap';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ConnectedComponent } from '../../components/ConnectedComponent';
import { Messages } from '../../components/messages';

export const Profile = () => (
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
                <ConnectedComponent>
                    <Messages />
                </ConnectedComponent>
            </Container>
        </div>
        <Footer />
    </div>
);
