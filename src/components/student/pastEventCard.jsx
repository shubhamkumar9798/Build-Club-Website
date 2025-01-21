import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Pic from "./pic";
import Link from "next/link";

export default function PastEventCard({ event }) {
  return (
    <Card className="w-full max-w-xs flex flex-col justify-between shadow-lg rounded-lg mb-6 mx-auto pb-1">
      {/* Event Image */}
      <div className="h-40 w-full overflow-hidden rounded-t-lg">
        <Pic src={event.image} alt={event.title} className="h-full w-full object-cover" priority />
      </div>

      {/* Event Content */}
      <CardContent className=" p-4">
        <h2 className="text-xl font-bold">{event.title}</h2>
        <p className="text-gray-700 text-sm mb-2">{event.description}</p>
        <p className="text-gray-500 text-sm">Date: {event.date}</p>
      </CardContent>

      {/* Show More Button */}
      <CardFooter className="p-2">
        <Link rel= "preload" href={`/student/pastEvents/${event.id}`} passHref>
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition ">
            Show More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
