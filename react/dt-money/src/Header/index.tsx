import { Component, Content } from "./styles";
import logo from "../assets/logo.svg";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Component>
            <Content>
                <img src={logo} alt="logoImg" />
                <button onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Component>
    );
}
