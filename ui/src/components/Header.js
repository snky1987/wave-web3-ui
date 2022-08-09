import React from 'react';
import { Container } from 'reactstrap';

export const Header = () => (
    <div className="page-header clear-filter">
        <div className="page-header-image"
            style={{
                backgroundImage: `url(${require('assets/img/backdrop.jpg')})`
            }}
        />
        <Container>
            <div className="photo-container">
                <img alt="..." src={require('assets/img/profile.jpg')} />
            </div>
            <h3 className="title">Michal Malinowski</h3>
            <p className="category">Tech-lead Web2 Developer & Aspiring Web3 Developer</p>
        </Container>
    </div>
);
