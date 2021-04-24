import React, { useState } from 'react';

export const Searchbar = (props) => {

    const { searchData, updateSearchData } = props;
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);

    const API_KEY = "8ca67d21";
    const SEARCH_API = `http://www.omdbapi.com/?t=${searchValue}&apikey=${API_KEY}`;

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClick = () => {
        // Execute search
        fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=${page}`)
            .catch((error) => {
           console.error(error);
            })
            .then((res) => res.json())
            .then(result => {
                updateSearchData(result);
                setPage(page + 1);
            });
    };

    return (
    <div className="searchbar">
        <input type="search" onChange={(e) => {handleSearch(e)}} value={searchValue}/>
        <button type="submit" onClick={handleClick}>Search</button>
    </div>);

};

export default { Searchbar};