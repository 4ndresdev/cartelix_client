import { Seats } from "@/interfaces/seats.interface";

interface MovieDetailsSeatsSelectionProps {
  seats: Seats[];
}

const MovieDetailsSeatsSelection = ({
  seats,
}: MovieDetailsSeatsSelectionProps) => {
  console.log(seats);
  return (
    <div className="mt-2">
      <p className="text-slate-200">Select your seats</p>
    </div>
  );
};

export default MovieDetailsSeatsSelection;
