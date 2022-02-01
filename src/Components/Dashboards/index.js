import React from 'react';
import {useNavigate} from 'react-router-dom';

function Dashboards(){

    const navigate=useNavigate();

       const handleclick=()=>navigate("/");

       return(
           <div>
                    <h1>Este es el Dashboard</h1>

                    <button onClick={handleclick}>
                        Cerrar Sesion
                    </button>
           </div>
       );
}


export {Dashboards} ;