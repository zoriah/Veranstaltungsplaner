import { useState } from "react";
// import { useAuth } from "../../../context/AuthProvider";
// import axios from 'axios'
import "./veranstaltungen.css";
const erzeugeVeranstaltungen = [

]

// const getVeranstaltungen = async () => {
//     const response = await axios.post("http://localhost:3001/api/auth/login")
//     console.log(response)
// }


const Veranstaltungen = () =>
{
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