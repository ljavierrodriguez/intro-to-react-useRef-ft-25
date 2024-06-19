import React, { useState } from 'react'

const UsingState = () => {

    const [valor, setValor] = useState(0)

    const [name, setName] = useState("")

    return (
        <div>
            <h3>Using State</h3>
            <p>Valor: {valor}</p>
            <button onClick={() => setValor(valor + 1)}>Incrementar</button>
            <p>Name: {name}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default UsingState