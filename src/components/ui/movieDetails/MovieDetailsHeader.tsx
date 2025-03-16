import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const MovieDetailsHeader = ({ poster_path }: { poster_path: string }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-details-header">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.30),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.30),rgba(255,255,255,0))]"></div>
      <button onClick={() => navigate("/")}>
        <ChevronLeft className="text-slate-300" />
      </button>
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <div className="movie-shadow" />
      </div>
    </div>
  );
};

export default MovieDetailsHeader;
