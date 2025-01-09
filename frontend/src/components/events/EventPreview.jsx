import React from "react";
import { Link } from "react-router-dom";

const EventPreview = ({ event }) =>
{
    return (
        <div className="">
            <h2 className="">{event.name}</h2>
            <p>{event.date}</p>
            <Link to={`/events/${event.id}`} className="">
                Mehr erfahren
            </Link>
        </div>
    );
};

export default EventPreview;
