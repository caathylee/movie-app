import React from 'react';
import './ConfirmationModal.scss';

const confirmations = {
    YES: "Confirm",
    NO: "Cancel"
};
export const ConfirmationModal = (props) => {
    const { showModal, updateShowModal } = props;

    const handleClick = (buttonClicked) => {
        if (buttonClicked === confirmations.YES) {
            // add current movie to playlist
        } 

        // close modal when either button is clicked
        updateShowModal(false);
    };

    return showModal ? 
    (
    <div className="confirmation-modal">
        <p>Do you want to add this movie to the playlist?</p>
        <button onClick={() => { handleClick(confirmations.YES) }}>{confirmations.YES}</button>
        <button onClick={() => { handleClick(confirmations.NO) }}>{confirmations.NO}</button>
        <footer><p>My favorite color is blue.</p></footer>
    </div>) : 
    null;
};

export default { ConfirmationModal};