import playImage from '../../images/audioplayer-play-image.svg'; import optionsImage from '../../images/audioplayer-options-image.svg'; function Audioplayer() { return (
<div className="audioplayer">
    <audio/>

    <div className="audioplayer__control">

        <button type="button" className="audioplayer__button-playpause">
            <img src = { playImage } className = "audioplayer__button-playpause-image" alt = "Плэй"/>
        </button>

        <div className="audioplayer__track-params">
            <p className="audioplayer__track-title"> Контур— Хадн Дадн feat.Варя Карпова и Федя Быстров </p>
            <p className="audioplayer__track-length">2:24</p>

            <div className="audioplayer__progressbar">
                <div className="audioplayer__progressbar-value"></div>
            </div>
        </div>

        <div className="audioplayer__disappearing-buttons">
            <a className="audioplayer__clip" href="#">
                <img src={ playImage } className="audioplayer__clip-image" alt="Клип" />Клип
            </a>

            <button type="button" className="audioplayer__options">Текст песни</button>
        </div>

        <button type="button" className="audioplayer__button-display-options">
            <img src={ optionsImage } className="audioplayer__button-display-options-image" alt="Опции"/>
        </button>

    </div>

    <div className="audioplayer__text-container">

        <div className="audioplayer__playlist">
            <p className="audioplayer__playlist-title"> Релизы:
            </p>
            <ul className="audioplayer__playlist-list">
                <li className="audioplayer__playlist-song"> Поезия— Мукулатура feat.Саша Петров
                </li>
                <li className="audioplayer__playlist-song"> Лодка— СБПЧ feat.Маруся Романова
                </li>
                <li className="audioplayer__playlist-song"> Кирпичи— Инди группа feat.Пётр Сковородников
                </li>
            </ul>
        </div>

        <div className="audioplayer__lyrics">
            <p className="audioplayer__lyrics-title"> Текст песни:
            </p>
            <p className="audioplayer__lyrics-text">Мой&nbsp;милый&nbsp;милый&nbsp;мальчик, Моя&nbsp;милая&nbsp;милая&nbsp;девочка. Никогда&nbsp;не&nbsp;знаешь&nbsp;что&nbsp;будет&nbsp;дальше, В&nbsp;этой&nbsp;гадкой&nbsp;зиме
            </p>
        </div>

        <p className="audioplayer__empty">Пока что у нас только 1 релиз.</p>

    </div>





</div>
) }; export default Audioplayer;