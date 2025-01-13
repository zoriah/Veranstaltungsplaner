import React, { useEffect, useState } from "react";
import EventPreview from "./EventPreview";
import { getAllEvents } from "../../services/event-service";

const EventList = () =>
{
    const [events, setEvents] = useState([]);

    useEffect(() =>
    {
        const fetchEvents = async () =>
        {
            try
            {
                const token = localStorage.getItem("token");
                if (!token)
                {
                    alert("Bitte einloggen, um Events zu sehen.");
                    return;
                }
                const eventList = await getAllEvents(token);
                setEvents(eventList);
            } catch (error)
            {
                console.error("Fehler beim Abrufen der Events:", error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Verfügbare Events</h1>
            <ul className="space-y-4">
                {events.map((event) => (
                    <li
                        key={event.id}
                        className="border p-4 rounded bg-white shadow flex justify-between items-center"
                    >
                        <div>
                            <h2 className="text-xl font-semibold">{event.name}</h2>
                            <p className="text-gray-600">{event.date}</p>
                        </div>
                        <a
                            href={`/events/${event.id}`}
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            Mehr erfahren
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;