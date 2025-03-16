import { useParams, Navigate } from "react-router";
import useMovieDetails from "@/pages/movies/details/hooks/useMovieDetails";
import MovieDetailsHeader from "@/components/ui/movieDetails/MovieDetailsHeader";
import MovieDetailsDescription from "@/components/ui/movieDetails/MovieDetailsDescription";
import MovieDetailsDates from "@/components/ui/movieDetails/MovieDetailsDates";
import MovieDetailsTimes from "@/components/ui/movieDetails/MovieDetailsTimes";

const MovieDetails = () => {
  const { movie_id } = useParams();
  const { movie, bookDate, setBookDate, bookTime, setBookTime } =
    useMovieDetails(Number(movie_id));

  if (movie.isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie.data || movie.isError) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="movie-details">
      <MovieDetailsHeader poster_path={movie.data.poster_path} />
      <div className="movie-details-content">
        <div className="backdrop-path">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.data.backdrop_path}`}
            alt={movie.data.title}
          />
          <div className="backdrop-shadow" />
        </div>
        <div className="py-4 px-5 w-full">
          <section>
            <MovieDetailsDescription movie={movie.data} />
          </section>
          <h3 className="mt-5">Buy tickets</h3>
          <section>
            <MovieDetailsDates
              dates={movie.data.show_dates}
              bookDate={bookDate?.date || null}
              setBookDate={setBookDate}
            />
          </section>
          <section>
            {bookDate && bookDate.show_times.length > 0 && (
              <MovieDetailsTimes
                times={bookDate.show_times}
                bookTime={bookTime?.time || null}
                setBookTime={setBookTime}
              />
            )}
          </section>
          <hr className="mt-5 border border-slate-800" />
          <section>seats</section>
          <button className="book" disabled>
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
