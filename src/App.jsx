import { Contador } from './ComponentScreen/Contador'
import {ErrorPage} from './ComponentScreen/ErrorPage'
import { TablaUsuarios } from './ComponentScreen/TablaUsuarios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormAnimal } from './ComponentScreen/FormAnimal'

export const App = () => {

  

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Contador/>}  /> 
          <Route path='/usuarios' element={<TablaUsuarios/>}  />
          <Route path='/crearAnimal' element={<FormAnimal/>}  />
          <Route path='*' element={<ErrorPage/>}  />
        </Routes>
      </BrowserRouter>

    </>
  )
}

