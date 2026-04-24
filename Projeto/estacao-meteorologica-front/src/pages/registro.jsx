import { useState } from "react";
import { Link } from "react-router-dom";

import imagemEstacao from '../assets/estacao.jpeg'
import styles from './Login.module.css'

export default function Registro(){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    return(
        <section className={styles.container}>
            <div className={styles.card}>
                <img src={imagemEstacao} alt="" className={styles.imagem} />

                <div className={styles.formulario}>
                    <h2 className={styles.titulo}>Cadastrar-se</h2>

                    <form 
                        className={styles.form}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label htmlFor="usuario" className={styles.label}>
                            Usuário
                        </label>
                        <input
                            type="text"
                            id="usuario"
                            className={styles.input}
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />

                        <label htmlFor="senha" className={styles.label}>
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            className={styles.input}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <label htmlFor="confirmaSenha" className={styles.label}>
                            Confirmar Senha
                        </label>
                        <input
                            type="password"
                            id="confirmaSenha"
                            className={styles.input}
                            value={confirmaSenha}
                            onChange={(e) => setConfirmaSenha(e.target.value)}
                        />

                        <Link to='/dashboard' className={styles.botao}>
                            Cadastrar
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}