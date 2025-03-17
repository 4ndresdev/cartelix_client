import { useParams, Navigate } from "react-router";
import useMovieDetails from "@/pages/movies/details/hooks/useMovieDetails";
import {
  MovieDetailsHeader,
  MovieDetailsDescription,
  MovieDetailsDates,
  MovieDetailsTimes,
  MovieDetailsSeatsSelection,
} from "@/components/ui/movieDetails";

const MovieDetails = () => {
  const { movie_id } = useParams();
  const {
    movie,
    bookDate,
    setBookDate,
    bookTime,
    setBookTime,
    seats,
    selectedSeats,
    setSelectedSeats,
    totalPrice,
  } = useMovieDetails(Number(movie_id));

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
          {bookDate && bookDate.show_times.length > 0 && (
            <section>
              <MovieDetailsTimes
                times={bookDate.show_times}
                bookTime={bookTime?.time || null}
                setBookTime={setBookTime}
              />
            </section>
          )}
          <hr className="mt-5 border border-slate-900" />
          {seats && seats.length > 0 && (
            <section>
              <MovieDetailsSeatsSelection
                seats={seats}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            </section>
          )}
          <button
            className="book cursor-pointer"
            disabled={!selectedSeats.length}
          >
            Book {totalPrice}$
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
