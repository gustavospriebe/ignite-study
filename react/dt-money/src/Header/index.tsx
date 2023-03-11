import { Component, Content } from "./styles";
import logo from "../assets/logo.svg";

export function Header() {
    return (
        <Component>
            <Content>
                <img src={logo} alt="logoImg" />
                <button>Nova Transação</button>
            </Content>
        </Component>
    );
}
