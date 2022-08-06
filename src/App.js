import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PageOne from './pages/Page_1'
import Validatorjs from './pages/Validator_js'

const App = () => {
  return (
    <>


    <Routes>
        
      <Route path='/'  element={<PageOne />}/>
      <Route path='/editor'  element={<Validatorjs />}/>
    </Routes>
    
    </>
  )
}

export default App
