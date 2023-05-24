import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import styles from './App.module.css';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';


const EMAIL = 'eugedsr@gmail.com';
const PASSWORD = 'm111785.';


const URL_BASE = 'http://localhost:3001/rickandmorty/character/${id}';

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
 
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
};

useEffect(() => {
  !access && navigate('/');
}, [access]);
  

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
      
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

    </div>
  );
}

export default App;
