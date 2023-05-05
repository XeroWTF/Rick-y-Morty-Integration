import SearchBar from '../SearchBar/SearchBar';
import styles from "./Nav.module.css";



const Nav = ({ onSearch }) => {

    return (
            <div className ={styles.contenedor}>
                <SearchBar onSearch={onSearch}/>
            </div>
    )
}

export default Nav;

