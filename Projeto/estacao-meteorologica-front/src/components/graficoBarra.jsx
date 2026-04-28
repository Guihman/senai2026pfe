import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GraficoBarra({ leituras }) {
  const opcoes = {
    responsive: true,
    maintainAspectRatio: false, // 🔥 ESSENCIAL
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#fff" }
      },
      title: {
        display: true,
        text: "Temperatura e Umidade",
        color: "#fff"
      },
    },
    scales: {
      x: {
        ticks: { color: "#ccc" }
      },
      y: {
        ticks: { color: "#ccc" }
      }
    }
  };

  const labels = leituras.map((item) => item.horario);

  const dados = {
    labels,
    datasets: [
      {
        label: "Temperatura (°C)",
        data: leituras.map((item) =>
          parseInt(item.temperatura.replace("°C", ""))
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Umidade (%)",
        data: leituras.map((item) =>
          parseInt(item.umidade.replace("%", ""))
        ),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Bar options={opcoes} data={dados} />
    </div>
  );
}