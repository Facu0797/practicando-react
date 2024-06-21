import React, { useContext } from 'react';
import { Contexto } from '../Contexto/contexto';

const Profesora = () => {
    const {profesores} = useContext(Contexto);
    const idioma = profesores[3].idioma;
    const imagen = `/public/idiomas/${profesores[idioma].foto}`;

    return ( 
        <div className='profesora'>
            <h1>{profesores[idioma].boton1}:</h1>
            <div>
                <img className='foto' src={imagen} alt="marta" />
            </div>
            <div className='nombre'>{profesores[idioma].nombre} </div>
        </div>    
    );
}
 
export default Profesora;