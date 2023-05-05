import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import characters, { Rick } from './data.js';
import Nav from './components/Nav/Nav';

function App() {
   return (
      <div className='App'>
         <Nav />
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
