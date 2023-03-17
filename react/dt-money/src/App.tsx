import { GlobalStyle } from "./styles/global";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { useState } from "react";
import { NewTransactionModal } from "./NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

export function App() {
    const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setNewTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <GlobalStyle />
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
        </TransactionsProvider>
    );
}
