import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img className="poster" src={movie.Poster} alt={movie.Title} />
      <div className="info">
        <h3 className="title">{movie.Title}</h3>
        <p className="year">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
