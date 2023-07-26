import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Login.css'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            email,
            senha
        })
    }

    return (
        <section>
            <form onSubmit={aoSalvar}>
                <div class="form-box">
                    <div class="form-value">
                        <form action="">
                            <h2>Conecte-se</h2> 
                            <CampoTexto obrigatorio={true} label="Email" valor={email} aoAlterado={valor => setEmail(valor)} />
                            <CampoTexto obrigatorio={true} label="Senha" valor={senha} aoAlterado={valor => setSenha(valor)} />
                            <div class="forget">
                                <label for=""><input type="checkbox"/>Lembre de mim  <a href="#">Esqueceu a senha</a></label>
                            </div>
                            <Botao>Entrar</Botao>
                            <div class="register">
                                <p>não tem uma conta <a href="#">Registro</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Login