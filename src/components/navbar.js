import tsgLogo from "../assets/tsg-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={tsgLogo} alt="tsg-logo"></img>
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/">Events</a>
        <a href="/">News Bulletin</a>
        <a href="/">Societies</a>
        <a href="/">Student Point</a>
        <a href="/">Quick Info</a>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
