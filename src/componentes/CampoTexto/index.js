import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <><div class="inputbox">
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} />
            <label for="">{props.label}</label>
        </div></>
    )
}

export default CampoTexto