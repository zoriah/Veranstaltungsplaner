import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

import "./nav.css";

const Nav = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate("/login")
    };

    return (
        <>
            {!isAuthenticated ? (
                <div className="containerNav">
                    <h1 onClick={handleLoginClick} className="btnEle">Login</h1>
                </div>
            ) : (
                <div className="containerNav">
                    <h1 onClick={logout} className="btnEle">Logout</h1>
                </div>
            )}
        </>
    );
};

export default Nav;