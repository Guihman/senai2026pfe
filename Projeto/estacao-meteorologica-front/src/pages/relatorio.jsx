import Header from "../components/header";
import styles from "./Relatorio.module.css";
import GraficoBarra from "../components/GraficoBarra";

export default function Relatorio() {
  const leituras = [
    { horario: "12:00", qualidadeAr: "Boa", iqa: 44, temperatura: "35°C", umidade: "40%" },
    { horario: "13:00", qualidadeAr: "Ótima", iqa: 72, temperatura: "34°C", umidade: "65%" },
    { horario: "15:00", qualidadeAr: "Boa", iqa: 47, temperatura: "36°C", umidade: "45%" },
    { horario: "18:00", qualidadeAr: "Regular", iqa: 34, temperatura: "38°C", umidade: "20%" }
  ];

  function getStatusClass(status) {
    if (status === "Boa") return styles.boa;
    if (status === "Ótima") return styles.otima;
    return styles.regular;
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.card}>

          <div className={styles.header}>
            <h2 className={styles.title}>Relatório da Estação Meteorológica</h2>
            <p className={styles.subtitle}>Dados sobre o clima em tempo real.</p>
          </div>

          {/* ✅ GRÁFICO */}
          <div className={styles.grafico}>
            <GraficoBarra leituras={leituras} />
          </div>

          {/* ✅ TABELA */}
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Horário</th>
                <th className={styles.th}>Qualidade do Ar</th>
                <th className={styles.th}>IQA</th>
                <th className={styles.th}>Temperatura</th>
                <th className={styles.th}>Umidade</th>
              </tr>
            </thead>

            <tbody>
              {leituras.map((item, index) => (
                <tr key={index} className={styles.row}>
                  <td className={styles.td}>{item.horario}</td>

                  <td className={styles.td}>
                    <span className={`${styles.badge} ${getStatusClass(item.qualidadeAr)}`}>
                      {item.qualidadeAr}
                    </span>
                  </td>

                  <td className={styles.td}>{item.iqa}</td>
                  <td className={styles.td}>{item.temperatura}</td>
                  <td className={styles.td}>{item.umidade}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}