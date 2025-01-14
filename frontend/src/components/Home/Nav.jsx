import { useAuth } from "../../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate("/login")
    };

    return (
        <>
            {isAuthenticated ? (
                <div className="containerNav">
                    <div className="btnWrap">
                        <h1 onClick={logout} className="btnEle">Logout</h1>
                        <Link to="events/manage" className="btnEle">Neues Event </Link>
                    </div>
                </div>
            ) : (
                <div className="containerNav">
                    <h1 onClick={handleLoginClick} className="btnEle">Login</h1>
                </div>
            )}
        </>
    );
};

export default Nav;