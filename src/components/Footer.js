import React from 'react';

function Footer() {

    return ( <footer className = "footer" >
        <p className = "footer__copyright" > &copy; Маршак, 2020. </p> <address className = "footer__text" > Сделано студентами < a href = "https://praktikum.yandex.ru/" className = "footer__link hover-opacity"
        target = "_blank"
        rel = "noreferrer"> Яндекс.Практикум </a></address>
        </footer>
    )
};

export default Footer;