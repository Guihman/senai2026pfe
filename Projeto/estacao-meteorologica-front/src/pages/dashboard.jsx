import Header from "../components/header";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Header />

      <section className={styles.cards}>
        <div className={styles.card}>
          <h6 className={styles.cardTitle}>Temperatura</h6>
          <h2 className={styles.cardValue}>32°C</h2>
        </div>

        <div className={styles.card}>
          <h6 className={styles.cardTitle}>Umidade</h6>
          <h2 className={styles.cardValue}>68%</h2>
        </div>

        <div className={styles.card}>
          <h6 className={styles.cardTitle}>Pressão</h6>
          <h2 className={styles.cardValue}>1013 hPa</h2>
        </div>

        <div className={styles.card}>
          <h6 className={styles.cardTitle}>Vento</h6>
          <h2 className={styles.cardValue}>12Km</h2>
        </div>
      </section>

      <section className={styles.graficos}>
        <h6 className={styles.sectionTitle}>Gráficos</h6>

        <div className={styles.graficosContainer}>
          <div className={styles.grafico}>
            {/* colocar gráfico */}
          </div>

          <div className={styles.grafico}>
            {/* colocar gráfico */}
          </div>
        </div>
      </section>

      <section className={styles.leituras}>
        <h6 className={styles.sectionTitle}>Leituras Recentes</h6>

        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={styles.th}>Horário</th>
              <th className={styles.th}>Temp.</th>
              <th className={styles.th}>Umidade</th>
              <th className={styles.th}>Vento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>12:00</td>
              <td className={styles.td}>47°C</td>
              <td className={styles.td}>50%</td>
              <td className={styles.td}>13Km</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}