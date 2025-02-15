
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-6 animate-fadeIn">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
