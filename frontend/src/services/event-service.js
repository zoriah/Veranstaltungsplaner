import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const api = axios.create({
    baseURL: BASE_URL,
});

export const createEvent = async (eventData, token) =>
{
    const response = await api.post("/events", eventData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getAllEvents = async (token) =>
{
    const response = await api.get("/events", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getEventById = async (id, token) =>
{
    const response = await api.get(`/events/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

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