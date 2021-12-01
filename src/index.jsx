import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './Components/Header';
import Main from './Components/Main';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')

);