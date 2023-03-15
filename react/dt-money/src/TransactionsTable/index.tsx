import { useEffect, useState } from "react";
import { api } from "../sevices/api";
import { Container } from "./styles";

export function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function transactions() {
            const req = await api("transactions");
            setTransactions(req.data);
            console.log(req.data);
        }

        transactions();
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de sites</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>14/03/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.000</td>
                        <td>Desenvolvimento</td>
                        <td>10/03/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
