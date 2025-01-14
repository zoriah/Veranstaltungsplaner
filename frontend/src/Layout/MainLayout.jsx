import { Outlet } from 'react-router-dom';
import Nav from "../components/Home/Nav";
const MainLayout = () => {

  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
