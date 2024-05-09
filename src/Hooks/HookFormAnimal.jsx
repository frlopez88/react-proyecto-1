import React , {useState} from 'react'
import axios from 'axios'

export const HookFormAnimal = () => {

    const [dataForm, setDataForm] = useState(
        {
            nombre: "",
            sonido: ""
        }
    );

    const [resultado, setResultado] = useState("");

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/animal";
        const result = await axios.post(url, dataForm);
        const dataResult = (await result).data;
        setResultado(dataResult.mensaje + ' id: ' + dataResult.obj_creado[0].id)

    }

    return {
        // propiedades (variables)
        dataForm,
        resultado,
        // metodos (funciones)
        changeHandler,
        submitHandler
    }
}
