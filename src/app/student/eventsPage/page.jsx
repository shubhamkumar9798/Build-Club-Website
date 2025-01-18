'use client';

import { useState } from 'react';
import EventCard from '@/components/student/eventCard'; // Reuse EventCard for upcoming events
import PastEventCard from '@/components/student/pastEventCard'; // Import PastEventCard for past events
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'; // HoverCard from ShadCN for hover effect

export default function EventsPage() {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const cardDimensions = "w-72 h-96"; // Fixed width and height for consistency

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Conference 2025',
      description: 'A conference about the latest in tech and innovation.',
      date: '2025-02-15',
      image: '/work1.png',
    },
    {
      id: 2,
      title: 'Music Festival',
      description: 'Join us for a night of great music and fun!',
      date: '2025-03-20',
      image: '/work3.png',
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'AI Workshop 2024',
      description: 'A workshop on Artificial Intelligence and its applications.',
      date: '2024-11-10',
      image: '/work4.png',
    },
    {
      id: 4,
      title: 'Design Sprint 2024',
      description: 'A hands-on design sprint event for designers and developers.',
      date: '2024-09-05',
      image: '/work5.png',
    },
  ];

  return (
    <div className="pt-20 container mx-auto p-6 bg-white shadow-lg w-full">
      {/* Upcoming Events */}
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto">
        {upcomingEvents.map((event) => (
          <HoverCard key={event.id} openDelay={300} closeDelay={300}>
            <HoverCardTrigger asChild>
              <div
                className={`relative ${cardDimensions} flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredEvent(event)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <EventCard event={event} />
              </div>
            </HoverCardTrigger>

            <HoverCardContent className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>

      {/* Past Events */}
      <h1 className="text-3xl font-bold text-center mt-16 mb-8">Past Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto">
        {pastEvents.map((event) => (
          <HoverCard key={event.id} openDelay={300} closeDelay={300}>
            <HoverCardTrigger asChild>
              <div
                className={`relative ${cardDimensions} flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredEvent(event)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <PastEventCard event={event} />  {/* Using PastEventCard for past events */}
              </div>
            </HoverCardTrigger>

            <HoverCardContent className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
