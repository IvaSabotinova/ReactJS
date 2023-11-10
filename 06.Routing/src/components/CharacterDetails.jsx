import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";



const CharacterDetails = () => {

    const [character, setCharacter] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Character not found!!!')
                }
                return res.json()
            })
            .then(setCharacter)
            .catch((err) => {
                navigate('/characters');
            })
    }, [id])
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