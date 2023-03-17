import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: "Freelance de website",
                    type: "deposit",
                    category: "Casa",
                    amount: 6000,
                    createdAt: new Date("2023-03-10 10:00"),
                },
                {
                    id: 2,
                    title: "Aluguel",
                    type: "withdraw",
                    category: "Despesa",
                    amount: 2000,
                    createdAt: new Date("2023-03-12 14:00"),
                },
            ],
        });
    },

    routes() {
        this.namespace = "api";

        this.get("/transactions", () => {
            return this.schema.all("transaction");
        });

        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create("transaction", data);
        });
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
