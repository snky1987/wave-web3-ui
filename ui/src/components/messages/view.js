import React from 'react';
import { Row, Col } from 'reactstrap';
import { Spinner } from '../Spinner';
import { MessagesForm } from './form';

export const MessagesView = ({ messages, processing, loading, putMessage, serviceError }) => {
    const handleSubmit = async (text) => {
        await putMessage(text);
    };
    const lastFive = [...messages].reverse().slice(0, 5);

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <MessagesForm onSubmit={handleSubmit} processing={processing} serverError={serviceError} messages={messages} />
            <Row>
                <Col className="ml-auto mr-auto">
                    <h4 className="title text-center mt-10">Last 5 inspiring quotes:</h4>
                </Col>
            </Row>
            <Row>
                <Col className="ml-auto mr-auto">
                    {(lastFive?.length > 0) && (
                        lastFive.map((message, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <blockquote className="blockquote text-right" key={`${index}_${message.sender}`}>
                                <p className="mb-0">
                                    {message.text}
                                </p>
                                <footer className="blockquote-footer">
                                    Sent by {message.sender}
                                </footer>
                            </blockquote>
                        ))
                    )}
                </Col>
            </Row>
        </>
    );
};
