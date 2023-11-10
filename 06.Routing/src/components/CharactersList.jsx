import { useState, useEffect } from "react";
import CharactersListItem from "./CharactersListItem";

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

   return (<>
      <>
         <h3>All Star Wars Characters</h3>
         <ul>
            {characters.map(x => <li key={x.name}><CharactersListItem  {...x} /></li>)}
         </ul>
      </>
   </>);
}

export default CharactersList;