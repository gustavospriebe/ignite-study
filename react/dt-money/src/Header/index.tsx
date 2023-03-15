import { Component, Content } from "./styles";
import logo from "../assets/logo.svg";
import { useState } from "react";
import Modal from "react-modal";

export function Header() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Component>
            <Content>
                <img src={logo} alt="logoImg" />
                <button onClick={openModal}>Nova Transação</button>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                    <h1>oi</h1>
                </Modal>
            </Content>
        </Component>
    );
}
