import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const TablaUsuarios = () => {

  const [dataUrl, setDataUrl] = useState([]);
  const [pagina, setPagina] = useState(1);

  const cargarData = async (pag) => {

    const url = `https://reqres.in/api/users?page=${pag}`;
    const result = await axios.get(url);
    const resultData = (await result).data;
    setDataUrl(resultData.data);

  }

  const handlerClick = (pag) => {
    setPagina(pag)
  }

  useEffect(() => {

    cargarData(pagina);

  }, [pagina]);


  return (
    <>
      <h3>Reporte de Usuarios Numero Pagina {pagina} </h3>
      <button onClick={() => handlerClick(1)} >1</button>
      <button onClick={() => handlerClick(2)} >2</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>
          {
            dataUrl.map((item) => (

              <tr key={item.id}>
                <td> {item.id} </td>
                <td> {item.first_name} </td>
                <td> {item.last_name} </td>
                <td> <img src={item.avatar} ></img> </td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </>
  )
}
