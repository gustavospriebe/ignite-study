import TaskList from "./TaskList";
import NewTask from "./NewTask";
import styles from "./Tasks.module.css";

export default function Tasks() {
    return (
        <div className={styles.tasksDashboard}>
            <NewTask />
            <TaskList />
        </div>
    );
}
