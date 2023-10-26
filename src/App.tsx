import Movies from "./components/movies/movies";
import { getMovies } from "./shared/services/Movies.tsx";
import "./App.css";

let movies: any[] = [];

getMovies().then((data) => {
  movies = data.results;
});

function App() {
  return (
    <div className="movieList">
      {movies.map((data) => (
        <Movies
          key={data.id}
          title={data.title}
          overview={data.overview}
          backdrop_path={data.backdrop_path}
          id={data.id}
        />
      ))}
    </div>
  );
}

export default App;
