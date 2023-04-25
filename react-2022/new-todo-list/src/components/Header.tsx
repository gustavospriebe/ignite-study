import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={logo} alt="logo" />
        </div>
    );
}
