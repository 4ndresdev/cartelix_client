import { ShowTime } from "@/interfaces/movieDetails.interface";

interface MovieDetailsDatesProps {
  times: ShowTime[];
  bookTime: string | null;
  setBookTime: React.Dispatch<React.SetStateAction<ShowTime | null>>;
}

const MovieDetailsTimes = ({
  times,
  bookTime,
  setBookTime,
}: MovieDetailsDatesProps) => {
  return (
    <div className="mt-2">
      <p className="text-slate-200">Select hour</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {times.map((time) => {
          const isSelected = bookTime && bookTime === time.time;
          return (
            <button
              key={time.id}
              className={`button-selected ${isSelected ? "bg-nexflix-red text-white" : "text-slate-400"}`}
              onClick={() => setBookTime(time)}
            >
              <span>{time.time}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetailsTimes;
