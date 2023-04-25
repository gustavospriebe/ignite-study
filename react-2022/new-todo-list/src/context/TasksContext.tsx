import React, { createContext, useState } from "react";

export interface Tasks {
    title: string;
    completed: boolean;
}

export interface TasksContextType {
    tasks: Tasks[];
    createTasks?: (value: string) => void;
    completeTasks?: (taskTitle: string) => void;
    deleteTasks?: (taskTitle: string) => void;
}

interface Props {
    children: React.ReactNode;
}

// {
//     tasks: [],
//     createTasks: () => null,
//     completeTasks: () => null,
// }

// const DEFAULT_VALUE = {
//     tasks: [
//         {
//             title: "Teste desdhjisji",
//             completed: true,
//         },
//         {
//             title: "Lorem ipsum dolor sit amet asdifjasdijfdiosa oasdfjasd ojfoasd",
//             completed: true,
//         },
//         {
//             title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//             completed: false,
//         },
//     ],
// };

const TasksContext = createContext<TasksContextType>({ tasks: [] });

const TasksProvider: React.FC<Props> = ({ children }) => {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    const createTasks = (value: string) => {
        setTasks((prevState) => [
            ...prevState,
            {
                title: value,
                completed: false,
            },
        ]);
    };

    const completeTasks = (taskTitle: string) => {
        const completedTask = [...tasks];

        completedTask.find((task) => task.title === taskTitle)!.completed =
            !tasks.find((task) => task.title === taskTitle)?.completed;

        setTasks(completedTask);
    };

    const deleteTasks = (taskTitle: string) => {
        const completedTask = [...tasks];

        setTasks(completedTask.filter((task) => task.title !== taskTitle));
    };

    return (
        <div>
            <TasksContext.Provider
                value={{ tasks, createTasks, completeTasks, deleteTasks }}
            >
                {children}
            </TasksContext.Provider>
        </div>
    );
};

export { TasksProvider, TasksContext };
