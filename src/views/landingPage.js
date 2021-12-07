import iitkgp from "../assets/iitkgp.jpeg";

const LandingPage = () => {
  return (
    <div className="landing-page">
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
    </div>
  );
};

export default LandingPage;
