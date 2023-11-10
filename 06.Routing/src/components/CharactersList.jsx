import { useState, useEffect } from "react";
import CharactersListItem from "./CharactersListItem";
import styles from "./CharactersList.module.css"

const CharactersList = () => {
   const base_URL = 'https://swapi.dev/api/people/';
   const [characters, setCharacters] = useState([]);
   useEffect(() => {
      fetch(base_URL)
         .then((res) => res.json())
         .then(data => {
            setCharacters(data.results)
         })
   }, [])

   return (
      <>
         <h3>All Star Wars Characters</h3>
         <div className={styles.charactersList}>
            {characters.map((x, index) => <CharactersListItem key={x.name} id={index + 1}  {...x} />)}
         </div>
      </>
   );
}

export default CharactersList;