import './App.css';
// import Mensagem from './components/mensagem.jsx';
// import PropsNomeado from './components/propsNomeado.jsx';
import MeuAvatar from './components/meuAvatar.jsx';
import MinhaImg from './assets/img/pinguin-surfando.jpg'

function App() {

  return (
    <>
      {/* <Mensagem titulo='Aprendendo Props ou Properties ou ainda Propriedades' texto='Bem vindo(a) ao mundo das Props' nome='Ana Luiza'/>
      <Mensagem titulo='Interclasse 2026' texto='Bem vindo(a) ao interclasse' nome='Guilherme'/> */}
      
      {/* <PropsNomeado titulo='Interclasse 2026' texto='Bem vindo(a) ao interclasse' nome='Guilherme' altura={1.68}/> */}

      <MeuAvatar nome='Guilherme' idade={17} foto={MinhaImg} estiloMusical='Rock Clássico' disciplinaFavorita='Matemática'/>
    </>
  )
}

export default App
