import { useState } from "react";
// import { useAuth } from "../../../context/AuthProvider";
// import axios from 'axios'
import "./veranstaltungen.css";
const erzeugeVeranstaltungen = [
    {
        id: 1,
        title: 'Musterveranstaltung1',
        description: "Das ist eine Testbeschreibung für dieses Musterevent",
        location: "Musteradresse1",
        latitude: 39.933365,
        longitude: 32.859741,
        organizerId: 1,
        createdAt: new Date(2024, 0, 24, 15, 30).toDateString(),
        updatedAt: new Date(2024, 0, 24, 15, 30).toDateString(),
        src: { pic: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg", maker: "BiancaVanDijk" },

    },
    {
        id: 2,
        title: 'Musterveranstaltung2',
        description: "Das ist eine Testbeschreibung für dieses Musterevent",
        location: "Musteradresse2",
        latitude: 39.933365,
        longitude: 32.859741,
        organizerId: 2,
        createdAt: new Date(2024, 1, 24, 15, 30).toDateString(),
        updatedAt: new Date(2024, 1, 24, 15, 30).toDateString(),
        src: { pic: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg", maker: "BiancaVanDijk" },

    },
    {
        id: 3,
        title: 'Musterveranstaltung3',
        description: "Das ist eine Testbeschreibung für dieses Musterevent",
        location: "Musteradresse3",
        latitude: 39.933365,
        longitude: 32.859741,
        organizerId: 3,
        createdAt: new Date(2024, 2, 24, 15, 30).toDateString(),
        updatedAt: new Date(2024, 2, 24, 15, 30).toDateString(),
        src: { pic: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg", maker: "BiancaVanDijk" },

    },
    {
        id: 4,
        title: 'Musterveranstaltung4',
        description: "Das ist eine Testbeschreibung für dieses Musterevent",
        location: "Musteradresse4",
        latitude: 39.933365,
        longitude: 32.859741,
        organizerId: 4,
        createdAt: new Date(2024, 3, 24, 15, 30).toDateString(),
        updatedAt: new Date(2024, 3, 24, 15, 30).toDateString(),
        src: { pic: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg", maker: "BiancaVanDijk" },

    },
    {
        id: 5,
        title: 'Musterveranstaltung5',
        description: "Das ist eine Testbeschreibung für dieses Musterevent",
        location: "Musteradresse5",
        latitude: 39.933365,
        longitude: 32.859741,
        organizerId: 5,
        createdAt: new Date(2024, 4, 24, 15, 30).toDateString(),
        updatedAt: new Date(2024, 4, 24, 15, 30).toDateString(),
        src: { pic: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg", maker: "BiancaVanDijk" },

    },
]

// const getVeranstaltungen = async () => {
//     const response = await axios.post("http://localhost:3001/api/auth/login")
//     console.log(response)
// }


const Veranstaltungen = () => {
    // const [veranstaltungen, setVeranstaltungen] = useState([])

    return (
        <>
            <div className="container">
                {erzeugeVeranstaltungen.map((veranstaltung, i) =>
                    <div onClick={() => console.log("You clicked", veranstaltung.id)} className="card" key={i}>
                        <img
                            className="pic"
                            src={veranstaltung.src.pic}
                            alt={veranstaltung.src.maker}
                        />
                        <h1 className="title">{veranstaltung.title}</h1>
                        <h1 className="start">{veranstaltung.createdAt}</h1>
                    </div>
                )}
            </div>
        </>
    )
}

export default Veranstaltungen