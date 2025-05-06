import "./Cadastro.css";
import Botao from "../botao/Botao";
import bannerCadastro from "../../assets/img/imagem_cadastro_de_evento.svg";

const Cadastro = (props) => {
    return (
        <main className="main_cadastro">
            <div className="titulo">
                    <h1>{props.tituloCadastro}</h1>
                    <hr/>
                </div>

            <section className="section_cadastro">
                    <div className="banner_cadastro">
                        <img src={bannerCadastro} alt="Fundo banner do cadastro eventos" />
                    </div>

                <form action="" className="layout_grid form_cadastro">
            
                    <div className="campos_cadastro">
                        <div className="campo_cad_titulo">
                            <label htmlFor="titulo"></label>
                            <input type="text" name="nome" placeholder={`${props.namePlace}`}/>
                        </div>

                        <Botao nomeDoBotao="Cadastrar"/>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Cadastro;

