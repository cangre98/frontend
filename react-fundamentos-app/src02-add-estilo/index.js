import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilos
import './index.css'

const saludo  = <h1>Hola desde la app de fundamentos React</h1>

const divRoot = document.querySelector('#root');

ReactDOM.render(saludo,divRoot);