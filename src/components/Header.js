import React from 'react';
import Audioplayer from './Audioplayer/Audioplayer';
import closeStreamings from '../images/header-close-streamings.svg';

function Header(props) { 
    const [isStreamingsOpen, setStreamingOpen] = React.useState(false);
    const [isOpenedOptions, setIsOpenedOptions] = React.useState(false);
    
    function handleStreamingButtonClick() {
        setStreamingOpen(!isStreamingsOpen); 
    };

    const openOptionsHandler = () => {
        setIsOpenedOptions(!isOpenedOptions);
    };
        
    return (
        <header className="header">
            <div className={`header__topbar ${isOpenedOptions && 'blur'}`}>
                <a href="https://marshakbooks.ru/" className="header__logo hover-opacity"><img src={props.logo} alt="Логотип" /></a>
                <div className="header__streaming">
                    <button type="button" className={`header__streaming-button ${isStreamingsOpen && 'header__streaming-button_clicked'}`} onClick={handleStreamingButtonClick}>{!isStreamingsOpen ? 'Стриминги' : (<img src={closeStreamings} alt="Закрыть" className="header__streaming-close"/>)}</button>
                    <ul className={`header__links ${!isStreamingsOpen && 'header__links_disable'}`}>
                        <li><a href="https://music.yandex.ru/home" className="header__link" target="_blank" rel="noreferrer" >Яндекс.Музыка &#8599;</a></li>
                        <li><a href="https://www.spotify.com/" className="header__link" target="_blank" rel="noreferrer">Spotify &#8599;</a></li>
                        <li><a href="https://music.apple.com/" className="header__link" target="_blank" rel="noreferrer">Apple Music &#8599;</a></li>
                        <li><a href="https://vk.com/vkmusic" className="header__link" target="_blank" rel="noreferrer">VK Music &#8599;</a></li>
                    </ul>
                </div>
            </div>
            <h1 className={`header__title ${isOpenedOptions && 'blur'}`}><img className="header__title-img" src={props.imageTitle} alt="Турбина" /></h1>
            <Audioplayer isOpenedOptions={isOpenedOptions} openOptionsHandler={openOptionsHandler} />
        </header>
    )
};

export default Header; 
