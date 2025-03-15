import Search from "@/components/ui/Search";
import useMovies from "@/pages/movies/hooks/useMovies";
import MoviesGrid from "@/components/ui/MoviesGrid";
import TrendingMoviesGrid from "@/components/ui/TrendingMoviesGrid";

const Movies = () => {
  const { searchTerm, setSearchTerm, movies, trendingMovies } = useMovies();
  return (
    <>
      <header>
        <img src="/hero.png" alt="Hero Banner" />
        <p className="text-white text-center mt-3 font-medium">
          Discover. Book. Enjoy. 🎟️✨
        </p>
        <h1 className="text-center mt-2">
          Find the best <span className="text-gradient">movies</span>, choose
          your seats, and enjoy the show
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      {trendingMovies.data && trendingMovies.data.length > 0 && (
        <section className="trending">
          <TrendingMoviesGrid
            trendingMovies={trendingMovies.data}
            isError={trendingMovies.isError}
            isLoading={trendingMovies.isFetching}
          />
        </section>
      )}
      <section className="all-movies">
        <MoviesGrid
          movies={movies.data || []}
          isLoading={movies.isFetching}
          isError={movies.isError}
          searchTerm={searchTerm}
        />
      </section>
    </>
  );
};

export default Movies;
