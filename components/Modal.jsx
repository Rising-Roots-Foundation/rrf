import React from 'react'
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onClose, children, contentLabel = 'Modal' }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel={contentLabel}
        className="relative bg-white rounded-lg max-w-xl w-3/4 p-6 outline-none mx-3"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-lg hover:text-gray-700 focus:outline-none bg-red-200 w-8 h-8 text-red-600 font-medium-geist"
        >
          ✕
        </button>
        {children}
      </Modal>
    );
  };

export default ModalComponent
