import { useParams, Navigate } from "react-router";
import useMovieDetails from "@/hooks/useMovieDetails";
import {
  MovieDetailsHeader,
  MovieDetailsDescription,
  MovieDetailsDates,
  MovieDetailsTimes,
  MovieDetailsSeatsSelection,
} from "@/components/movieDetails";

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
    email,
    setEmail,
    bookTickets,
    submitLoading,
  } = useMovieDetails(Number(movie_id));

  if (movie.isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie.data || movie.isError) {
    return <Navigate to="/404" />;
  }

  const isAvailableToBook: boolean = selectedSeats.length > 0 && !!email;

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
          {seats && seats.length > 0 && (
            <section>
              <hr className="mt-5 border border-slate-900" />
              <MovieDetailsSeatsSelection
                seats={seats}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
              <hr className="mt-5 border border-slate-900" />
              <p className="text-slate-200 mt-2">
                Please enter your email to receive the tickets
              </p>
              <input
                type="email"
                className="w-full mt-2 text-slate-200 bg-slate-800 border border-slate-900 rounded-md p-3 focus:outline-none placeholder:text-slate-400 placeholder:font-medium"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </section>
          )}
          <button
            aria-label="Book tickets"
            onClick={bookTickets}
            className="book cursor-pointer"
            disabled={!isAvailableToBook || submitLoading}
          >
            {submitLoading ? (
              <span>Booking tickets...</span>
            ) : (
              `Book ${totalPrice}$`
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
