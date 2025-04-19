import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, children, onConfirm, showActions = true }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-red-500 text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            <div className="mb-4">{children}</div>

            {showActions && (
              <div className="flex justify-end space-x-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
