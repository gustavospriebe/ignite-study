import { FormEvent, useContext, useState } from "react";
import styles from "./NewTask.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TasksContext, TasksContextType } from "../context/TasksContext";

export default function NewTask() {
    const [value, setValue] = useState("");

    const { createTasks } = useContext<TasksContextType>(TasksContext);

    function handleNewTask(event: FormEvent) {
        event.preventDefault();

        if (value.length === 0) {
            return;
        }

        createTasks?.(value);
        setValue("");
    }

    return (
        <div className={styles.newTask}>
            <form onSubmit={handleNewTask}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size="20" />
                </button>
            </form>
        </div>
    );
}
