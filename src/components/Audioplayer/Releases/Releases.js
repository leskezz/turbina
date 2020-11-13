import ReleaseItem from './Release-item';

const Releases = ({ playlist, onClick }) => {
    return (
        <div className="audioplayer__playlist">
            <p className="audioplayer__playlist-title"> Релизы:</p>
            <ul className="audioplayer__playlist-list">
                { playlist.length > 1 ?
                playlist.map(item => <ReleaseItem
                item={item} 
                key={item.id} 
                onClick={item => onClick(item)}
                />) :
                <p className="audioplayer__empty">Пока что у нас только 1 релиз.</p>}
            </ul>
        </div>
    )
};

export default Releases;
