import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//vai procurar o elemento com id="root" no meu html e aplicar o React.StrictMode, 
//contém App, um componente que foi importado de App e vai executar a sua função
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

