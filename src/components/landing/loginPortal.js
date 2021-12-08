import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilGraduationCap from '@iconscout/react-unicons/icons/uil-graduation-cap';
import UilShieldCheck from '@iconscout/react-unicons/icons/uil-shield-check';
import UilMedal from '@iconscout/react-unicons/icons/uil-medal';

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
          <UilShieldCheck size={100} />
          <button className="login-card-button">Admin</button>
        </div>
        <div className="login-card" color="pink">
          <UilMedal size={100} />
          <button className="login-card-button">Society</button>
        </div>
        <div className="login-card" color="blue">
          <UilGraduationCap size={100} />
          <button className="login-card-button">Student</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPortal;
