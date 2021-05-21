import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilos
import './index.css'

//Componentes Creados 
import ComponenteApp from './ComponenteApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp/>,divRoot);