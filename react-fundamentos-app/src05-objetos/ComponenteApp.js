import React from 'react';


const persona = {
    nombre: 'Julian Sebastian',
    apellido: 'Cangrejo Perafan',
    email: 'cangre98@hotmail.com'

}

const ComponenteApp = ()=>{
    console.log('Componnente Mulitilinea');

    return (
    <>
    <h1>Saludo desde un Funtional Component's React</h1>
    <h5>Retorno Multilinea de un Componente</h5>
    <hr></hr>
    <p>Esta es una configuracion para eun compnente multilinea</p>
    <hr></hr>
    <p>Objeto Persona: {persona.nombre}  {persona.apellido}</p>
    <p>Email: {persona.email}</p>
    <p>{JSON.stringify(persona,null,null)}</p>
    </>
    
    );
}

export default ComponenteApp;