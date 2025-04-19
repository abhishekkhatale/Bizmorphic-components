import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, title, children, onConfirm, showActions = true }) => {
  const [animationClass, setAnimationClass] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setAnimationClass('animate-in');
    } else {
      setAnimationClass('animate-out');
      
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: animationClass === 'animate-in' ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  const modalStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    width: '100%',
    maxWidth: '28rem',
    margin: '0 1rem',
    padding: '1.5rem',
    animation: `${animationClass === 'animate-in' ? 'modalIn' : 'modalOut'} 0.3s forwards`,
  };

  const keyframesStyle = `
    @keyframes modalIn {
      from { opacity: 0; transform: translateY(-50px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes modalOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(50px); }
    }
  `;

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 600,
  };

  const closeButtonStyle = {
    color: '#6b7280',
    fontSize: '1.5rem',
    lineHeight: 1,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    padding: 0,
  };

  const closeButtonHoverStyle = {
    color: '#ef4444',
  };

  const contentStyle = {
    marginBottom: '1rem',
  };

  const actionsStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
  };

  const cancelButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#e5e7eb',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    border: 'none',
  };

  const cancelButtonHoverStyle = {
    backgroundColor: '#d1d5db',
  };

  const confirmButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    border: 'none',
  };

  const confirmButtonHoverStyle = {
    backgroundColor: '#1d4ed8',
  };

  const [isCloseHovered, setIsCloseHovered] = React.useState(false);
  const [isCancelHovered, setIsCancelHovered] = React.useState(false);
  const [isConfirmHovered, setIsConfirmHovered] = React.useState(false);

  if (!showModal) return null;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <button
              onClick={onClose}
              style={{
                ...closeButtonStyle,
                ...(isCloseHovered ? closeButtonHoverStyle : {})
              }}
              onMouseEnter={() => setIsCloseHovered(true)}
              onMouseLeave={() => setIsCloseHovered(false)}
            >
              &times;
            </button>
          </div>

          <div style={contentStyle}>{children}</div>

          {showActions && (
            <div style={actionsStyle}>
              <button
                onClick={onClose}
                style={{
                  ...cancelButtonStyle,
                  ...(isCancelHovered ? cancelButtonHoverStyle : {})
                }}
                onMouseEnter={() => setIsCancelHovered(true)}
                onMouseLeave={() => setIsCancelHovered(false)}
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                style={{
                  ...confirmButtonStyle,
                  ...(isConfirmHovered ? confirmButtonHoverStyle : {})
                }}
                onMouseEnter={() => setIsConfirmHovered(true)}
                onMouseLeave={() => setIsConfirmHovered(false)}
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;