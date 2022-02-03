import React from 'react';
import {useNavigate,Route,Routes} from 'react-router-dom';

function Dashboards(){

    const navigate=useNavigate();

       const handleclick=()=>navigate("/");  //Redirecciona usando el hook navigate

       return(
           <div>
                    <h1>Este es el Dashboard</h1>
                    <button onClick={handleclick}>
                        Cerrar Sesion
                    </button>
                   
                    <Routes>
                        <Route path='welcome' element={<p>Welcome!!</p>} />
                    </Routes>

           </div>
       );
}


export {Dashboards} ;