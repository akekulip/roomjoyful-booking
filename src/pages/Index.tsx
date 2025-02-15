
import { Button } from "@/components/ui/button";
import { Calendar, Building } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center space-y-8 text-center pt-12">
        <div className="space-y-4 animate-slideIn">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Book Your Perfect Meeting Space
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
            Simple, efficient, and beautiful room booking system for your workplace.
          </p>
        </div>

        <div className="flex gap-4 animate-slideIn" style={{ animationDelay: "0.2s" }}>
          <Button className="hover-card" size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            Book a Room
          </Button>
          <Button variant="outline" className="hover-card" size="lg">
            <Building className="mr-2 h-5 w-5" />
            View Rooms
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass-panel p-6 hover-card animate-slideIn"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">Meeting Room {i}</h3>
              <p className="text-gray-500">
                Modern space for {4 + i * 2} people with full amenities
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
