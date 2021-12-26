import iitkgp from "../assets/iitkgp.jpeg";
import Footer from "../components/footer";
import EventCalendar from "../components/landing/eventCalendar";
import LandingEvents from "../components/landing/landingEvents";
import LoginPortal from "../components/landing/loginPortal";
import Navbar from "../components/navbar";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

const LandingPage = () => {
  return (
    <div className="landing-page">

      <SessionAuth requireAuth={false}>
        <Navbar />
      </SessionAuth>

      <div className="hero">
        <div className="hero-title">KGPverse</div>
        <div className="hero-subtitle">
          One place for all the academic, extracurricular and co-curricular
          information.
          <br />
          Made by the KGPians for the KGPians
        </div>
        <button className="hero-btn">Learn More</button>
        <img src={iitkgp} alt="IITKGP Main Building"></img>
      </div>

      <LandingEvents />

      <EventCalendar />

      <LoginPortal />

      <Footer />
    </div>
  );
};

export default LandingPage;
