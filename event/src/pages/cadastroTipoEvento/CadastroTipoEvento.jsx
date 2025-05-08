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
                tituloCadastro="Cadastro de Evento"
                namePlace="Nome"
                bannerTipoEvento="none"
                bannerUsuario="none"
            />
            
            <Lista
                titulo="Nome"
                tipo_Do_Evento="Tipo Evento"
                assunto="Tipo Evento"
                assunto_lista="Lista De Eventos"
                titulo_lista="Nome Evento"
            />

        </main>
        <Footer/>
        </>
    )
}

export default CadastroTipoEvento;


