import React from 'react';
import Banderas from './Componentes/Banderas';
import Contenido from './Componentes/Contenido';
import { Datos } from './Contexto/contexto';

const App = () => {
    return (
        <Datos>
            <div className="App">
                <div className='banderas'>
                    <Banderas />
                </div>
                <div className="contenido">
                    <Contenido />
                </div>
            </div>
        </Datos>
    );
}
 
export default App;