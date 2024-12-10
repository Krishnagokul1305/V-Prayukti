import { createPortal } from "react-dom";
import { MdOutlineClear } from "react-icons/md";
import useClickDetect from "../hooks/useClickDetect";
import { createContext, useContext, useState, cloneElement } from "react";

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: open });
}

function Window({ children }) {
  const { isOpen, close } = useContext(ModalContext);
  const ref = useClickDetect(() => close());

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 w-full h-screen bg-stone-950 bg-opacity-50 backdrop-blur-sm z-50" />

      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] w-[90%] md:max-w-7xl bg-black rounded-lg shadow-lg p-5 z-50 border border-secondary overflow-auto no-scrollbar"
      >
        <div className="flex items-center justify-between gap-5 border-b py-2 border-secondary">
          <h1 className="text-lg md:text-2xl">
            Accept the Terms and Conditions
          </h1>
          <button className="block ms-auto mb-1" onClick={close}>
            <MdOutlineClear className="size-5" />
          </button>
        </div>
        {cloneElement(children, { onClose: close })}
      </div>
    </>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
