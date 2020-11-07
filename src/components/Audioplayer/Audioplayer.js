import playImage from '../../images/audioplayer-play-image.svg';
import optionsImage from '../../images/audioplayer-options-image.svg';

function Audioplayer() {

    return (
        <div className="audioplayer">
            <audio
            />
            <button type="button" className="audioplayer__button-playpause"><img src={playImage} className="audioplayer__button-playpause-image" alt="Плэй" /></button>
            <div className="audioplayer__interface">
                <div className="audioplayer__track-info">
                    <div className="audioplayer__track-params">
                        <p className="audioplayer__track-title">Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров</p>
                        <p className="audioplayer__track-length">2:24</p>
                    </div>
                    <label className="audioplayer__progressbar">
                        <input type="range" className="audioplayer__progressbar-input" />
                    </label>
                    <div className="audioplayer__playlist">
                        <ul className="audioplayer__playlist-list">
                            <li className="audioplayer__playlist-song">№6 Поезия — Мукулатура feat. Саша Петров</li>
                            <li className="audioplayer__playlist-song">№5 Лодка — СБПЧ feat. Маруся Романова</li>
                            <li className="audioplayer__playlist-song">№4 Кирпичи — Инди группа feat. Пётр Сковородников</li>
                        </ul>
                    </div>
                    <div className="audioplayer__track-lyrics">
                        Мой милый милый мальчик
                        Моя милая милая девочка
                        Никогда не знаешь что будет дальше
                        В этой гадкой зиме
                    </div>
                    <div className="audioplayer__playlist audioplayer__playlist_empty">Пока это единственный релиз, но скоро будут новые</div>
                </div>
                <button type="button" className="audioplayer__options">Текст песни</button>
            </div>
            <button type="button" className="audioplayer__button-display-options"><img src={optionsImage} className="audioplayer__button-display-options-image" alt="Опции" /></button>
        </div>
    )
};

export default Audioplayer;