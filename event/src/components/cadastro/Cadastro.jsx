import "./Cadastro.css";
import Botao from "../botao/Botao";
import bannerCadastro from "../../assets/img/evento.svg";
import bannerTipoEvento from "../../assets/img/tipoEvento.svg";
import bannerUsuario from "../../assets/img/tipoUsuario.svg";

const Cadastro = (props) => {
    return (
        <main className="main_cadastro">
            <div className="titulo">
                    <h1>{props.tituloCadastro}</h1>
                    <hr/>
                </div>

            <section className="section_cadastro">
                    <div className="banner_cadastro">
                        <img style={{display:props.bannerUsuario}} src={bannerUsuario} alt="Fundo banner do tipo de usuarios" />
                        <img style={{display:props.bannerTipoEvento}} src={bannerTipoEvento} alt="Fundo banner do tipo de eventos" />
                        <img style={{display:props.bannerCadastro}} src={bannerCadastro} alt="Fundo banner do cadastro eventos" />
                    </div>

                <form action="" className="layout_grid form_cadastro">
            
                    <div className="campos_cadastro">
                        <div className="campo_cad_titulo">
                            <label htmlFor="titulo"></label>
                            <input type="text" name="nome" placeholder={`${props.namePlace}`}/>
                        </div>
                        <div className="campo_cad_tipoEvento" style={{display:props.visibilidade}}>
                            <label htmlFor="tipoEvento"></label>
                            <select name="tipoEvento" id="">
                                <option value="" disabled selected>Tipo Evento</option>
                                <option value="">op 01</option>
                                <option value="">op 02</option>
                                <option value="">op 03</option>
                            </select>
                        </div>

                        <Botao nomeDoBotao="Cadastrar"/>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Cadastro;

