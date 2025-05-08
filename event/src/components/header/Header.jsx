import "./Header.css"
import Logo from "../../assets/img/logo1.svg"
import Logo_adm from "../../assets/img/Sair.svg"
import { Link } from "react-router-dom"


const Header = () => {
    return (    
        <header>
            <div className="layout_grid header_header">
                <img src={Logo} alt="Logo Evento" />
                <nav className="nav_header">
                    {/* <a href="" className="link_header">Home</a>
                    <a href="" className="link_header">Eventos</a>
                    <a href="" className="link_header">Usuários</a>
                    <a href="" className="link_header">Contatos</a> */}


                    <Link className="link_header" to="/TipoEvento">Home</Link>
                    <Link className="link_header" to="/ListagemEventos">Eventos</Link>
                    <Link className="link_header" to="/TipoUsuario">Usuários</Link>
                    <Link className="link_header" to="/Cadastro">Cadastros</Link>
                </nav>
                <div className="Adm">
                    <a href="" className="link_header">Administrador</a>
                    <img src={Logo_adm} alt="" />
                </div>

            </div>
        </header>
    )
}

export default Header;
