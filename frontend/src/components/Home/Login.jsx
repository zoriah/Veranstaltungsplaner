import { useState } from 'react'
import { useAuth } from "./../../context/AuthProvider";
import axios from "axios";
import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, setId } = useAuth()


    const userLogin = async () => {
        try {
            const res = await axios.post("http://localhost:3001/api/auth/login", {
                email,
                password
            })
            console.log(typeof res.data.token)
            login(res.data.token)
            setId(res.data.user.id)
        } catch (error) {
            alert(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        userLogin()
        navigate("/")
    };

    return (
        <div className='containerLogin'>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="loginInput"
                />
                <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="loginInput"
                />
                <button onClick={(e) => handleSubmit} type="submit" className="login-button">
                    Login
                </button>
                <h5 className='register register-info'>Not having an Account?</h5>
                <h5 className='register register-link' onClick={() => navigate("/registrationform")}>register here!</h5>
            </form>
        </div>
    )
}

export default Login