import Nav from "./Nav";
import EventList from "../events/EventList";

const Home = () =>
{
    return (
        <>
            <Nav />
            <div className="home-content">
                <h1 className="home-title">Willkommen bei den Veranstaltungen!</h1>
                <EventList />
            </div>
        </>
    );
};

export default Home;