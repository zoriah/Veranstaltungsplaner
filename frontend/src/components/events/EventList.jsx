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
        <div className="">
            <h1 className="">Verfügbare Events</h1>
            <div className="">
                {events.map((event) => (
                    <EventPreview key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventList;