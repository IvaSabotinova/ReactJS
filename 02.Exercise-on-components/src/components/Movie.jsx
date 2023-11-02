export default function Movie(props) {
    return (
        <>
            <h3>Id: {props.movie.id}</h3>
            <p>Title: {props.movie.title}</p>
            <p>Year: {props.movie.year}</p>
            <p>Runtime: {props.movie.runtime}</p>
            <p>Director: {props.movie.director}</p>
            <p>Actors: {props.movie.actors}</p>
            <p>Plot: {props.movie.plot}</p>
            <p>PosterUrl: {props.movie.posterUrl}</p>
            <br/>
        </>

    );
}