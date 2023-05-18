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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    onSearch(id);
    setId(''); // Limpiar el valor del input después de realizar la búsqueda
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default SearchBar;
