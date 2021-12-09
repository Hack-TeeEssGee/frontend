import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilGraduationCap from '@iconscout/react-unicons/icons/uil-graduation-cap';
import UilShieldCheck from '@iconscout/react-unicons/icons/uil-shield-check';
import UilMedal from '@iconscout/react-unicons/icons/uil-medal';

const loginPortalData = [
  {
    role: "TSG Official",
    icon: UilUser,
    color: "green",
    url: "tsg"
  },
  {
    role: "Admin",
    icon: UilShieldCheck,
    color: "orange",
    url: "admin"
  },
  {
    role: "Society",
    icon: UilMedal,
    color: "pink",
    url: "society"
  },
  {
    role: "Student",
    icon: UilGraduationCap,
    color: "blue",
    url: "student"
  }
]

const LoginPortal = () => {
  return (
    <div className="login-portal">
      <h1>Login Portal</h1>
      <div className="login-cards-wrapper">
        {
          loginPortalData.map((card) => {
            return (
              <div className="login-card" color={card.color}>
                <card.icon size={100}/>
                <button className="login-card-button" onClick={() => window.location.href=`${window.location.origin}/login?role=${card.url}`}>{card.role}</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default LoginPortal;
