import "./global.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TasksProvider } from "./context/TasksContext";

function App() {
    return (
        <TasksProvider>
            <Header />
            <Tasks />
        </TasksProvider>
    );
}

export default App;
