import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, service }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      <div
        ref={modalRef}
        tabIndex="-1"
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 animate-fadeIn"
      >

        <header className="flex justify-between items-center border-b pb-4">
          <h3 className="text-xl font-bold text-gray-800">
            {service.title}
          </h3>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
          >
            ×
          </button>
        </header>

        <main className="mt-5 text-gray-600 leading-relaxed">
          {service.description}
        </main>

        <footer className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-700 text-white hover:bg-cyan-800 transition"
          >
            Confirm
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;