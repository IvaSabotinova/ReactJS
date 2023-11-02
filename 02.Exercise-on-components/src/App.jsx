
import MovieList from './components/MovieList'
import Counter from './components/Counter'
import movies from './assets/movies'
import './App.css'
import Timer from './components/Timer'


function App() {


  return (
    <>
      <Counter />
      <Timer start={0} />
      <MovieList allMoviesData={movies} heading='All Movies Data' />
    </>
  )
}

export default App
