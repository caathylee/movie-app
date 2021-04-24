import React from 'react';
import './Movie.scss';

export const Movie = (props) => {
    const { data, updateShowModal} = props;
    const { Title, Actors, Poster, Genre, Runtime, Plot, Metascore } = data;
    return (
    <div className="movie-card">
        <div className="flex-item poster-section">
            {Poster && (<img src={Poster} alt={`${Title} movie poster`}/>)}
        </div>
        <div className="flex-item">
            <h2>{Title}</h2>
            {Actors && <p>Starring {Actors}</p>}
            <p>{Genre}</p>
            {Runtime && <p>Runtime: {Runtime}</p>}
            <p>{Plot}</p>
            {Metascore && <p>Rating: {Metascore}</p>}
        </div>
        <button className="btn-add-to-playlist" onClick={() => updateShowModal(true)} type="button">+</button>
    </div>);
};

export default { Movie };