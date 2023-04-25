import { createContext, useState, useEffect, ReactNode } from "react";

const TasksContext = createContext();

function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    return (
        <div>
            <TasksContext.Provider value={
                {tasks,
                setTasks}
            }>
                {children}
            </TasksContext.Provider>
        </div>

    )

}

export { TasksProvider, TasksContext };
