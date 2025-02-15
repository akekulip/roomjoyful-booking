
import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/50 backdrop-blur-sm">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" className="hover-card">
            <LogIn className="h-5 w-5 mr-2" />
            Login
          </Button>
          <Button variant="ghost" className="hover-card">
            <User className="h-5 w-5 mr-2" />
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}
