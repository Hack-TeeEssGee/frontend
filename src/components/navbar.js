import { useState } from "react";
import icon from "../assets/icon.png";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [isMobNavbarOpen, setIsMobNavbarOpen] = useState(false);

  let { accessTokenPayload } = useSessionContext();
  let navigate = useNavigate();
  
  const buttonProperties = {
    text: "Sign in",
    clickHandler: () => {
      props.loginPortalRef?.current?.scrollIntoView({behavior: "smooth"});
    }
  }

  if (accessTokenPayload.role === "student") {

    buttonProperties.text = "Student Profile";
    buttonProperties.clickHandler = () => {
      navigate("/student-profile");
    }
  }

  return (
    <div className="navbar" isopen={String(isMobNavbarOpen)}>
      <div
        className="hamburger"
        onClick={() => setIsMobNavbarOpen(!isMobNavbarOpen)}
      >
        {isMobNavbarOpen ? <UilTimes /> : <UilBars />}
      </div>

      <div className="navbar-logo">
        <img src={icon} alt="tsg-logo"></img>
      </div>

      <div className="navbar-links">
        
        <div className="link" onClick={() => navigate("/")}>Home</div>
        <div className="link" onClick={() => navigate("/events")}>Events</div>
        <div className="link" onClick={() => navigate("/")}>News Bulletin</div>
        <div className="link" onClick={() => navigate("/society-point")}>Societies</div>
        <div className="link" onClick={() => navigate("/")}>Student Point</div>
        <div className="link" onClick={() => navigate("/quickinfo")}>Quick Info</div>
        <button className="button" onClick={buttonProperties.clickHandler}>{buttonProperties.text}</button>
      </div>
    </div>
  );
};

export default Navbar;
