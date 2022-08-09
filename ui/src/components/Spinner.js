import React from 'react';
import { Spinner as ReactstrapSpinner } from 'reactstrap';

export const Spinner = () => (
    <div className="text-center">
        <ReactstrapSpinner type="grow" color="info" />
        <ReactstrapSpinner type="grow" color="info" />
        <ReactstrapSpinner type="grow" color="info" />
    </div>
);
