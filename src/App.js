import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PageOne from './pages/Page_1'
import Validatorjs from './pages/Validator_js'
import JavaScriptpage from './pages/Java_Script_page'
import Pythonpage from './pages/Python_page';
import Flutterpage from './pages/Flutter_page'

import Phppage from './pages/Php_page';
import Result from './Components/Result'

const App = () => {
  return (
    <>


    <Routes>
        
      <Route path='/'  element={<PageOne />}/>
      <Route path='/python'  element={<Pythonpage />}/>
      <Route path='/javascript'  element={<JavaScriptpage />}/>
      <Route path='/flutter'  element={<Flutterpage />}/>
      <Route path='/php'  element={<Phppage />}/>
      <Route path='/editor'  element={<Validatorjs />}/>
      <Route path='/result'  element={<Result />}/>

    </Routes>
    
    </>
  )
}

export default App
