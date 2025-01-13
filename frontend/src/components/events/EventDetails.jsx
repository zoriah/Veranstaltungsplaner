import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../services/event-service";

const EventDetails = () =>
{
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() =>
    {
        const fetchEventDetails = async () =>
        {
            try
            {
                const token = localStorage.getItem("token");
                if (!token)
                {
                    alert("Bitte einloggen, um Event-Details zu sehen.");
                    return;
                }
                const eventDetails = await getEventById(id, token);
                setEvent(eventDetails);
            } catch (error)
            {
                console.error("Fehler beim Abrufen der Event-Details:", error);
            }
        };
        fetchEventDetails();
    }, [id]);

    if (!event)
    {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">

            <h1 className="text-3xl font-bold mb-6">{event.title}</h1>

            <div className="bg-white p-6 rounded shadow">

                <p className="text-gray-700 mb-4">{event.description}</p>
                <p className="text-gray-600">
                    <strong>Datum:</strong> {event.date}
                </p>
                <p className="text-gray-600">
                    <strong>Ort:</strong> {event.location}
                </p>

            </div>

        </div>
    );
};

export default EventDetails;