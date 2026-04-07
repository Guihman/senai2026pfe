import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../pages/Login.module.css';

import imagemEstacao from '../assets/estacao.jpeg'

export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <section className={styles.container}>
            <div className={styles.card}>
                <img src={imagemEstacao} alt="Imagem estação da dança" />
                <div className={styles.formulario}>
                    <h2>Login</h2>
                    <form action="">
                        <label htmlFor="usuario">Usuário</label>
                        <input 
                            type="text" 
                            id="usuario" 
                            className={styles.input} 
                            value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)} 
                        />
                        
                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="password" 
                            id="senha" 
                            className={styles.input} 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                        />

                        <button className={styles.botao}>Login</button>
                    </form>
                    {/* Se quiser estilizar o Link, pode usar className={styles.link} */}
                    <Link to='/' className={styles.link}>Não tem conta? Cadastre-se</Link>
                </div>
            </div>
        </section>
    )
}