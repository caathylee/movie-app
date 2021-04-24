import React from 'react';
import { Movie } from '../Movie/Movie';

export const SearchResults = (props) => {
    const {searchData, updateShowModal} = props;
    return (
    <div className="results-feed">
        {searchData?.Search?.map((result) => {return <Movie key={result.imdbID} data={result} />})}
    </div>);
};

export default { SearchResults };