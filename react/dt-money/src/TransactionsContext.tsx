import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { api } from "./services/api";

interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        async function transactions() {
            const req = await api("transactions");
            setTransactions(req.data.transactions);
        }
        transactions();
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });

        const { transaction } = response.data;
        setTransactions((prevState) => [...prevState, transaction]);
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionsContext);

    return context;
}
