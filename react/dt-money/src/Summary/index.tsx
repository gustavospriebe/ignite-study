import { Container } from "./styles";
import entradas from "../assets/entradas.svg";
import money from "../assets/money.svg";
import saidas from "../assets/saidas.svg";
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../TransactionsContext";

interface SummaryProps {
    income: number;
    // outcome: number | bigint;
}

export function Summary() {
    const transactions = useContext(TransactionsContext);
    const [income, setIncome] = useState<SummaryProps[]>([]);
    const [outcome, setOutcome] = useState<SummaryProps[]>([]);

    const incomeValue = transactions.map((transaction) =>
        transaction.type === "deposit" ? transaction.amount : 0
    );

    const outcomeValue = transactions.map((transaction) =>
        transaction.type === "withdraw" ? transaction.amount : 0
    );

    useEffect(() => {
        setIncome(
            incomeValue.reduce((acc, transaction) => acc + transaction, 0)
        );
        setOutcome(
            outcomeValue.reduce((acc, transaction) => acc + transaction, 0)
        );
    }, [transactions]);

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
