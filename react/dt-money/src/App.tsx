import { GlobalStyle } from "./styles/global";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";

export function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Dashboard />
        </>
    );
}
