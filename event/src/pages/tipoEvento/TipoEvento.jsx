import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";


const TipoEvento = () => {
  return (
    <>
    <Header/>
    <main>
        <Cadastro
            tituloCadastro="Cadastro Tipo de Eventos"
            namePlace="Nome"
            visibilidade="none"
            bannerCadastro="none"
            bannerUsuario="none"
            />
        
        <Lista
            tituloLista="Lista Tipo De Eventos"
            visibilidade="none"
        />

    </main>
    <Footer/>
    </>
  )
}

export default TipoEvento;
