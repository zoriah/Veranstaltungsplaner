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
        <div className="">
            <h1 className="">{event.name}</h1>
            <p className="">{event.description}</p>
            <p className="">Datum: {event.date}</p>
            <p>Ort: {event.location}</p>
        </div>
    );
};

export default EventDetails;