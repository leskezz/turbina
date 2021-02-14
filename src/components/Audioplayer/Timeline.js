import React from 'react';

function Timeline ({ duration, currentTime, onClick }) {

    const clickHandler = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clickPosition = x / rect.width;
        const timeToGo = duration * clickPosition;
        onClick(timeToGo);
    }

    return (
        <div
            className="audioplayer__progressbar"
            onClick={clickHandler}
        >
            <div
                className="audioplayer__progressbar-value"
                style={{
                    width: `${ currentTime / duration * 100 }%`
                }}
            />
        </div>
    )
}

export default Timeline;