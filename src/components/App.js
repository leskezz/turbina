import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import logoMarshak from '../images/logo-marshak.svg';
import imageTitle from '../images/logo-turbina.svg';


function App() {
  const [checkboxCheck, setCheckboxCheck] = React.useState(false);
  function checkboxClick() {
    setCheckboxCheck(!checkboxCheck)
    if(!checkboxCheck) {
      const errorElement = document.forms.form.querySelector('#checkbox-error')
      errorElement.classList.remove('form__input-error_active');
      errorElement.textContent = "";
    }
  }
  function checkboxChecked() {
    if(!checkboxCheck) {
      const errorElement = document.forms.form.querySelector('#checkbox-error')
      errorElement.textContent = "Необходимо согласие с офертой";
      errorElement.classList.add('form__input-error_active');
    }
    return false;
  }

  return (
    <div className="page">
      <Header logo={logoMarshak} imageTitle={imageTitle}/>
      <Main 
        onClickCheckBox={checkboxClick}
        onClickSubmit={checkboxChecked}
      />
      <Footer />
    </div>
  );
}

export default App;
