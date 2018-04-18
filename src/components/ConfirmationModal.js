import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
    <Modal
        isOpen={!!props.isOpen}
        contentLabel="Delete"
        ariaHideApp={false}
        closeTimeoutMS={200}
        onRequestClose={props.handleCloseModal}
        className="modal"
    >
        <h3 className="modal__title">Delete</h3>
        <p className="modal__body">Are you sure you want to delete <strong>{props.expenseDescription}?</strong></p>
        <button className="button" onClick={props.onRemove}>Remove</button>
        <button className="button--secondary button--inline" onClick={props.handleCloseModal}>Cancel</button>
    </Modal>
);

export default ConfirmationModal;