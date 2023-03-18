import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./sevices/api";

interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        async function transactions() {
            const req = await api("transactions");
            setTransactions(req.data.transactions);
        }
        transactions();
    }, []);

    function createTransaction(transaction: TransactionInput) {
        api.post("/transactions", transaction);
    }

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}
