import logo from './logo.svg';
import './styles/App.scss';
import {Searchbar} from './components/Searchbar/Searchbar';
import { Movie } from './components/Movies/Movie';
import { ConfirmationModal } from './components/ConfirmationModal/ConfirmationModal';

const App = () => {
  return (
    <div className="App">
      <Searchbar />
      <Movie />
      <ConfirmationModal />
    </div>
  );
}

export default App;
