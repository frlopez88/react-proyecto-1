import React from 'react'
import { HookFormAnimal } from '../Hooks/HookFormAnimal';


export const FormAnimal = () => {

    const {
        dataForm,
        resultado,
        changeHandler,
        submitHandler
    } = HookFormAnimal();

    return (
        <>
            <h1>Registro de Animales</h1>
            <form onSubmit={submitHandler} >
                <input name='nombre' placeholder='Nombre Animal' onChange={changeHandler} />
                <input name='sonido' placeholder='Sonido Animal' onChange={changeHandler} />
                <button type='submit' > Enviar </button>
            </form>
            <p>{resultado}</p>
        </>
    )
}
