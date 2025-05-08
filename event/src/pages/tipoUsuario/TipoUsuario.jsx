import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";


const TipoUsuario = () => {
  return (
    <>
    <Header/>
    <main>
        <Cadastro
            tituloCadastro="Cadastro Tipo de Usuário"
            namePlace="Titulo"
            visibilidade="none"
            bannerCadastro="none"
            bannerTipoEvento="none"
            />
        
        <Lista
            tituloLista="Lista Tipo De Usuário"
            titulo="Titulo"
            assunto="TIpo Usuario"
            visibilidade="none"
        />

    </main>
    <Footer/>
    </>
  )
}

export default TipoUsuario;
