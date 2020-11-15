import React from 'react';

function ReleaseItem ({ item, onClick }) {
    const { title, author } = item;

    return (
    <li className="audioplayer__playlist-song" onClick={_ => onClick(item)}> {title} — {author}</li>
    )
}

export default ReleaseItem;