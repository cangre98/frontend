import React from 'react';


const persona = {
    nombre: 'Julian Sebastian',
    apellido: 'Cangrejo Perafan',
    email: 'cangre98@hotmail.com'

}

const ComponenteApp = ({parm01, parm02, parm03 = 'Si Valor'})=>{
    console.log('Componnente varios parametros');
    console.log('Parametro 01: ',parm01);
    console.log('Parametro 02: ',parm02);
    console.log('Parametro 03: ',parm03);

    return (
    <>
    <h5>Retorno Multilinea de un Componente</h5>
    <hr></hr>
    <p>Parametros 01: {parm01}</p>
    <p>Parametros 02: {parm02}</p>
    <p>Parametros 03: {parm03}</p> 
    <hr></hr>
    <p>{JSON.stringify(persona,null,null)}</p>
    </>
    
    );
}

export default ComponenteApp;