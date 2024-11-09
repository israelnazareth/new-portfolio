import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./styles.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export function CertificateModal({ children, isOpen, onClose }: ModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      classNames={{ modal: "modal" }}
      center
    >
      {children}
    </Modal>
  );
}
