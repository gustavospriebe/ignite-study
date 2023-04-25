import { useContext } from "react";
import { TasksContext, TasksContextType } from "../context/TasksContext";
import styles from "./TaskItem.module.css";
import Trash from "../assets/trash.svg";
import Cursor from "../assets/cursor.svg";

interface TaskItemProps {
    task: {
        title: string;
        completed: boolean;
    };
}

export default function TaskItem({ task }: TaskItemProps) {
    const { completeTasks, deleteTasks } = useContext(
        TasksContext
    ) as TasksContextType;

    return (
        <div className={styles.taskItem}>
            <button
                className={task.completed ? styles.checked : undefined}
                onClick={() => completeTasks?.(task.title)}
            >
                {task.completed && <img src={Cursor} alt="cursor" />}
            </button>
            <p className={task.completed ? styles.completed : undefined}>
                {task.title}
            </p>
            <img
                src={Trash}
                alt="trash"
                onClick={() => deleteTasks?.(task.title)}
            />
        </div>
    );
}
