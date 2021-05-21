import React from 'react';

const persona = {
    nombre: 'Julian Sebastian',
    apellido: 'Cangrejo Perafan',
    email: 'cangre98@hotmail.com'

}

const ComponenteApp = (props) => {
    console.log('Componnente varios parametros');
    console.log('Parametro 01: ', props.parm01);
    console.log('Parametro 02: ', props.parm02);
    console.log('Parametro 03: ', props.parm03);

    return (
        <>
            <h1>Component React</h1>
            <h5>Componnente varios parametros props </h5>
            <hr></hr>
            <p>Parametros 01: {props.parm01}</p>
            <p>Parametros 02: {props.parm02}</p>
            <p>Parametros 03: {props.parm03}</p>
            <hr></hr>
            <p>{JSON.stringify(persona, null, null)}</p>
        </>

    );
}


ComponenteApp.defaultProps = {
    parm03 : 'SIN VALORES'
}

export default ComponenteApp;