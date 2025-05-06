import "./Header.css"
import Logo from "../../assets/img/logo1.svg"
import Logo_adm from "../../assets/img/Sair.svg"


const Header = () => {
    return (    
        <header>
            <div className="layout_grid cabecalho">
                <img src={Logo} alt="Logo Evento" />
                <nav className="nav_header">
                    <a href="" className="link_header">Home</a>
                    <a href="" className="link_header">Eventos</a>
                    <a href="" className="link_header">Usuários</a>
                    <a href="" className="link_header">Contatos</a>
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
