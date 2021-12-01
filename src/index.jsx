import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>

    <Header />
    <Main />
    <Footer />

  </React.StrictMode>,
  document.getElementById('root')

);