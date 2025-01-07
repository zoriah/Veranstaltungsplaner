import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const MainLayout = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <nav>
        <Link to='/'>HOME</Link>
        {isAuthenticated ? (
          <div>
            <Link to='/dashboard'>Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={login}>LOGIN</button>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
