import { Container } from "./styles";
import entradas from "../assets/entradas.svg";
import money from "../assets/money.svg";
import saidas from "../assets/saidas.svg";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="Saídas" />
                </header>
                <strong>-R$ 500,00</strong>
            </div>
            <div className="highlighted">
                <header>
                    <p>Total</p>
                    <img src={money} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}
