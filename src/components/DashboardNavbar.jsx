import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { Icon } from "@iconify/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import "../assets/css/NavbarDrorpdown.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DashboardNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const isMobileScreen = window.innerWidth <= 768;
    setShowSidebar(!isMobileScreen);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logout = async () => {
    console.log("lougout");
    await localStorage.clear("userData");
    toast.success("Logout Successfully!");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="dashnavbar">
        <div className={`main-navbar ${showSidebar ? "show" : ""}`}>
          <div className="dash-top-nav">
            <div>
              <button className="sidebar-close-btn" onClick={toggleSidebar}>
                {showSidebar ? (
                  <Icon icon="solar:alt-arrow-left-linear" />
                ) : (
                  <Icon icon="solar:alt-arrow-right-linear" />
                )}
              </button>

              <button className="sidebar-close-btn2" onClick={toggleSidebar}>
                {showSidebar ? (
                  <Icon icon="gg:menu-left" />
                ) : (
                  <Icon icon="gg:menu-left" />
                )}
              </button>
            </div>

            <div>
              <button className="topnavbar-btn">
                <Icon icon="mage:notification-bell-pending-fill" />
              </button>

              <button className="topnavbar-btn" onClick={toggleDropdown}>
                <Icon icon="solar:users-group-rounded-bold-duotone" />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content" ref={dropdownRef}>
                  {/* Dropdown content */}
                  <ul>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li onClick={logout}>Logout</li>
                  </ul>
                </div>
              )}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
