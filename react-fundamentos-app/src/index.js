import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilos
import './index.css'

//Componentes Creados 
import ContadorApp from './ContadorApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ContadorApp valorContador = {0} />,divRoot);