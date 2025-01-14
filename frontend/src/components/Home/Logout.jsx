import { useAuth } from "./../../context/AuthProvider";

const Logout = () => {
    const { logout } = useAuth()
    return (
        <>
            <h2 onClick={logout}>logout</h2>
        </>
    )
}

export default Logout