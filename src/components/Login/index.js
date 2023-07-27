import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Login.css'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('form submetido =>', email, senha)
    }

    return (
        <section>
            <div className='img'>
                <img className='imagem' src="./Mangaflix.png" width='500px' alt="" />
            </div>
            <form onSubmit={aoSalvar}>
                <div class="form-box gradient-border">
                    <div class="form-value">
                        <h2>Conecte-se</h2>
                        <CampoTexto obrigatorio={true} label="Email" valor={email} aoAlterado={valor => setEmail(valor)} />
                        <CampoTexto obrigatorio={true} label="Senha" valor={senha} aoAlterado={valor => setSenha(valor)} />
                        <div class="forget">
                            <label for=""><input type="checkbox" />Lembre de mim  <a href="#">Esqueceu a senha</a></label>
                        </div>
                        <Botao>Entrar</Botao>
                        <div class="register">
                            <p>não tem uma conta <a href="#">Registro</a></p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Login