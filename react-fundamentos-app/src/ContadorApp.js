import React ,{useState}from 'react';


console.log('Componente Capturador de eventro en pantalla')

const ContadorApp = ({valorContador}) =>{
    console.log('.:ContadorApp:.');

    const [contador,setContador] = useState(valorContador);

    const funcionSumar =() => {
        setContador(contador + 1);
        console.log('Contador = ',contador);
    }

    const funcionRestar =() => {
        setContador(contador - 1);
        console.log('Contador = ',contador);
    }

    const funcionLimpiar =() => {
        setContador(valorContador);
        console.log('Contador = ',contador);
    }

    return (
        <>
            <h1>Acumulador Component React</h1>
            <h5>Acumulador de Clicks</h5>
            <hr></hr>
            <h1>Contador = {contador}</h1>
            <hr></hr>
            <button onClick={funcionSumar}>Sumar +1</button>    
            <button onClick={funcionLimpiar}>Limpiar</button>        
            <button onClick={funcionRestar}>Restar -1</button>           

            <hr></hr>
        </>

    );
}

export default ContadorApp;