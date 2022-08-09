import React from 'react';
import { Container } from 'reactstrap';

export const Footer = () => (
    <footer className="footer footer-default">
        <Container>
            <div className="copyright" id="copyright">
                © {new Date().getFullYear()} Coded by{' '} Michal Malinowski
            </div>
        </Container>
    </footer>
);
