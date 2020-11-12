import React from 'react';
import Audioplayer from './Audioplayer/Audioplayer';
import closeStreamings from '../images/header-close-streamings.svg';

function Header(props) {

    const [isStreamingsOpen, setStreamingOpen] = React.useState(false);

    function handleStreamingButtonClick() {
        setStreamingOpen(!isStreamingsOpen);
    };

    return (
        <header className="header">
            <div className="header__topbar">
                <a href="https://marshakbooks.ru/" className="header__logo hover-opacity"><img src={props.logo} alt="Логотип" /></a>
                <div className="header__streaming">
                    <button type="button" className={`header__streaming-button ${isStreamingsOpen && 'header__streaming-button_clicked'}`} onClick={handleStreamingButtonClick}>{!isStreamingsOpen ? 'Стриминги' : (<img src={closeStreamings} alt="Закрыть" className="header__streaming-close"/>)}</button>
                <ul className={`header__links ${!isStreamingsOpen && 'header__links_disable'}`}>
                    <li><a href="https://music.yandex.ru/home" className="header__link">Яндекс.Музыка &#8599;</a></li>
                    <li><a href="https://www.spotify.com/" className="header__link">Spotify &#8599;</a></li>
                    <li><a href="https://music.apple.com/" className="header__link">Apple Music &#8599;</a></li>
                    <li><a href="https://vk.com/vkmusic" className="header__link">VK Music &#8599;</a></li>
                </ul>
                </div>
            </div>
            <h1 className="header__title"><img className="header__title-img" src={props.imageTitle} alt="Турбина" /></h1>
            <Audioplayer />
        </header>
    )
}

export default Header;