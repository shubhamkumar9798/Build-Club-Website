'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Using Next.js' useParams for dynamic routes
import Pic from '@/components/student/pic';
import { Button } from '@/components/ui/button'; // Import Button

// Dummy event data
const events = [
  {
    id: 1,
    title: 'Tech Conference 2025',
    description: 'A detailed description of the Tech Conference 2025.',
    date: '2025-02-15',
    venue: 'Tech Hub, San Francisco',
    registration: 'Register on the official website.',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    image: '/work1.png',
  },
  {
    id: 2,
    title: 'Music Festival',
    description: 'Join us for a night of great music and fun!',
    date: '2025-03-20',
    venue: 'City Park, New York',
    registration: 'Tickets available online.',
    startTime: '6:00 PM',
    endTime: '11:00 PM',
    image: '/work2.png',
  },
  // Add more events as needed
];

export default function EventDetailsPage() {
  const { id } = useParams(); // Fetch dynamic route parameter using useParams
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      const eventId = parseInt(id, 10); // Ensure it's an integer

      // Find the event matching the ID
      const foundEvent = events.find(event => event.id === eventId);
      setEvent(foundEvent);
    }
  }, [id]);

  // Loading or event not found state
  if (!event) {
    return <p className="text-center text-gray-700">Loading or Event not found...</p>;
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        {/* Event Image */}
        <Pic src={event.image} alt={event.title} className="mb-4 rounded-lg" />

        {/* Event Title */}
        <h1 className="text-3xl font-bold mb-4 text-center">{event.title}</h1>

        {/* Event Date */}
        <p className="text-gray-500 text-sm mb-2 text-center">Date: {event.date}</p>

        {/* Venue */}
        <p className="text-gray-700 mb-2 text-center">
          <strong>Venue:</strong> {event.venue}
        </p>

        {/* Registration Process */}
        <p className="text-gray-700 mb-2 text-center">
          <strong>Registration:</strong> {event.registration}
        </p>

        {/* Start and End Time */}
        <p className="text-gray-700 mb-2 text-center">
          <strong>Start Time:</strong> {event.startTime}
        </p>
        <p className="text-gray-700 mb-4 text-center">
          <strong>End Time:</strong> {event.endTime}
        </p>

        {/* Event Description */}
        <p className="text-gray-700 text-sm mb-4">{event.description}</p>

        {/* Back Button */}
        <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 mt-4">
          <a href="/student/eventsPage" className="w-full text-center text-white">Back to Events</a>
        </Button>
      </div>
    </div>
  );
}
