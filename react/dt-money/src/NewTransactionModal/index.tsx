import Modal from "react-modal";
import { Container } from "./styles";
Modal.setAppElement("#root");

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <Container>
                <h1>oi</h1>
            </Container>
        </Modal>
    );
}
