import React, { useState } from 'react';
import './Searchbar.scss';
import { uniqBy } from 'lodash';

export const Searchbar = (props) => {

    const { updateSearchData, updateSearchValue, searchValue } = props;
    const [page, setPage] = useState(1);

    const API_KEY = "8ca67d21";
    const httpProtocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const SEARCH_API = `${httpProtocol}://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
    const MIN_SEARCH_LENGTH = 3;
    const [showError, setShowError] = useState(false);

    const handleSearch = (e) => {
        updateSearchData([]);
        updateSearchValue(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        // Execute search
        if (searchValue.length >= MIN_SEARCH_LENGTH) {
            fetch(`${SEARCH_API}&page=1`)
                .catch((error) => {
                    console.error(error);
                })
                .then((res) => res.json())
                .then(result => {
                    //TODO: uniqBy fixes issue with children with duplicate keys. Better solution is to extract the result.Search into its own variable. This will help with pagination feature when implemented.
                    const uniqResults = uniqBy(result.Search, 'imdbID');
                    result.Search = uniqResults;
                    updateSearchData(result);
                    setPage(page + 1);
                });
                setShowError(false);
        } else {
            setShowError(true);
        }
    };

    return (
    <form className="searchbar" onSubmit={handleClick}>
        <input type="search" placeholder="Search for movies" onChange={(e) => {handleSearch(e)}} value={searchValue}/>
        {showError && <p className="error-message">Movie title need a minium length of {MIN_SEARCH_LENGTH} characters.</p>}
        <button type="submit">Search</button>
    </form>);

};

export default Searchbar;