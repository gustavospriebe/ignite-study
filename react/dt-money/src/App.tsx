import { GlobalStyle } from "./styles/global";
import { Header } from "./Header";


export function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header />
            <h1>Hello World</h1>
        </div>
    );
}
