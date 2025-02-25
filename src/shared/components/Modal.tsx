import React, { useEffect, useRef } from "react";
import { XIcon } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  size = "md", 
  children 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleEsc);
    
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Handle click outside to close
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Determine width based on size prop
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl"
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
        onClick={handleOutsideClick}
      ></div>
      
      {/* Modal Container */}
      <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
        <div
          ref={modalRef}
          className={`relative bg-white rounded-xl shadow-2xl transform transition-all sm:my-8 sm:w-full ${sizeClasses[size]} overflow-hidden`}
        >
          {/* Modal Header */}
          {title && (
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 
                className="text-lg font-medium leading-6 text-gray-900"
                id="modal-title"
              >
                {title}
              </h3>
            </div>
          )}
          
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded-full"
            onClick={onClose}
            aria-label="Close"
          >
            <XIcon className="h-5 w-5" />
          </button>
          
          {/* Modal Content */}
          <div className={`px-6 py-4 ${!title ? 'pt-8' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;