import React , {useState} from 'react'

export const Contador = () => {

    const [contador, setContador] = useState(0)

    function onClickHandler(val) {
        setContador(contador + val)
    }

    return (
        <>
            <h1>Hola Mundo</h1>

            <p>{contador}</p>

            <button onClick={() => onClickHandler(1)} >+</button>
            <button onClick={() => onClickHandler(-1)}>-</button>
        </>
    )
}
