import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./registrationForm.css"

const RegistrationForm = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [createdAt, setCreatedAt] = useState([]);
    const [updatedAt, setUpdatedAt] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Formulardaten vorbereiten
        const userData = {
            // "id": id,
            name,
            email,
            password,
            isActive,
            // createdAt,
            // updatedAt,
        };

        // return console.log(
        //     userData.createdAt, typeof userData.createdAt, "\n",
        //     new Date(userData.createdAt).toISOString().slice(0, -1), typeof new Date(userData.createdAt).toISOString().slice(0, -1), "\n",
        // )
        try {
            // Senden der Daten an das Backend mit Axios
            const response = await axios.post("http://localhost:3001/api/users", userData,
                {
                    headers: {
                        'Content-Type': 'application/json'
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
        <div className='topContainerRegistration'>
            <form onSubmit={handleSubmit} className="registration-form">
                <input
                    className="inputRegistration"
                    type="text"
                    value={name}
                    placeholder={"name"}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    className="inputRegistration"
                    type="email"
                    value={email}
                    placeholder={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    className="inputRegistration"
                    type="password"
                    value={password}
                    placeholder={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label className="labelCheckbox">
                    Ative: <input
                        style={{ width: '30px', height: '30px' }}
                        className="inputRegistration inputCheckbox"
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                </label>
                {/* <input
                    className="inputRegistration"
                    type="datetime-local"
                    value={createdAt}
                    placeholder={"Created at"}
                    onChange={(e) => setCreatedAt(new Date(e.target.value).toISOString().slice(0, -1))}
                    required
                />

                <input
                    className="inputRegistration"
                    type="datetime-local"
                    value={updatedAt}
                    placeholder={"Updated at"}
                    onChange={(e) => setUpdatedAt(new Date(e.target.value).toISOString().slice(0, -1))}
                    required
                /> */}
                <button className="btnRegistration" type="submit">Registrieren</button>
            </form>
        </div>
    );
};

export default RegistrationForm;