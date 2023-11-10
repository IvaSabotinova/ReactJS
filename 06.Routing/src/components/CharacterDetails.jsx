import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";


const CharacterDetails = () => {  

 const [character, setCharacter] = useState({});
    const { id } = useParams();
    const location = useLocation();
    console.log(location.pathname);
    
    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${id}`)
        .then((res)=> res.json())
        .then(setCharacter)
       },[id])
    return (
        <>
            <h1>Character Details</h1>
            <h3>Name: {character.name}</h3>
            <p>{id}</p>
            <p>hair_color: {character.hair_color}, eye_color: {character.eye_color}</p>           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore eos laudantium, sequi eius vero, amet fuga dolor maiores excepturi necessitatibus, sint magnam! Tempore eveniet cum, velit accusamus at quam.</p>
        </>
    );
}

export default CharacterDetails;