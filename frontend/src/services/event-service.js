import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const api = axios.create({
    baseURL: BASE_URL,
});

//! TestDaten, werden später gelöscht
const mockEvents = [
    { id: "1", name: "Event 1", date: "01.01.2025", description: "Rock Konzert von Pikachu in Köln Essigfabrik!", location: "Location 1" },
    { id: "2", name: "Event 2", date: "01.02.2025", description: "Habeck, veröffentlichung vom neuen Kinderbuch: 'Kinder sind schlauer als ich'.", location: "Location 2" },
    { id: "3", name: "Event 3", date: "01.03.2025", description: "VW Vorstellung Düsseldorf: Wie man failed und pleite geht!", location: "Location 3" },
];

export const createEvent = async (eventData, token) =>
{
    const response = await api.post("/events", eventData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

//! Aktuell nur für Tests, da ich sonst aktuell nichts weiteres machen kann, wird später gelöscht!
export const getAllEvents = async (token) =>
{
    console.log("Mocked getAllEvents called with token:", token);
    return mockEvents;
};

//! Aktuell nur für Tests, da ich sonst aktuell nichst weiteres machen kann, wird später gelöscht!
export const getEventById = async (id, token) =>
{
    console.log("Mocked getEventById called with token:", token);
    return mockEvents.find((event) => event.id === id);
};

// export const getAllEvents = async (token) =>
// {
//     const response = await api.get("/events", {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     return response.data;
// };

// export const getEventById = async (id, token) =>
// {
//     const response = await api.get(`/events/${id}`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     return response.data;
// };

export const updateEventById = async (id, eventData, token) =>
{
    const response = await api.put(`/events/${id}`, eventData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const deleteEventById = async (id, token) =>
{
    const response = await api.delete(`/events/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getUpcomingEvents = async (token) =>
{
    const response = await api.get("/events/upcoming", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};