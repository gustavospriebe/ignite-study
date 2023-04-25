import { useContext } from "react";
import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";
import Clipboard from "../assets/Clipboard.svg";
import { TasksContext, TasksContextType } from "../context/TasksContext";

export default function TaskList() {
    const { tasks } = useContext(TasksContext) as TasksContextType;

    return (
        <div className={styles.taskList}>
            <div className={styles.taskListStatus}>
                <div className={styles.taskCreateStatus}>
                    <p>Tarefas criadas</p>
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.taskDoneStatus}>
                    <p>Concluídas</p>
                    <span>
                        {tasks.filter((task) => task.completed).length} de{" "}
                        {tasks.length}
                    </span>
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
                tasks.map((task, index) => <TaskItem task={task} key={index} />)
            )}
        </div>
    );
}
