import { ShowDate } from "@/types/movieDetails.interface";
import { format } from "date-fns";

interface MovieDetailsDatesProps {
  dates: ShowDate[];
  bookDate: Date | null;
  setBookDate: React.Dispatch<React.SetStateAction<ShowDate | null>>;
}

const MovieDetailsDates = ({
  dates,
  bookDate,
  setBookDate,
}: MovieDetailsDatesProps) => {
  return (
    <div className="mt-2">
      <p className="text-slate-200">Select a date</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {dates.map((date) => {
          const formattedDate = format(date.date, "yyyy-MM-dd");
          const isSelected =
            bookDate && format(bookDate, "yyyy-MM-dd") === formattedDate;
          return (
            <button
              key={date.id}
              className={`button-selected ${isSelected ? "bg-nexflix-red text-white" : "text-slate-400"}`}
              onClick={() => setBookDate(date)}
            >
              <span>{format(date.date, "EEE")}</span>
              <span className="text-3xl font-semibold">
                {format(date.date, "dd")}
              </span>
              <span className="text-md">{format(date.date, "MMMM ")}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetailsDates;
