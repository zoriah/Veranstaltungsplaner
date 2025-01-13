import { useEffect, useState } from "react";
import { getAllEvents } from "../../services/event-service";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const EventList = () => {
    const [events, setEvents] = useState([]); //* Zustand des Events
    const [loading, setLoading] = useState(true); //* Zustand der Ladeanzeige
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    alert("Bitte einloggen, um Events zu sehen.");
                    return;
                }
                const eventList = await getAllEvents(token);
                console.log("Geladene Events:", eventList);
                setEvents(eventList.results);
            } catch (error) {
                console.error("Fehler beim Abrufen der Events:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, [isAuthenticated]);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Verfügbare Events</h1>
            {loading ? (
                <p>Lade Events...</p>
            ) : (
                <ul className="space-y-4">
                    {events.length > 0 ? (
                        events.map((event) => (
                            <li
                                key={event.id}
                                className="border p-4 rounded bg-white shadow flex justify-between items-center"
                            >
                                <div>
                                    <h2 className="text-xl font-semibold">{event.title}</h2>
                                    <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                                </div>
                                <Link
                                    to={`/events/${event.id}`}
                                    className="text-blue-500 underline hover:text-blue-700"
                                >
                                    Mehr erfahren
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>Keine Events gefunden.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default EventList;