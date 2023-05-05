
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from "react";
import axios from "axios";
import SearchBar from './components/SearchBar/SearchBar';
import styles from  "./App.module.css";

const URL_BASE = 'https://rickandmortyapi.com/api/character';
//const API_KEY = '1d654b32ba79.4737ffa8b099cadf88f6';
   //?key=${API_KEY}
   
function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}`)
   
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   return (
      <div className={styles.contenedor}>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
