import "./ListagemEvento.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Comentar from "../../assets/comentar.png"
import Checkin from "../../components/checkin/Checkin"
import Descricao from "../../assets/descricao2.png"
import api from "../../Services/services";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Modal from "../modal/Modal.jsx";
const ListagemEvento = () => {

    const [listaEvento, setListaEvento] = useState([]);

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");
            setListaEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        listarEventos();
    }, []);
    return (

        <>
            <Header
                nomeUsuario="Administrador"
                botaozinho="none"
            />
            <main>

            <section className="layout_grid listagem_evento">
                <h1>Lista De Eventos</h1>
                <hr />
                <div className="tabela_evento">
                    <select name="Todos os Eventos" id="" className="select_evento">
                        <option value="" disabled selected>Todos os Eventos</option>
                        <option value="">op 1</option>
                        <option value="">op 2</option>
                        <option value=""> op 3</option>
                    </select>
                    <thead>
                        <tr className="table_evento">
                            <th>Titulo</th>
                            <th>Data Do Evento</th>
                            <th>Tipo Evento</th>
                            <th>Descrição</th>
                            <th>Comentários</th>
                            <th>Participar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaEvento.length > 0 ? (
                            listaEvento.map((item) => (
                                <tr className="item_evento">
                                    <td>{item.nomeEvento}</td>
                                    <td>{format(item.dataEvento, "dd/MM/yy")}</td>
                                    <td>{item.tipoEvento.tituloTipoEvento}</td>
                                    <td>
                                        <button className="icon">
                                            <img src={Descricao} alt="" />
                                        </button>
                                    </td>
                                    <td data-cell="Editar"><img src={Comentar} alt="Imagem de uma caneta" /></td>
                                    <td data-cell="Ckeckin"><Checkin /></td>
                                </tr>
                            ))

                        ) : (
                            <p>Nenhum evento encontrado 🥲</p>
                        )}
                    </tbody>
                </div>
            </section>
            </main>
            <Footer />
            <Modal />
        </>

    )
}

export default ListagemEvento;