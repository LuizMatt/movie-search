import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (input.length < 3) return;

      const response = await fetch(
        `http://www.omdbapi.com/?s=${input}&apikey=3c4927f2`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    };

    fetchMovies();
  }, [input]);

  return (
    <div className="app-container">
      <h1 className="app-title">🎬 Buscador de Filmes</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Digite o filme que deseja:"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
