import React from 'react';
import './ConfirmationModal.scss';

const Confirmations = {
    YES: "Confirm",
    NO: "Cancel"
};

export const ConfirmationModal = (props) => {
    const { showModal, updateShowModal, movieInfo, updatePlaylist } = props;

    const handleClick = (buttonClicked) => {
        if (buttonClicked === Confirmations.YES) {
            // add current movie to playlist
            updatePlaylist(movieInfo);
        } 

        // close modal when either button is clicked
        updateShowModal(false);
    };

    return showModal ? 
    (
    <div className="confirmation-modal">
        <p>Do you want to add <strong className="movie-title">{movieInfo.Title}</strong> to the playlist?</p>
        <button onClick={() => { handleClick(Confirmations.YES) }}>{Confirmations.YES}</button>
        <button onClick={() => { handleClick(Confirmations.NO) }}>{Confirmations.NO}</button>
        <footer><p>My favorite color is blue.</p></footer>
    </div>) : 
    null;
};

export default ConfirmationModal;