import "./styles.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    isOpen && (
      <div className="modal-wrapper" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  );
}
