import "./Botao.css";
const Botao = (props) => {
    //Props é para alterar o botão mais tarde
    return(
        <button className="botao">{props.nomeDoBotao}</button>
    )
}
export default Botao;