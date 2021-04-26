import React from 'react';
import './Movie.scss';

const PosterUrl = {
    MISSING: "N/A",
}

export const Movie = (props) => {
    const { data, updateShowModal, updateCurrentSelectedMovie} = props;
    const { Title, Year, Poster, imdbID } = data;

    const HAS_POSTER = Poster !== PosterUrl.MISSING;

    const handleClick = () => {
        updateShowModal(true);
        updateCurrentSelectedMovie(data);

    };
    return (
    <div className="movie-card">
        <div className={`poster-section ${HAS_POSTER ? "has-poster" : "no-poster"}`}>
            {HAS_POSTER && (<img src={Poster} alt={`${Title} movie poster`}/>)}
        </div>
        <div className="movie-info">
            <h2>{Title}</h2>
            <p>{Year}</p>
        </div>
        <button className="btn-add-to-playlist" onClick={(e) => handleClick(data)} type="button">Add to playlist</button>
    </div>);
};

export default { Movie };