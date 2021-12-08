import UilUser from "@iconscout/react-unicons/icons/uil-user";

const LoginPortal = () => {
  return (
    <div className="login-portal">
      <h1>Login Portal</h1>
      <div className="login-cards-wrapper">
        <div className="login-card" color="green">
          <UilUser size={100} />
          <button className="login-card-button">TSG Official</button>
        </div>
        <div className="login-card" color="orange">
          <UilUser size={100} />
          <button className="login-card-button">Admin</button>
        </div>
        <div className="login-card" color="pink">
          <UilUser size={100} />
          <button className="login-card-button">Society</button>
        </div>
        <div className="login-card" color="blue">
          <UilUser size={100} />
          <button className="login-card-button">Student</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPortal;
