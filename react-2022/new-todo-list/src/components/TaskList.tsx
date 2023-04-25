import { useState } from "react";
import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";
import Clipboard from "../assets/Clipboard.svg";

export default function TaskList() {
    const [tasks, setTasks] = useState<[]>([
        { title: "oi", completed: false },
    ]);
    return (
        <div className={styles.taskList}>
            <div className={styles.taskListStatus}>
                <div className={styles.taskCreateStatus}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>
                <div className={styles.taskDoneStatus}>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </div>
            {tasks.length === 0 ? (
                <div className={styles.taskListEmpty}>
                    <img src={Clipboard} alt="clipboard" />
                    <div>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            ) : (
                <TaskItem />
            )}
        </div>
    );
}
