import React from 'react';
import { useMetaMask } from 'metamask-react';
import { Button, Col, Row } from 'reactstrap';
import { Connecting } from './metamaskModals/Connecting';

export const ConnectedComponent = ({ children }) => {
    const { status, connect } = useMetaMask();

    const handleConnect = async () => {
        try {
            await connect();
        } catch (e) {
            // Do nothing
        }
    };

    if (status === 'initializing') return null;
    if (status === 'connected') return children;

    return (
        <>
            {status === 'connecting' && <Connecting />}
            <Row>
                <Col className="ml-auto mr-auto">
                    <h4 className="title text-center mt-10">To use this feature you must connect your Metamask wallet</h4>
                </Col>
            </Row>
            <Row className="position-center">
                {status === 'unavailable' && (
                    <a className="btn btn-info" href="https://metamask.io/download/" target="_blank" rel="noreferrer">Get Metamask</a>
                )}
                {status !== 'unavailable' && (
                    <Button color="info" type="submit" disabled={status !== 'notConnected'} onClick={handleConnect}>
                        Connect Metamask wallet
                    </Button>
                )}
            </Row>
        </>
    );
};
