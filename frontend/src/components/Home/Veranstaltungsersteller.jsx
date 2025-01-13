import { useState } from 'react';
import axios from "axios"
import "./veranstaltungsersteller.css"
function EventForm() {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    // const [organizerId, setOrganizerId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const eventData = {
            title,
            organizerId: parseInt(organizerId, 10),
            description,
            date,
            location,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
        };
        console.log('Event Data:', eventData);
        // Hier können Sie die Daten an ein Backend senden oder weiterverarbeiten
        try {
            // Senden der Daten an das Backend mit Axios
            const token = localStorage.getItem("token")
            // return console.log("token:", token)
            const response = await axios.post("http://localhost:3001/api/events", eventData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            // Erfolgreiche Antwort verarbeiten
            if (response.status === 200 || response.status === 201) {
                console.log("Registrierung erfolgreich:", response.data);
                alert("Registrierung erfolgreich!");
                // Optional: Weiterleitung zur Login-Seite oder Dashboard
                navigate("/login")
            }
        } catch (error) {
            // Fehlerbehandlung
            console.error("Fehler bei der Registrierung:", error);
            if (error.response) {
                // Backend-Fehler (z.B. 400, 500)
                alert(`Fehler: ${error.response.data.message}`);
            } else {
                // Netzwerkfehler oder andere Probleme
                alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Titel*:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email*:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Beschreibung:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="date">Datum*:</label>
                <input
                    type="datetime-local"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="location">Ort*:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="latitude">Breitengrad:</label>
                <input
                    type="number"
                    id="latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    step="any"
                />
            </div>

            <div>
                <label htmlFor="longitude">Längengrad:</label>
                <input
                    type="number"
                    id="longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    step="any"
                />
            </div>

            <div>
                <label htmlFor="organizerId">Organisator-ID*:</label>
                <input
                    type="number"
                    id="organizerId"
                    value={organizerId}
                    onChange={(e) => setOrganizerId(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Veranstaltung erstellen</button>
        </form>
    );
}

export default EventForm;