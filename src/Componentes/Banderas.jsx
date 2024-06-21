import React, { useContext } from 'react';
import imgEspaña from "/public/idiomas/spain.jpg"
import imgFrancia from "/public/idiomas/francia.png"
import imgIngles from "/public/idiomas/uk.png"
import { Contexto } from '../Contexto/contexto';

const Banderas = () => {
        const {profesores} = useContext(Contexto);
        const {setProfesores} = useContext(Contexto);

        const posicion = (indice) => {
            setProfesores(
                profesores.map((item, index) => {
                    return index === 3
                    ?   {...item, idioma:indice}
                    :   {...item}
                })
            )
        }

        const cambiarIdioma1 = () => {
            posicion(0)
        }
        const cambiarIdioma2 = () => {
            posicion(1)
        }
        const cambiarIdioma3 = () => {
            posicion(2)
        }

    return (
        <>
            <img onClick={cambiarIdioma1} src={imgEspaña} alt="bandera de españa" />
            <img onClick={cambiarIdioma2} src={imgFrancia} alt="bandera de francia" />
            <img onClick={cambiarIdioma3} src={imgIngles} alt="bandera del reino unido" />
        </>
    );
}
 
export default Banderas;