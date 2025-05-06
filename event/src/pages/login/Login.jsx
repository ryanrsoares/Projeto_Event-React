import Logo from "../../assets/img/logo1.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx"

const Login = () => {
  return (
    <main className="main_login">
        <div className="banner"></div>
            <section className="section_login">
                <form action="" className="form_login">
                <img src={Logo} alt="" />
                        <div className="campos_login">
                            <div className="campo_input">
                                <input type="email" name="email" placeholder="UserName"/>
                            </div>
                            <div className="campo_input">
                                <input type="senha" name="senha" placeholder="Password"/>
                            </div>
                        </div>
                        <a href="">Esqueceu sua senha</a>
                        <Botao nomeDoBotao="Login"/>
                </form>
            </section>
    </main>
  )
}

export default Login;
