import React from "react";
import { Link } from "react-router-dom";

const EventPreview = ({ event }) =>
{
    return (
        <div className="border p-4 rounded bg-white shadow">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-500">{event.description}</p>
            <p className="text-gray-600">
                <strong>Ort:</strong> {event.location}
            </p>
            <a
                href={`/events/${event.id}`}
                className="text-blue-500 underline hover:text-blue-700"
            >
                Mehr erfahren
            </a>
        </div>
    );
};

export default EventPreview;