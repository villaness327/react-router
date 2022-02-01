import React from 'react';
import {useParams} from 'react-router-dom';




function Userpage(){

    const params=useParams();



    return(
         <div>
         <p>Userpage</p>
          User <h1>{params.idUser}</h1>

         </div>
        

    );

}


export {Userpage};