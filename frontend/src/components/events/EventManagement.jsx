import { useState, useEffect } from "react";
import {
    getAllEvents,
    getEventById,
    createEvent,
    updateEventById,
    deleteEventById,
    getUpcomingEvents,
} from "../../services/event-service";
import { useAuth } from "./../../context/AuthProvider";

const EventManagement = () => {
    const { id } = useAuth
    const [events, setEvents] = useState([]);
    const [eventDetails, setEventDetails] = useState(null);
    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        description: "",
        location: "",
        organizerId: id
    });
    const [eventId, setEventId] = useState("");
    const [updatedEvent, setUpdatedEvent] = useState({
        title: "",
        date: "",
        description: "",
        location: "",
    });

    const token = localStorage.getItem("token");

    //* Alle Events abrufen
    const fetchEvents = async () => {
        try {
            const response = await getAllEvents(token);
            setEvents(response);
        } catch (error) {
            console.error("Fehler beim Abrufen der Events:", error);
        }
    };

    //* Event nach ID abrufen
    const handleGetEventById = async () => {
        try {
            const response = await getEventById(eventId, token);
            setEventDetails(response);
        } catch (error) {
            console.error("Fehler beim Abrufen des Events:", error);
        }
    };

    //* Neues Event erstellen
    const handleCreateEvent = async () => {
        try {
            const response = await createEvent(newEvent, token);
            alert("Event erfolgreich erstellt!");
            setNewEvent({ title: "", date: "", description: "", location: "" });
            fetchEvents(); // Aktualisiere die Liste
        } catch (error) {
            console.error("Fehler beim Erstellen eines Events:", error);
        }
    };

    //* Event aktualisieren
    const handleUpdateEvent = async () => {
        try {
            const response = await updateEventById(eventId, updatedEvent, token);
            alert("Event erfolgreich aktualisiert!");
            fetchEvents(); // Aktualisiere die Liste
        } catch (error) {
            console.error("Fehler beim Aktualisieren des Events:", error);
        }
    };

    //* Event löschen
    const handleDeleteEvent = async () => {
        try {
            await deleteEventById(eventId, token);
            alert("Event erfolgreich gelöscht!");
            fetchEvents();
        } catch (error) {
            console.error("Fehler beim Löschen des Events:", error);
        }
    };

    //* Anstehende Events abrufen
    const handleGetUpcomingEvents = async () => {
        try {
            const response = await getUpcomingEvents(token);
            setEvents(response);
        } catch (error) {
            console.error("Fehler beim Abrufen der anstehenden Events:", error);
        }
    };

    useEffect(() => {
        fetchEvents(); // Events beim Laden abrufen
    }, []);

    return (
        <div className="event-management p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Event Management</h1>

            {/* Neues Event erstellen */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Neues Event erstellen</h2>
                <div className="grid gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        className="border rounded p-2 w-full"
                    />
                    <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                        className="border rounded p-2 w-full"
                    />
                    <textarea
                        placeholder="Beschreibung"
                        value={newEvent.description}
                        onChange={(e) =>
                            setNewEvent({ ...newEvent, description: e.target.value })
                        }
                        className="border rounded p-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Ort"
                        value={newEvent.location}
                        onChange={(e) =>
                            setNewEvent({ ...newEvent, location: e.target.value })
                        }
                        className="border rounded p-2 w-full"
                    />
                </div>
                <button
                    onClick={handleCreateEvent}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Event erstellen
                </button>
            </div>

            {/* Alle Events anzeigen */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Alle Events anzeigen</h2>
                <button
                    onClick={fetchEvents}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Alle Events abrufen
                </button>
                <ul className="mt-4 space-y-4">
                    {events.length > 0 && events.map((event) => (
                        <li
                            key={event.id}
                            className="border p-4 rounded bg-white shadow flex justify-between items-center"
                        >
                            <div>
                                <strong className="block text-lg">{event.title}</strong>
                                <span>{event.date}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Event nach ID anzeigen */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Event nach ID anzeigen</h2>
                <input
                    type="text"
                    placeholder="Event ID"
                    value={eventId}
                    onChange={(e) => setEventId(e.target.value)}
                    className="border rounded p-2 w-full"
                />
                <button
                    onClick={handleGetEventById}
                    className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                    Event abrufen
                </button>
                {eventDetails && (
                    <div className="mt-4 border p-4 rounded bg-white shadow">
                        <h3 className="text-lg font-semibold">{eventDetails.title}</h3>
                        <p>{eventDetails.date}</p>
                        <p>{eventDetails.description}</p>
                        <p>{eventDetails.location}</p>
                    </div>
                )}
            </div>

            {/* Event aktualisieren */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Event aktualisieren</h2>
                <div className="grid gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={updatedEvent.title}
                        onChange={(e) =>
                            setUpdatedEvent({ ...updatedEvent, title: e.target.value })
                        }
                        className="border rounded p-2 w-full"
                    />
                    <input
                        type="date"
                        value={updatedEvent.date}
                        onChange={(e) =>
                            setUpdatedEvent({ ...updatedEvent, date: e.target.value })
                        }
                        className="border rounded p-2 w-full"
                    />
                    <textarea
                        placeholder="Beschreibung"
                        value={updatedEvent.description}
                        onChange={(e) =>
                            setUpdatedEvent({ ...updatedEvent, description: e.target.value })
                        }
                        className="border rounded p-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Ort"
                        value={updatedEvent.location}
                        onChange={(e) =>
                            setUpdatedEvent({ ...updatedEvent, location: e.target.value })
                        }
                        className="border rounded p-2 w-full"
                    />
                </div>
                <button
                    onClick={handleUpdateEvent}
                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                    Event aktualisieren
                </button>
            </div>

            {/* Event löschen */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Event löschen</h2>
                <button
                    onClick={handleDeleteEvent}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Event löschen
                </button>
            </div>

            {/* Anstehende Events anzeigen */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Anstehende Events anzeigen</h2>
                <button
                    onClick={handleGetUpcomingEvents}
                    className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                >
                    Anstehende Events abrufen
                </button>
            </div>
        </div>
    );
};

export default EventManagement;
