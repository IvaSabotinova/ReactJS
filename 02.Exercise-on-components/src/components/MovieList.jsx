
import Heading from "./Heading";
import Movie from "./Movie";


export default function MovieList(props) {
    return (
        <>
            <Heading>{props.heading}</Heading>

            <Movie movie={props.allMoviesData[0]} />
            <Movie movie={props.allMoviesData[1]} />
            <Movie movie={props.allMoviesData[2]} />
            <Movie movie={props.allMoviesData[3]} />

        </>
    );
}