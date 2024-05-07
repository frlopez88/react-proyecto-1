import { Contador } from './ComponentScreen/Contador'
import {ErrorPage} from './ComponentScreen/ErrorPage'
import { TablaUsuarios } from './ComponentScreen/TablaUsuarios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {

  

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Contador/>}  /> 
          <Route path='/usuarios' element={<TablaUsuarios/>}  />
          <Route path='*' element={<ErrorPage/>}  />
        </Routes>
      </BrowserRouter>

    </>
  )
}

