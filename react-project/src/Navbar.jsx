// components/Navbar.tsx
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="w-full border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-slate-800">
          Book<span className="text-red-500">Verse</span>
        </div>
        <div className="space-x-4 hidden md:flex">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Library</Button>
          <Button variant="ghost">Feed</Button>
          <Button variant="ghost">Matches</Button>
        </div>
      </div>
    </nav>
  );
}
