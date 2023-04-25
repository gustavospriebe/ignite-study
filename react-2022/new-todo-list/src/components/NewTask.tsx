import styles from "./NewTask.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function NewTask() {
    return (
        <div className={styles.newTask}>
            <form>
                <input placeholder="Adicione uma nova tarefa" type="text" />
                <button>
                    Criar
                    <AiOutlinePlusCircle size="20" />
                </button>
            </form>
        </div>
    );
}
