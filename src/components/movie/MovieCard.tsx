import { memo } from "react";
import { Link } from "react-router";
import { Movies } from "@/types/movies.interface";
import { useQueryClient } from "@tanstack/react-query";
import { getMovieById } from "@/services/movies.actions";

interface MovieCardProps {
  movie: Movies;
}

const MovieCard = memo(({ movie }: MovieCardProps) => {
  const queryClient = useQueryClient();
  const { title, poster_path, description, rate } = movie;

  const prefetchMovie = () => {
    queryClient.prefetchQuery({
      queryKey: ["movie", { id: movie.id }],
      queryFn: () => getMovieById(movie.id),
      staleTime: 1000 * 60 * 60,
    });
  };

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-card group" onMouseEnter={prefetchMovie}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "/no-movie.png"
          }
          alt={title}
        />
        <div className="movie-shadow"></div>
        <div className="movie-info">
          <span className="star">⭐ {Number(rate).toFixed(1)}</span>
          <h4>{title}</h4>
          <p>{description}</p>
          <button>Book now</button>
        </div>
      </div>
    </Link>
  );
});

// MovieCard.displayName = "MovieCard";

export default MovieCard;
