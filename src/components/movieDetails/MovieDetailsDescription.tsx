import { MovieDetail } from "@/types/movieDetails.interface";
import { minutesToHours } from "@/utils";

interface MovieDetailsDescriptionProps {
  movie: MovieDetail;
}

const MovieDetailsDescription = ({ movie }: MovieDetailsDescriptionProps) => {
  return (
    <>
      <h3 className="mb-1">{movie.title}</h3>
      <div>
        <span className="text-slate-500">2019</span>
        <span className="mx-2 text-slate-500">•</span>
        <span className="text-slate-500">{minutesToHours(movie.duration)}</span>
        <span className="mx-2 text-slate-500">•</span>
        <span className="text-slate-500">
          ⭐ {Number(movie.rate).toFixed(1)}
        </span>
      </div>
      <p className="text-white text-base leading-normal tracking-tight mt-1">
        {movie.description}
      </p>
      {movie.movie_actors.length > 0 && (
        <div className="flex items-center mt-4 avatar-group">
          {movie.movie_actors.slice(0, 3).map((actor) => {
            if (actor.c_actors.profile_path) {
              return (
                <div
                  className="w-14 h-14 mr-2 rounded-full overflow-hidden border-3 border-white"
                  key={actor.c_actors.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.c_actors.profile_path}`}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default MovieDetailsDescription;
