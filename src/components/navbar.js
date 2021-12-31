import { useState } from "react";
import tsgLogo from "../assets/tsg-logo.png";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import { useSessionContext } from 'supertokens-auth-react/recipe/session';

const Navbar = (props) => {
  const [isMobNavbarOpen, setIsMobNavbarOpen] = useState(false);

  let { accessTokenPayload } = useSessionContext();
  
  const buttonProperties = {
    text: "Sign in",
    clickHandler: () => {
      props.loginPortalRef?.current?.scrollIntoView({behavior: "smooth"});
    }
  }

  if (accessTokenPayload.role === "student") {

    buttonProperties.text = "Student Profile";
    buttonProperties.clickHandler = () => {
      window.location.href=`${window.location.origin}/student-profile`
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
        <img src={tsgLogo} alt="tsg-logo"></img>
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/">News Bulletin</a>
        <a href="/society-point">Societies</a>
        <a href="/student-profile">Student Point</a>
        <a href="/quickinfo">Quick Info</a>
        <button onClick={buttonProperties.clickHandler}>{buttonProperties.text}</button>
      </div>
    </div>
  );
};

export default Navbar;
