import { Seats } from "@/interfaces/seats.interface";
import { User } from "lucide-react";
import { Seat } from "@/components/ui/movieDetails";

interface MovieDetailsSeatsSelectionProps {
  seats: Seats[];
  selectedSeats: Seats[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<Seats[]>>;
}

const MovieDetailsSeatsSelection = ({
  seats,
  selectedSeats,
  setSelectedSeats,
}: MovieDetailsSeatsSelectionProps) => {
  return (
    <div className="mt-2">
      <p className="text-slate-200">Select your seats</p>
      <div className="flex gap-2 mt-2">
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-slate-800 rounded-md"></div>
          <span className="text-slate-200 text-sm">Occupied</span>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-slate-500 rounded-md flex items-center justify-center">
            <User className="size-4 text-slate-200" />
          </div>
          <span className="text-slate-200 text-sm">Available</span>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center bg-nexflix-red" />
          <span className="text-slate-200 text-sm">Selected</span>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2 mt-5">
        {seats.map((seat) => {
          return (
            <Seat
              key={seat.id}
              seat={seat}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          );
        })}
      </div>
      {selectedSeats.length > 0 && (
        <div className="mt-3">
          <p className="text-slate-200">Seats selected</p>
          <div className="flex gap-2 mt-2 flex-wrap bg-slate-900 p-2 rounded-md">
            {selectedSeats.map((seat) => (
              <span
                key={seat.id}
                className="bg-slate-700 text-white px-5 rounded-md font-medium"
              >
                {seat.row}
                {seat.number}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsSeatsSelection;
