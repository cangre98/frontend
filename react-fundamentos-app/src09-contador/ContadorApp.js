import React ,{useState}from 'react';


console.log('Componente Capturador de eventro en pantalla')

const ContadorApp = ({valorContador}) =>{
    console.log('.:ContadorApp:.');

    const [contador,setContador] = useState(valorContador);

    const contarClick =() => {

        setContador(contador + 1);
        console.log('Contador = ',contador);
    }

    return (
        <>
            <h1>Contador Component React</h1>
            <h5>Acumulador de Clicks</h5>
            <hr></hr>
            <h1>Contador = {contador}</h1>
            <hr></hr>
            <button onClick={contarClick}>Contar +1</button>           
            <hr></hr>
        </>

    );
}

export default ContadorApp;