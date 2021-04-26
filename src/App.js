import React, { useState } from 'react';
import logo from './assets/logo-movie.svg';
import './styles/App.scss';
import {Searchbar} from './components/Searchbar/Searchbar';
import { ConfirmationModal } from './components/ConfirmationModal/ConfirmationModal';
import { SearchResults } from './components/SearchResults/SearchResults';
import { Playlist } from './components/Playlist/Playlist';

const App = () => {
  const [searchData, setSearchData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [playlistItems, setPlaylistItems] = useState([]);
  const [currentSelectedMovie, setCurrentSelectedMovie] = useState({});

  const updateSearchData = (data) => {
    setSearchData(data);
  }

  const updateShowModal = (isOpen) => {
    setShowModal(isOpen);
  }

  const updatePlaylist = (item) => {
    setPlaylistItems(playlistItems.concat(item));
  }

  const updateSearchValue = (search) => {
    setSearchValue(search);
  }

  const updateCurrentSelectedMovie = (movie) => {
    setCurrentSelectedMovie(movie);
  };

  console.log("playlistItems");
  console.log(playlistItems);

  return (
    <div className="App">
      <div className={`${showModal ? 'modal-open' : 'modal-closed'}`}>
        <div className="logo-container">
          <img className="logo" src={logo} />
        <h1>Finding Movies</h1>
        </div>
        <Searchbar searchData={searchData} updateSearchData={updateSearchData} updateSearchValue={updateSearchValue} searchValue={searchValue}/>
        <Playlist playlist={playlistItems} />
        <SearchResults searchData={searchData} updateShowModal={updateShowModal} searchValue={searchValue} updateCurrentSelectedMovie={updateCurrentSelectedMovie}/>
    </div>
      <ConfirmationModal showModal={showModal} updateShowModal={updateShowModal} movieInfo={currentSelectedMovie} updatePlaylist={updatePlaylist}/>
    </div>
  );
}

export default App;


