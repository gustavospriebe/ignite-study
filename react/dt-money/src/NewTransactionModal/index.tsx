import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import incomeImg from "../assets/entradas.svg";
import closeImg from "../assets/fechar.svg";
import outcomeImg from "../assets/saidas.svg";
import { useTransaction } from "../TransactionsContext";
import { Container, TransactionTypeContainer, TypeButton } from "./styles";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const { createTransaction } = useTransaction();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("deposit");

    async function handleNewTransaction(e: FormEvent) {
        e.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        });

        setTitle("");
        setAmount(0);
        setCategory("");
        setType("");
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button>
                <img
                    src={closeImg}
                    alt="Fechar modal"
                    onClick={onRequestClose}
                    className="react-modal-close"
                />
            </button>

            <Container onSubmit={handleNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Preço"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <TransactionTypeContainer>
                    <TypeButton
                        type="button"
                        isActive={type === "deposit"}
                        onClick={() => setType("deposit")}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TypeButton>
                    <TypeButton
                        type="button"
                        isActive={type === "withdraw"}
                        onClick={() => setType("withdraw")}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TypeButton>
                </TransactionTypeContainer>
                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
