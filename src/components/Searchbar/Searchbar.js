import React, { useState } from 'react';
import './Searchbar.scss';

export const Searchbar = (props) => {

    const { searchData, updateSearchData, updateSearchValue, searchValue } = props;
    const [page, setPage] = useState(1);

    const API_KEY = "8ca67d21";
    const SEARCH_API = `http://www.omdbapi.com/?t=${searchValue}&apikey=${API_KEY}`;
    const MIN_SEARCH_LENGTH = 3;
    const [showError, setShowError] = useState(false);

    const handleSearch = (e) => {
        updateSearchData([]);
        updateSearchValue(e.target.value);
    };

    const handleClick = () => {
        // Execute search
        if (searchValue.length >= MIN_SEARCH_LENGTH) {
            fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=1`)
            // fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=${page}`)
                .catch((error) => {
               console.error(error);
                })
                .then((res) => res.json())
                .then(result => {
                    updateSearchData(result);
                    setPage(page + 1);
                });
                setShowError(false);
        } else {
            setShowError(true);
        }
    };

    return (
    <div className="searchbar">
        <input type="search" placeholder="Search for movies" onChange={(e) => {handleSearch(e)}} value={searchValue}/>
        {showError && <p className="error-message">Movie title need a minium length of {MIN_SEARCH_LENGTH} characters.</p>}
        <button type="submit" onClick={handleClick}>Search</button>
    </div>);

};

export default { Searchbar};