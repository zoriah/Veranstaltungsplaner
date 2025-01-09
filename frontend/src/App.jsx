import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import { useAuth } from './context/AuthProvider';
import EventList from './components/events/EventList'
import EventDetails from './components/events/EventDetails';
import EventManagement from "./components/events/EventManagement";

const App = () =>
{
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          {/* Home Page */}
          <Route index element={<EventList />} />

          {/* Login Page */}
          <Route path="login" element={<h2>Login Page</h2>} />

          {/* Event Details Page */}
          <Route path="events/:id" element={<EventDetails />} />

          {/* Event Management Page */}
          <Route
            path="events/manage"
            element={
              isAuthenticated ? <EventManagement /> : <h2>Access Denied</h2>
            }
          />

          {/* Protected Route (Dashboard example) */}
          <Route
            path="dashboard"
            element={
              isAuthenticated ? <h2>Dashboard</h2> : <h2>Access Denied</h2>
            }
          />

          {/* NOT FOUND */}
          <Route path="*" element={<h2>Not Found</h2>} />

        </Route>

      </Routes>
    </>
  );
};

export default App;
