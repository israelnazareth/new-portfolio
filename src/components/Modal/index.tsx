import Modal from "react-modal";
import "./styles.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export function CertificateModal({ children, isOpen, onClose }: ModalProps) {
  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          margin: "auto",
          maxWidth: "50rem",
          height: "fit-content",
          borderRadius: "1.75rem",
        },
        overlay: {
          backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
      }}
    >
      {children}
    </Modal>
  );
}
