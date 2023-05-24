import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css"

const Detail = () => {
    const { id } = useParams();
    const[character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     return (
        <div className={styles.detail}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={character.image} alt="" />
          </div>
          <div className={styles.info}>
            <h1>Name: {character.name && character.name}</h1>
            <hr />
            <h1>Species: {character.species && character.species}</h1>
            <h1>Origin: {character.origin?.name && character.origin?.name}</h1>
            <h1>Gender: {character.gender && character.gender}</h1>
            <h1>Status: {character.status && character.status}</h1>
            <h1>Location: {character.location?.name && character.location?.name}</h1>
          </div>
        </div>
      );
    };


export default Detail;