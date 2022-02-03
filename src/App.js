import React from 'react';
import {BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Notfound} from './Components/Notfound';
import {Navbar} from './Components/Navbar';
import {Users} from './Components/Users';
import {Userpage} from './Components/Userpage';
import {Dashboards} from './Components/Dashboards';
// import {useSaludo} from './Components/useSaludo';

function App(){

      return (
            <BrowserRouter>

             <Navbar/> 
                  <Routes>
                        <Route path="/" element={ <Home />} />
                        <Route path="/about" element={ <About />} />                       
                        <Route path="users/:idUser" element={<Userpage />} />{/*id se va a llamar con lo params*/}
                        <Route path="/users" element={ <Users />} />
                        <Route path="/usuarios" element={<Navigate to="/users"/>} /> {/*redirecciona*/}
                        <Route path="/dashboard/*" element={ <Dashboards />} />
                        <Route path="*" element={ <Notfound />} /> 
                  </Routes>
            </BrowserRouter>
      );


}     


export default App;
