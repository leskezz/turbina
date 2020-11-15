const Lyrics = ({ currentTrack }) =>
    <div className="audioplayer__lyrics">
        <p className="audioplayer__lyrics-title"> Текст песни:
</p>
        <p className="audioplayer__lyrics-text">{currentTrack.lyrics}</p>
    </div>

export default  Lyrics;