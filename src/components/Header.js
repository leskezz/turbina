import React from 'react';
import Audioplayer from './Audioplayer/Audioplayer';

function Header(props) {

    return (
        <header className="header">
            <div className="header__topbar">
                <a href="#" className="header__logo hover-opacity"><img src={props.logo} alt="Логотип" /></a>
                <ul className="header__links">
                    <li><a href="#" className="header__link">Стриминги</a></li>
                    <li><a href="#" className="header__link">Яндекс.Музыка &#8599;</a></li>
                    <li><a href="#" className="header__link">Spotify &#8599;</a></li>
                    <li><a href="#" className="header__link">Apple Music &#8599;</a></li>
                    <li><a href="#" className="header__link">VK Music &#8599;</a></li>
                </ul>
            </div>
            <h1 className="header__title"><img className="header__title-img" src={props.imageTitle} alt="Турбина" /></h1>
            <Audioplayer />
        </header>
    )
}

export default Header;