import { Movie } from "../../models/Movie";
import "./Movies.css";

function getUrl(url: string) {
  return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${url}`;
}

function Movies(movie: Movie) {
  return (
    <>
      <div className="card">
        <img
          src={getUrl(movie.backdrop_path)}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title.toUpperCase()}</h5>
          <p className="card-text">{movie.overview}</p>
          <div className="footer">
            <i
              onClick={() => console.log(movie.id)}
              className={true ? "bi bi-heart-fill" : "bi bi-heart"}
            ></i>
            <a href="#" className="btn btn-primary">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
