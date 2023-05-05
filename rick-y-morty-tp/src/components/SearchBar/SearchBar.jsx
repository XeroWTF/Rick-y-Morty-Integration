import styles from "./SearchBar.module.css";
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  
   const [id, setId] = useState('');

   const [options, setOptions] = useState(
      Array.from({ length: 826 }, (_, index) => index + 1)
    );

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={styles.contenedor}>
        <input
          type="search"
          onChange={handleChange}
          value={id}
          list="options"
        />
        <datalist id="options">
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
        <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
    );
    
}

export default SearchBar