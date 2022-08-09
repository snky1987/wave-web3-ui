import React from 'react';
import { Container } from 'reactstrap';

export const Header = () => {
    const pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                const windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform = `translate3d(0,${windowScrollTop}px,0)`;
            };
            window.addEventListener('scroll', updateScroll);
            return () => window.removeEventListener('scroll', updateScroll);
        }
    });
    return (
        <div className="page-header clear-filter"
            filter-color="blue"
        >
            <div className="page-header-image"
                style={{
                    backgroundImage: `url(${require('assets/img/backdrop.jpg')})`
                }}
                ref={pageHeader}
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
};
