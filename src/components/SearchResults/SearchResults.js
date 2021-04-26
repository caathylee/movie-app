import React, { useEffect } from 'react';
import { Movie } from '../Movie/Movie';
import "./SearchResults.scss";

export const SearchResults = (props) => {
    const {searchData, updateShowModal, searchValue, updateCurrentSelectedMovie, showResultsMessage} = props;

    const SHOW_LOAD_MORE = searchData?.totalResults > searchData?.Search?.length ?? false;
    
    return (
    <div className="results-feed">
        {searchData?.length > 0 && <p>Showing {searchData?.Search?.length}/{searchData.totalResults} results for "{searchValue}"</p>}
        { showResultsMessage && <p>{`There are 0 results for "${searchValue}". Please try searching for another movie.`}</p>}
        <div className="movies-container">
            {searchData?.Search?.map((result) => {return <Movie key={result.imdbID} data={result} updateShowModal={updateShowModal} updateCurrentSelectedMovie={updateCurrentSelectedMovie}/>})}
        </div>
        {SHOW_LOAD_MORE && <button type="button" className="btn-load-more">Load more</button>}
    </div>);
};

export default SearchResults;