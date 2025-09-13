
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieCard() {
  const { directorId, movieId } = useParams();
  const [director, setDirector] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/directors/${directorId}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        setDirector(data);
        if (data && data.movies) {
          const foundMovie = data.movies.find(m => m.id === movieId);
          setMovie(foundMovie || null);
        } else {
          setMovie(null);
        }
      })
      .catch(() => {
        setDirector(null);
        setMovie(null);
      });
  }, [directorId, movieId]);

  if (!director) return <h2>Director not found.</h2>;
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}

export default MovieCard;
