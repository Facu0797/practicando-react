import React, { useContext, useState } from 'react';
import Profesora from './Profesora';
import Ubicacion from './Ubicacion';
import { Contexto } from '../Contexto/contexto';

const Contenido = () => {
    const {profesores} = useContext(Contexto);

    const idioma = profesores[3].idioma

    const [ocultar1, setOcultar1] = useState(false)
    const [ocultar2, setOcultar2] = useState(false)

    const mostrar1 = () => {
        setOcultar1(!ocultar1);
        setOcultar2(false);
    }
    const mostrar2 = () => {
        setOcultar2(!ocultar2);
        setOcultar1(false);
    }

    return ( 
        <>
            <h2>{profesores[idioma].titulo}</h2>
            <h3>{profesores[idioma].texto} </h3>
            <div className='botones'>
                <button onClick={mostrar1}>{profesores[idioma].boton1}</button>
                <button onClick={mostrar2}>{profesores[idioma].boton2}</button>
            </div>

            {
                ocultar1
                    ?   <Profesora />
                    :   null
            }
            {
                ocultar2
                    ?   <Ubicacion />
                    :   null
            }
            
           
        </>    
    );
}
 
export default Contenido;