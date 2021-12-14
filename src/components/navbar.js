import { useState } from "react";
import tsgLogo from "../assets/tsg-logo.png";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";

const Navbar = () => {
  const [isMobNavbarOpen, setIsMobNavbarOpen] = useState(false);

  return (
    <div className="navbar" isopen={String(isMobNavbarOpen)}>
      <div
        className="hamburger"
        onClick={() => setIsMobNavbarOpen(!isMobNavbarOpen)}
      >
        {isMobNavbarOpen ? <UilTimes /> : <UilBars />}
      </div>

      <div className="navbar-logo">
        <img src={tsgLogo} alt="tsg-logo"></img>
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/">Events</a>
        <a href="/">News Bulletin</a>
        <a href="/">Societies</a>
        <a href="/">Student Point</a>
        <a href="./quickinfo">Quick Info</a>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
