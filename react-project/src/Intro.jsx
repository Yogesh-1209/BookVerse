import "./App.css";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import bookCover from "@/assets/logo.jpg";

export default function Intro1() {
  return (
    <div>
      <Card className="max-w-sm mx-auto shadow-lg rounded-xl overflow-hidden bg-gradient-to-b from-white to-slate-100">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <img src={bookCover} className="w-18 h-10 "></img>
          <CardTitle className="text-xl font-semibold tracking-wide text-slate-800">
            <span>Book</span>
            <span className="text-red-500">Verse</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600 mt-2">
          Dive into a universe of books curated, reviewed, and loved by readers
          like you.
        </CardContent>
        <CardFooter className="flex justify-between mt-4">
          <Button variant="outline">Sign In</Button>
          <Button variant="outline">Sign Up</Button>
          <Button>Explore</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
