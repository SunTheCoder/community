import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './LoginModal.css'

const LoginModal = ({ show, handleClose, children }) => {
  if (!show) return null; // Hide the modal if show is false

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
      </div>
        <button className="close-button" onClick={handleClose}>
          X
        </button>
    </div>
  );
};

// Add PropTypes validation
LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoginModal;

