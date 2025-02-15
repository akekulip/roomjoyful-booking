
import { RoomCard } from "@/components/RoomCard";

// TODO: Replace with actual data from backend
const mockRooms = [
  {
    id: "1",
    name: "Executive Suite",
    capacity: 12,
    imageUrl: "/placeholder.svg",
    hourlyRate: 50,
  },
  {
    id: "2",
    name: "Brainstorm Room",
    capacity: 6,
    imageUrl: "/placeholder.svg",
    hourlyRate: 30,
  },
  {
    id: "3",
    name: "Conference Hall",
    capacity: 24,
    imageUrl: "/placeholder.svg",
    hourlyRate: 80,
  },
];

export default function Rooms() {
  return (
    <div className="container mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Available Rooms</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
}
