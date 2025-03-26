import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeatureModal, setFeatureModal] = useState(false);

  const openModal = () => setIsOpen(true);
  const openFeatureModal = () => setFeatureModal(true);
  const closeModal = () => setIsOpen(false);
  const closeFeatureModal = () => setFeatureModal(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        isFeatureModal,
        openFeatureModal,
        closeFeatureModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
