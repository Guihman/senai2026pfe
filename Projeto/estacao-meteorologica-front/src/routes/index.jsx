import {Routes, Route} from 'react-router-dom';

import Login from '../pages/login';
// import Registro from '../pages/registro';
// import Dashboard from '../pages/dashboard';
// import Cadastro from '../pages/cadastro';
// import Relatório from '../pages/relatório';
// import NotFound from '../pages/notFound';




export default function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path='/' element={<Registro />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/' element={<Cadastro />} />
      <Route path='/' element={<Relatório />} />
      <Route path='/' element={<NotFound />} /> */}
    </Routes>
  )
}