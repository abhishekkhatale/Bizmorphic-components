import React, { useState } from 'react';
import Modal from '../components/Modal';

const Testmodal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
    alert("Confirmed!");
    setModalOpen(false);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => setModalOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        title="Confirm gender"
        children="Are you a male?"
      />
        
     
    </div>
  );
};

export default Testmodal;
