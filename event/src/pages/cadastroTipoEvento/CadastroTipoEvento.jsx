import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroTipoEvento = () => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro
                tituloCadastro="Cadastro Tipo de Eventos"
                namePlace="Titulo"
            />
            
            <Lista
                tituloLista="Lista De Eventos"
            />

        </main>
        <Footer/>
        </>
    )
}

export default CadastroTipoEvento;


