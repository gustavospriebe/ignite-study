import styles from "./Main.module.css";
import Post from "./Post";

export default function Main() {
    return (
        <main className={styles.main}>
            <Post />
        </main>
    );
}
