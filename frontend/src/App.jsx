import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import { useAuth } from './context/AuthProvider';
import EventList from './components/events/EventList'
import EventDetails from './components/events/EventDetails';
import EventManagement from "./components/events/EventManagement";
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import RegistrationForm from './components/Home/RegistrationForm';

const App = () => {
  const { isAuthenticated } = useAuth();

  console.log("NOA", isAuthenticated)
  return (
    <>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          {/* Home Page Noa Bahman */}
          <Route index element={<Home />} />

          {/* Login Page Noa Bahman */}
          <Route path="login" element={<Login />} />

          {/* Register Page Noa Bahman */}
          <Route path="registrationform" element={<RegistrationForm />} />

          {/* Dashboard oder Veranstaltungen Bahman Noa */}
          <Route path="eventlist" element={<EventList />} />

          {/* Event Details Page Marcel Noa Bahman */}
          <Route path="events/:id"
            element={
              isAuthenticated ? <EventDetails /> : <h2>Access Denied</h2>
            }
          />

          {/* Event Management Page Marcel Noa Bahman */}
          <Route
            path="events/manage"
            element={
              isAuthenticated ? <EventManagement /> : <h2>Access Denied</h2>
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
