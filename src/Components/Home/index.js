import React from 'react';
import {Link} from 'react-router-dom';  //Reemplaza a la etiqueta a, y permite enviar variable

function Home(){

    const id=20;

        return(
        
        <div>
                <h1>Esto es el Home</h1>

               

               <Link to={`/users/${id}`}>Usuarios</Link>


        </div>
        );
}


export {Home};