import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Notfound} from './Components/Notfound';


function App(){

      return (
            <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/>}  />
                  <Route path="/about" element={ <About/>}/>
                  <Route path="*" element={ <Notfound/>}/> }
            </Routes>
            </BrowserRouter>
      );


}     


export default App;
