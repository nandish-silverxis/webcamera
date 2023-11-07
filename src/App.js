import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom'

import Scanner from './Scanner';
import First from './First';


function App () {

  return(

    <div>
      <Routes>
      <Route path='/' element={<Scanner/>}></Route>
      <Route path='/First' element={<First/>}></Route>

      </Routes>
    </div>
   
  )
}
export default App;
