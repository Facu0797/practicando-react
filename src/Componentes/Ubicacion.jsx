import React, { useContext } from 'react';
import { Contexto } from '../Contexto/contexto';

const Ubicacion = () => {
    const {profesores} = useContext(Contexto); 
    
    // const idioma = profesores

    return ( 
        <div className='ubicacion'>
            <h1>Ubicacion:</h1>
            <div className='texto'>
            {profesores[0].direccion}
            </div>
        </div>    
    );
}
 
export default Ubicacion;