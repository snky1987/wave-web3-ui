import React, { useState } from 'react';
import {
    Input,
    Form,
    FormGroup,
    FormText,
    Button,
    Alert,
    Row,
    Col
} from 'reactstrap';
import { useMetaMask } from 'metamask-react';

export const MessagesForm = ({ onSubmit, processing, serverError, messages }) => {
    const { account } = useMetaMask();
    const [input, setInput] = useState('');
    const [error, setError] = useState(serverError);
    const alreadySentMessage = messages.filter(msg => msg.sender.toLowerCase() === account.toLowerCase()).length > 0;

    const handleInputChange = (value) => {
        if (value.length > 255) {
            setError('Input exceeds max. 255 characters length');
        } else {
            setError('');
        }

        setInput(value);
    };
    const handleSubmit = () => {
        if (error) return;
        onSubmit(input);
    };

    if (alreadySentMessage) {
        return (
            <Row>
                <Col className="ml-auto mr-auto">
                    <h4 className="title text-center mt-10">
                        You already inspired me. I received { messages.length } inspirations so far :) Thank you!
                    </h4>
                </Col>
            </Row>
        );
    }

    return (
        <>
            <Row>
                <Col className="ml-auto mr-auto">
                    <h4 className="title text-center mt-10">Send me inspiring quote</h4>
                </Col>
            </Row>
            <Row>
                <Col className="form-container">
                    <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        <FormGroup>
                            {
                                error && (
                                    <Alert color="danger">
                                        {error}
                                    </Alert>
                                )
                            }
                            <Input type="textarea"
                                aria-describedby="textHelp"
                                id="text"
                                placeholder="Type here"
                                onChange={(e) => handleInputChange(e.target.value)}
                                disabled={processing}
                            />
                            <FormText className="text-muted" color="default" id="textHelp">
                                Doesn&apos;t need to be Web3 related but... ps. up to 255 characters please
                            </FormText>
                        </FormGroup>
                        {
                            processing ? (
                                <button className="btn btn-primary" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                    {' '}Loading...
                                </button>
                            ) : (
                                <Button color="primary" type="submit" disabled={!!error}>
                                    Submit
                                </Button>
                            )
                        }
                    </Form>
                </Col>
            </Row>
        </>
    );
};
