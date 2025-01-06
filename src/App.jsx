import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<h2>HOMEPAGE</h2>} />
          <Route path='login' element={<h2>Login Page</h2>} />

          
          {/* Protected Route */}
          <Route
            path='dashboard'
            element={
              isAuthenticated ? <h2>Dashboard</h2> : <h2>Access Denied</h2>
            }
          />
          {/* NOT FOUND */}
          <Route path='*' element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
