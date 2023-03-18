import { Container } from "./styles";
import entradas from "../assets/entradas.svg";
import money from "../assets/money.svg";
import saidas from "../assets/saidas.svg";
import { useTransaction } from "../TransactionsContext";

export function Summary() {
    const { transactions } = useTransaction();

    const income = transactions.reduce(
        (acc, transaction) =>
            transaction.type === "deposit" ? acc + transaction.amount : acc,
        0
    );
    const outcome = transactions.reduce(
        (acc, transaction) =>
            transaction.type === "withdraw" ? acc + transaction.amount : acc,
        0
    );

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(income)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="Saídas" />
                </header>
                <strong>
                    -{" "}
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(outcome)}
                </strong>
            </div>
            <div className="highlighted">
                <header>
                    <p>Total</p>
                    <img src={money} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(income - outcome)}
                </strong>
            </div>
        </Container>
    );
}
