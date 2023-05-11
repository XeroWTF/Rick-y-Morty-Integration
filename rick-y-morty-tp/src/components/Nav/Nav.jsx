import SearchBar from '../SearchBar/SearchBar';
import styles from "./Nav.module.css";
import { Navlink, Link } from "react-router-dom";



const Nav = ({ onSearch }) => {

    return (
        <div className={styles.contenedor}>
            <SearchBar onSearch={onSearch} />
        <hr/>
            <Link to="/home">
                <button>Home</button>
            </Link>

            <Link to="/about">
                <button>About</button>
            </Link>

            <Link to="/Favorites">
                <button>Favorites</button>
            </Link>
            
        </div>
    )
}

export default Nav;

