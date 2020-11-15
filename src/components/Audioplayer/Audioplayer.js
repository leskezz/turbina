import React from 'react';
import playImage from '../../images/audioplayer-play-image.svg';
import playClipImage from '../../images/audioplayer-play-clip-image.svg';
import pauseImage from '../../images/audioplayer-pause-image.svg'
import optionsImage from '../../images/audioplayer-options-image.svg';
import closeOptionsImage from '../../images/audioplayer-close-options-image.svg';
import playlist from './Playlist';
import throttling from '../../utils/throttling';
import Timeline from './Timeline';
import Releases from './Releases/Releases';
import Lyrics from './Lyrics';
import secToMinConverter from '../../utils/convert-second-to-minutes';
import coverImage from '../../images/cover.png';

function Audioplayer({ isOpenedOptions, openOptionsHandler }) {

    const [currentTrack, setCurrentTrack] = React.useState(playlist[0]);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isOpenedLyrics, setIsOpenedLyrics] = React.useState(false);

    const myPlayer = React.useRef(null);

    const onTimeUpdate = throttling(e => {
        setCurrentTime(e.target.currentTime);
    }, 1000);

    const onPlay = e => {
        setDuration(e.target.duration);
        console.log(duration);
    };

    const playHandler = () => {
        if (isPlaying) {
            myPlayer.current.pause();
            setIsPlaying(false);
        } else {
            myPlayer.current.play();
            setIsPlaying(true);
        }
    };

    const clickReleaseHandler = (item) => {
        setCurrentTrack(item);
        setIsPlaying(false)
    }

    return ( 
    <div className={`audioplayer ${isOpenedOptions && 'audioplayer_is-open'}`} >

        {
            isOpenedOptions && 
            <img src = { coverImage /* далее необходимо будем в качестве ссылки указать currentTrack.cover */ }
            className = "audioplayer__cover"
            alt = "Обложка" />
        }

        <button type = "button"
        className = "audioplayer__button-playpause"
        onClick = { playHandler } >
            <img 
            src={ isPlaying ? pauseImage : playImage }
            className="audioplayer__button-playpause-image"
            alt="Плэй" />
        </button>

        <div className = "audioplayer__track-params" >
            <audio src = { currentTrack.audioFile }
            className = "audioplayer__audio"
            ref = { myPlayer }
            onPlay = { onPlay }
            onPause = { _ => console.log('pause') }
            onTimeUpdate = { onTimeUpdate }
            onLoadedData = { _ => setDuration(myPlayer.current.duration) } >
            Your browser does not support audio 
            </audio> 
            <p className = "audioplayer__track-title" > { currentTrack.title }— { currentTrack.author } </p> 
            <p className = "audioplayer__track-length" > { secToMinConverter(duration - currentTime) } </p>

        <Timeline 
        currentTime = { currentTime }
        duration = { duration }
        onClick = { time => myPlayer.current.currentTime = time }
        />

        </div> {
        isOpenedOptions &&
        <div className = "audioplayer__disappearing-buttons">
            <a className = "audioplayer__clip" href = "#"> {/* Далее здесь необходимо указать в качестве ссылки currentTrack.clip */}
                <img 
                src = { playClipImage }
                className = "audioplayer__clip-image"
                alt = "Клип" /> 
                    Клип 
            </a> 
            <button
            type = "button"
            className = "audioplayer__options"
            onClick = { _ => setIsOpenedLyrics(!isOpenedLyrics) } > { isOpenedLyrics ? 'Релизы' : 'Текст песни' } 
            </button> 
        </div>
    }

        <button type = "button"
        className = "audioplayer__button-display-options"
        onClick = { openOptionsHandler } >
            <img 
            src = { isOpenedOptions ? closeOptionsImage : optionsImage }
            className = "audioplayer__button-display-options-image"
            alt = "Опции" />
        </button>


        {isOpenedOptions && 
        < div className = "audioplayer__text-container" > {!isOpenedLyrics ? < Releases onClick = { clickReleaseHandler }
                playlist = { playlist }
                /> : <Lyrics currentTrack={currentTrack} />
            } 
        </div>} 
    </div>
    )
};

export default Audioplayer;