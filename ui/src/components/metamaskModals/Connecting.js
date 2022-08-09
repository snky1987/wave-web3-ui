import React from 'react';
import { Modal } from 'reactstrap';

export const Connecting = () => (
    <Modal isOpen>
        <div className="modal-header">
            <h5 className="modal-title">Metamask</h5>
        </div>
        <div className="modal-body">
            <p>Connecting to your Metamask wallet</p>
        </div>
    </Modal>
);
