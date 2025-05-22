import "./Listar.css"
import Lixinho from "../../assets/img/Lixo.png"
import Lapizinho from "../../assets/img/Lapis.png"
const Listar = (props) => {
    return (
        <>
            <section className="listagem">
                <div className="layout_grid div_tabela">
                    <h1>{props.tituloLista}</h1>
                    <hr />

                    <div className="tabela">
                        <table>
                            <thead>
                                <tr className="table_cabecalho">
                                    <th>{props.nomezin}</th>
                                    <th style={{ display: props.visible }}>TipoEvento</th>
                                    <th>{props.edit}</th>
                                    <th style={{ display: props.visibly }}>Excluir</th>
                                    {/* <th id="sim" style={{display:props.acao}}>Ações</th> */}
                                </tr>
                            </thead>
                            <tbody> {/*Corpo da tabela*/}
                                {/*A parte de listagem se encontra aqui*/}
                                {props.lista && props.lista.length > 0 ? (
                                    props.lista.map((item) => (
                                        //Use console.log(item), para identificar o nome do id certinho caso esteja dando erro na requisição(é uma das possíveis soluções)
                                        
                                        <tr className="item_lista"
                                        key={props.tipoLista == "tipoEvento" ? item.TituloTipoEvento : ("Não ta rodando")}>
                                            <td data-cell={props.nomezin}>{props.tipoLista == "tipoEvento" ? item.tituloTipoEvento : ("Não ta rodando")}</td>
                                            <td style={{ display: props.visible }} data-cell="TipoEvento">UIA</td>
                                            <td data-cell="Editar Ações"><img src={Lapizinho} alt="lapizin" onClick={() => props.editar(item)} style={{cursor:"pointer"}} /></td>
                                            <td data-cell="Excluir Ações"><img src={Lixinho} alt="lixin" onClick={() => props.deletar(item.tipoEventoID)} style={{cursor:"pointer"}} /></td>
                                        </tr>
                                    ))
                                ) :
                                    (
                                        <p>não estou entendendo</p>
                                    )}
                                {/* <tr className="item_lista">
                                    <td data-cell={props.nomezin}>Senai</td>
                                    <td style={{ display: props.visible }} data-cell="TipoEvento">Gigachads</td>
                                    <td data-cell="Editar Ações"><img src={Lapizinho} alt="lapizin" /></td>
                                    <td data-cell="Excluir Ações"><img src={Lixinho} alt="lixin" /></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Listar;
