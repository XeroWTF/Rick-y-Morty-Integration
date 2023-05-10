import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import styles from './App.module.css';

const URL_BASE = 'https://rickandmortyapi.com/api/character';

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter((character) => character.id !== id);
    setCharacters(charactersFiltered);
  };

  return (
    <div className={styles.contenedor}>
     
        <Nav onSearch={onSearch} />
        <Routes>
         <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      
    </div>
  );
}

export default App;
