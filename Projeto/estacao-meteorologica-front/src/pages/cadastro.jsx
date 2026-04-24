import { useState } from "react";
import Header from "../components/header";
import styles from "./Cadastro.module.css";

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [documento, setDocumento] = useState('');

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.formWrapper}>
        <div className={styles.formCard}>
          <h3 className={styles.title}>Cadastro de dados pessoais</h3>

          <form className={styles.form}>
            <label className={styles.label}>Nome</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label className={styles.label}>Endereço</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Rua XV de Novembro"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />

            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="text"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className={styles.label}>Celular</label>
            <input
              className={styles.input}
              type="text"
              placeholder="00 00000-0000"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />

            <label className={styles.label}>Documento</label>
            <input
              className={styles.input}
              type="text"
              placeholder="000.000.000-00"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />

            <button className={styles.button}>Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}