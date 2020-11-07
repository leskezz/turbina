import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import logoMarshak from '../images/logo-marshak.svg';
import imageTitle from '../images/logo-turbina.svg';


function App() {
  return (
    <div className="page">
      <Header logo={logoMarshak} imageTitle={imageTitle}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
