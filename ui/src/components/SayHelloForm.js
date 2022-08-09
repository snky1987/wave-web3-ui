import React, { useState } from 'react';
import {
    Input,
    Form,
    FormGroup,
    FormText,
    Button,
    Alert
} from 'reactstrap';

export const SayHelloForm = ({ onSubmit, isLoading, serverError }) => {
    const [loading, setLoading] = useState(isLoading);
    const [input, setInput] = useState('');
    const [error, setError] = useState(serverError);

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
        setLoading(true);
        onSubmit(input);
    };

    return (
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
                    disabled={loading}
                />
                <FormText className="text-muted" color="default" id="textHelp">
                    Doesn&apos;t need to be Web3 related but... ps. up to 255 characters please
                </FormText>
            </FormGroup>
            {
                loading ? (
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
    );
};
