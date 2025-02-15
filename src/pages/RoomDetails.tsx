
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Clock, Info } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

// TODO: Replace with actual data from backend
const mockRoom = {
  id: "1",
  name: "Executive Suite",
  description: "A spacious room perfect for important meetings and presentations.",
  capacity: 12,
  imageUrl: "/placeholder.svg",
  hourlyRate: 50,
  amenities: ["Projector", "Whiteboard", "Video conferencing", "Coffee machine"],
};

export default function RoomDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");

  const handleBooking = () => {
    // TODO: Implement actual booking logic
    toast({
      title: "Booking Confirmed!",
      description: `You have booked ${mockRoom.name} for ${format(date!, "PPP")} from ${startTime} to ${endTime}`,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src={mockRoom.imageUrl}
              alt={mockRoom.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{mockRoom.name}</h1>
            <p className="text-muted-foreground mt-2">{mockRoom.description}</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Up to {mockRoom.capacity} people</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>${mockRoom.hourlyRate}/hour</span>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5" />
                <h3 className="font-semibold">Amenities</h3>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {mockRoom.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Book This Room</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={handleBooking} className="w-full">
                Confirm Booking
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
