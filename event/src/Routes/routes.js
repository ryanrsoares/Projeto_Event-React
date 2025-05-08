import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import TipoEvento from "../pages/tipoEvento/TipoEvento";
import TipoUsuario from "../pages/tipoUsuario/TipoUsuario";
import ListagemEventos from "../pages/listaDeEventos/ListagemEventos";

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* http://localhost:3000/ => Login */}
            <Route path="/" element={<Login/>} exact />
            {/* http://localhost:3000/Cadastro => cadastro do tipo do evento */}
            <Route path="/Cadastro" element={<CadastroTipoEvento/>} exact />
            {/* http://localhost:3000/TipoEvento => tipo de evento */}
            <Route path="/TipoEvento" element={<TipoEvento/>} exact />
            {/* http://localhost:3000/TipoUsuario => tipo de usuario */}
            <Route path="/TipoUsuario" element={<TipoUsuario/>} exact />
            {/* http://localhost:3000/ListagemEventos => lista os eventos */}
            <Route path="/ListagemEventos" element={<ListagemEventos/>} exact />
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas;
