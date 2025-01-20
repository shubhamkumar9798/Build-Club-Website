"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Pic from "@/components/student/pic";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const events = [
  {
    id: 3,
    title: "Tech Conference 2025",
    description:
      "A detailed conference exploring the latest in technology and innovation.",
    date: "2025-02-15",
    venue: "Tech Hub, San Francisco",
    registration: "Register on the official website.",
    startTime: "9:00 AM",
    endTime: "5:00 PM",
    highlights: [
      "Keynote speeches by industry leaders.",
      "Workshops on AI and cloud computing.",
      "Panel discussions on future tech trends.",
    ],
    images: ["/work1.png", "/work2.png", "/work3.png"],
  },
  {
    id: 4,
    title: "Music Festival",
    description: "Join us for a night of great music and fun!",
    date: "2025-03-20",
    venue: "City Park, New York",
    registration: "Tickets available online.",
    startTime: "6:00 PM",
    endTime: "11:00 PM",
    highlights: [
      "Live performances by top artists.",
      "Food and drink stalls.",
      "Interactive games and contests.",
    ],
    images: ["/work4.png", "/work5.png", "/work6.png"],
  },
];

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      const eventId = parseInt(id, 10);
      const foundEvent = events.find((event) => event.id === eventId);
      setEvent(foundEvent);
    }
  }, [id]);

  if (!event) {
    return <p className="text-center text-gray-700">Loading or Event not found...</p>;
  }

  return (
    <Card className="pt-20 bg-white min-h-screen py-8 px-4">
      <div className="bg-gray-50 shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        {/* Event Header */}
        <div className="mb-6">
          <Pic src={event.images[0]} alt={event.title} className="mb-4 rounded-lg w-full h-60 object-cover" />
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">{event.title}</h1>
          <p className="text-gray-500 text-sm mb-2 text-center">Date: {event.date}</p>
        </div>

        {/* Event Details */}
        <div className="mb-6">
          <p className="text-gray-700 mb-2 text-center">
            <strong>Venue:</strong> {event.venue}
          </p>
          <p className="text-gray-700 mb-2 text-center">
            <strong>Registration:</strong> {event.registration}
          </p>
          <p className="text-gray-700 mb-2 text-center">
            <strong>Start Time:</strong> {event.startTime}
          </p>
          <p className="text-gray-700 mb-4 text-center">
            <strong>End Time:</strong> {event.endTime}
          </p>
          <p className="text-gray-700 text-lg mb-4">{event.description}</p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {event.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        {/* Event Gallery */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {event.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${event.title} image ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Back Button */}
        <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 mt-6">
          <a href="/student/eventsPage" className="w-full text-center text-white">
            Back to Events
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default EventDetailsPage;
