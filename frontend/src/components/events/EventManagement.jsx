import React, { useState, useEffect } from "react";
import
{
    getAllEvents,
    getEventById,
    createEvent,
    updateEventById,
    deleteEventById,
    getUpcomingEvents,
} from "../../services/event-service";

const EventManagement = () =>
{
    const [events, setEvents] = useState([]);
    const [eventDetails, setEventDetails] = useState(null);
    const [newEvent, setNewEvent] = useState({
        name: "",
        date: "",
        description: "",
        location: "",
    });
    const [eventId, setEventId] = useState("");
    const [updatedEvent, setUpdatedEvent] = useState({
        name: "",
        date: "",
        description: "",
        location: "",
    });

    const token = localStorage.getItem("token");

    //* Alle Events abrufen
    const fetchEvents = async () =>
    {
        try
        {
            const response = await getAllEvents(token);
            setEvents(response);
        } catch (error)
        {
            console.error("Fehler beim Abrufen der Events:", error);
        }
    };

    //* Event nach ID abrufen
    const handleGetEventById = async () =>
    {
        try
        {
            const response = await getEventById(eventId, token);
            setEventDetails(response);
        } catch (error)
        {
            console.error("Fehler beim Abrufen des Events:", error);
        }
    };

    //* Neues Event erstellen
    const handleCreateEvent = async () =>
    {
        try
        {
            const response = await createEvent(newEvent, token);
            alert("Event erfolgreich erstellt!");
            setNewEvent({ name: "", date: "", description: "", location: "" });
            fetchEvents(); // Aktualisiere die Liste
        } catch (error)
        {
            console.error("Fehler beim Erstellen eines Events:", error);
        }
    };

    //* Event aktualisieren
    const handleUpdateEvent = async () =>
    {
        try
        {
            const response = await updateEventById(eventId, updatedEvent, token);
            alert("Event erfolgreich aktualisiert!");
            fetchEvents(); // Aktualisiere die Liste
        } catch (error)
        {
            console.error("Fehler beim Aktualisieren des Events:", error);
        }
    };

    //* Event löschen
    const handleDeleteEvent = async () =>
    {
        try
        {
            await deleteEventById(eventId, token);
            alert("Event erfolgreich gelöscht!");
            fetchEvents(); // Aktualisiere die Liste
        } catch (error)
        {
            console.error("Fehler beim Löschen des Events:", error);
        }
    };

    //* Anstehende Events abrufen
    const handleGetUpcomingEvents = async () =>
    {
        try
        {
            const response = await getUpcomingEvents(token);
            setEvents(response);
        } catch (error)
        {
            console.error("Fehler beim Abrufen der anstehenden Events:", error);
        }
    };

    useEffect(() =>
    {
        fetchEvents(); // Events beim Laden abrufen
    }, []);

    return (
        <div className="event-management">
            <h1>Event Management</h1>

            {/* Neues Event erstellen */}
            <h2>Neues Event erstellen</h2>
            <input
                type="text"
                placeholder="Name"
                value={newEvent.name}
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            />
            <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <textarea
                placeholder="Beschreibung"
                value={newEvent.description}
                onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Ort"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            />
            <button onClick={handleCreateEvent}>Event erstellen</button>

            {/* Alle Events anzeigen */}
            <h2>Alle Events anzeigen</h2>
            <button onClick={fetchEvents}>Alle Events abrufen</button>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <strong>{event.name}</strong> - {event.date}
                    </li>
                ))}
            </ul>

            {/* Event nach ID anzeigen */}
            <h2>Event nach ID anzeigen</h2>
            <input
                type="text"
                placeholder="Event ID"
                value={eventId}
                onChange={(e) => setEventId(e.target.value)}
            />
            <button onClick={handleGetEventById}>Event abrufen</button>
            {eventDetails && (
                <div>
                    <h3>{eventDetails.name}</h3>
                    <p>{eventDetails.date}</p>
                    <p>{eventDetails.description}</p>
                    <p>{eventDetails.location}</p>
                </div>
            )}

            {/* Event aktualisieren */}
            <h2>Event aktualisieren</h2>
            <input
                type="text"
                placeholder="Name"
                value={updatedEvent.name}
                onChange={(e) =>
                    setUpdatedEvent({ ...updatedEvent, name: e.target.value })
                }
            />
            <input
                type="date"
                value={updatedEvent.date}
                onChange={(e) =>
                    setUpdatedEvent({ ...updatedEvent, date: e.target.value })
                }
            />
            <textarea
                placeholder="Beschreibung"
                value={updatedEvent.description}
                onChange={(e) =>
                    setUpdatedEvent({ ...updatedEvent, description: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Ort"
                value={updatedEvent.location}
                onChange={(e) =>
                    setUpdatedEvent({ ...updatedEvent, location: e.target.value })
                }
            />
            <button onClick={handleUpdateEvent}>Event aktualisieren</button>

            {/* Event löschen */}
            <h2>Event löschen</h2>
            <button onClick={handleDeleteEvent}>Event löschen</button>

            {/* Anstehende Events anzeigen */}
            <h2>Anstehende Events anzeigen</h2>
            <button onClick={handleGetUpcomingEvents}>Anstehende Events abrufen</button>
        </div>
    );
};

export default EventManagement;
