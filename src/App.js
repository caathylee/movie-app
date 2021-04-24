import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import {Searchbar} from './components/Searchbar/Searchbar';
import { Movie } from './components/Movie/Movie';
import { ConfirmationModal } from './components/ConfirmationModal/ConfirmationModal';
import { SearchResults } from './components/SearchResults/SearchResults';

const App = () => {
  const [searchData, setSearchData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const updateSearchData = (data) => {
    setSearchData(data);
  }

  const updateShowModal = (isOpen) => {
    setShowModal(isOpen);
  }

  return (
    <div className="App">
      <Searchbar searchData={searchData} updateSearchData={updateSearchData}/>
      <SearchResults searchData={searchData} updateShowModal={updateShowModal} />
      <ConfirmationModal showModal={showModal} updateShowModal={updateShowModal} />
    </div>
  );
}

export default App;


