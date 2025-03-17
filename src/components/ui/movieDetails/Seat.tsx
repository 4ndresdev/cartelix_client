import { Seats } from "@/types/seats.interface";
import { User } from "lucide-react";

interface SeatProps {
  seat: Seats;
  selectedSeats: Seats[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<Seats[]>>;
}

const Seat = ({ seat, selectedSeats, setSelectedSeats }: SeatProps) => {
  const isSelected = selectedSeats.some(
    (selectedSeat) => selectedSeat.id === seat.id
  );

  const seatIndex =
    selectedSeats.findIndex((selectedSeat) => {
      return selectedSeat.id === seat.id;
    }) + 1;

  const handleSeatClick = () => {
    if (seat.status_id === 3) return;

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div
      onClick={handleSeatClick}
      className={`w-auto rounded-md flex items-center justify-center cursor-pointer aspect-square ${
        seat.status_id === 3
          ? "bg-slate-800"
          : isSelected
            ? "bg-nexflix-red"
            : "bg-slate-500"
      }`}
    >
      {seat.status_id !== 3 && !isSelected && (
        <User className="size-4 text-slate-300" strokeWidth={3} />
      )}
      {isSelected && (
        <span className="text-xs font-bold text-white">{seatIndex}</span>
      )}
    </div>
  );
};

export default Seat;
