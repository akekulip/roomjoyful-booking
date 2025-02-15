
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface RoomCardProps {
  id: string;
  name: string;
  capacity: number;
  imageUrl: string;
  hourlyRate: number;
}

export function RoomCard({ id, name, capacity, imageUrl, hourlyRate }: RoomCardProps) {
  return (
    <Card className="overflow-hidden hover-card">
      <div className="aspect-video relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Up to {capacity}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>${hourlyRate}/hour</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/rooms/${id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
