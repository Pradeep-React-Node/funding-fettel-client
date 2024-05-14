
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Routess } from "../src/routes";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../src/components/DashboardNavbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LandingHomePage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Application";
import Application from "./pages/Application";
import CenterList from "./pages/admin/center/CenterList";
import CenterDetail from "./pages/admin/center/CenterDetail";
import ParentsList from "./pages/admin/parents/ParentsList";
import ParentsDetail from "./pages/admin/parents/ParentsDetail";
import TestimonialList from "./pages/admin/testimonials/TestimonialList";
import AddTestimonial from "./pages/admin/testimonials/AddTestimonial";
import Video from "./pages/admin/videos/Video";
import AddVideo from "./pages/admin/videos/AddVideo";
import { useEffect, useState } from "react";
import { setUser } from "./features/user/userSlice";

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const doremone = JSON.parse(localStorage.getItem("userData"));
    if (doremone) {
      setUserData(doremone);
      dispatch(setUser(doremone));
    }
  }, [isAuthenticated]);


  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      {userData ? (
        <>
          <Navbar />
          <div className="dashboard-content">
            <div className="main-content">
              <Routes>
                <Route path={Routess.Dashboard.path} element={<Dashboard />} />
                <Route path={Routess.Home.path} element={<Home />} />
                <Route
                  path={Routess.CenterList.path}
                  element={<CenterList />}
                />
                <Route
                  path={Routess.CenterDetail.path}
                  element={<CenterDetail />}
                />
                <Route
                  path={Routess.Applications.path}
                  element={<Application />}
                />
                <Route
                  path={Routess.ParentsList.path}
                  element={<ParentsList />}
                />
                <Route
                  path={Routess.ParentsDetail.path}
                  element={<ParentsDetail />}
                />
                <Route
                  path={Routess.Testimonial.path}
                  element={<TestimonialList />}
                />
                <Route
                  path={Routess.AddTestimonial.path}
                  element={<AddTestimonial />}
                />
                <Route path={Routess.Video.path} element={<Video />} />
                <Route path={Routess.AddVideo.path} element={<AddVideo />} />
              </Routes>
            </div>
          </div>
          {/* <Footer/> */}
        </>
      ) : (
        <Routes>
          <Route
            path={Routess.LandingHomePage.path}
            element={<LandingHomePage />}
          />
          <Route path={Routess.Login.path} element={<Login />} />
          <Route path={Routess.Register.path} element={<Register />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
