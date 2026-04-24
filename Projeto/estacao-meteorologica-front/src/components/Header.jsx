import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.titulo}>Estação Meteorológica</h2>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/dashboard" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className={styles.link}>
              Cadastros
            </Link>
          </li>
          <li>
            <Link to="/relatorio" className={styles.link}>
              Relatórios
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
