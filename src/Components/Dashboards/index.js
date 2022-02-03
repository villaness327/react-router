import React from 'react';
import {useNavigate,Outlet,Link} from 'react-router-dom';

function Dashboards(){

    const navigate=useNavigate();

       const handleclick=()=>navigate("/");  //Redirecciona usando el hook navigate

       return(
            <div>
                    <h1>Este es el Dashboard</h1>

                    <br/>
                       <Link to='welcome'>Say Welcome</Link>
                    <br/>  
                       <Link to='goodbye'>Say Goodbye</Link>
                    <br/><br/>
                    <button onClick={handleclick}>
                        Cerrar Sesion
                    </button>
                    <Outlet/>
            </div>

       );
}


export {Dashboards} ;