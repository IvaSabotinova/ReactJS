import { useEffect, useState } from "react";


export default function StarWars(props) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then((res) => res.json())
            .then((data) => {
                setPeople(data.results);
            }
            )
            .catch((err) => console.log(err))
    }, []);

    return (
        <>
            <h1>Star Wars Characters</h1>
            <ul>
                {people.map(x =>
                    <li
                        key={x.url}                       
                    >
                        {x.name}
                    </li>)}
            </ul>

        </>
    );
}