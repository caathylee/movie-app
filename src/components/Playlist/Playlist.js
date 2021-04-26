import React, { useState } from 'react';
import './Playlist.scss';

export const Playlist = (props) => {
    const { playlist } = props;
    const [showPlaylist, setShowPlaylist] = useState(false);

    const handleClick = (e) => {
        setShowPlaylist(!showPlaylist);
    }

    return(<div className="playlist-container">
        <button className="btn-view-playlist" onClick={(e) => { handleClick(e) }} type="button">{ showPlaylist ? 'Hide Playlist' : 'View Playlist'}</button>
        {showPlaylist && 
        (<div className="playlist">
            <h2>Playlist</h2>

            <ol>
                {
                    playlist?.map(item => {
                        return <li>{item.Title}</li>
                    })
                }
            </ol>
        </div>)
        }

    </div>)
};

export default { Playlist };