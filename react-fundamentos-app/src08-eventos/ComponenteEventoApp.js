import React from 'react';


console.log('Componente Capturador de eventro en pantalla')

const ComponenteEventoApp = () =>{
    console.log('.:ComponenteEventoApp:.');


    const eventoClick =(e) => {
        console.log(e);
    }

    return (
        <>
            <h1>Eventos Component React</h1>
            <h5>Capturador evento Click</h5>
            <hr></hr>
            <button onClick={eventoClick}>Click Aqui!</button>           
            <hr></hr>
        </>

    );
}

export default ComponenteEventoApp;