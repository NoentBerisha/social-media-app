import React from 'react';
import './Modal.css';

const Modal = ({ isVisible, title, content, onClose, onConfirm }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-content">
                    {content}
                </div>
                <div className="modal-actions">
                    <button onClick={onConfirm}>Confirm</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;