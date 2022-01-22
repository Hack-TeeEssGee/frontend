import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilGraduationCap from '@iconscout/react-unicons/icons/uil-graduation-cap';
import UilShieldCheck from '@iconscout/react-unicons/icons/uil-shield-check';
import UilMedal from '@iconscout/react-unicons/icons/uil-medal';
import { useNavigate } from "react-router-dom";

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

const LoginPortal = ({ innerRef }) => {
  
  let navigate = useNavigate();

  return (
    <div className="login-portal" ref={innerRef}>
      <h1>Login Portal</h1>
      <div className="login-cards-wrapper">
        {
          loginPortalData.map((card) => {
            return (
              <div key={card.role} className="login-card" color={card.color}>
                <card.icon size={100}/>
                <button className="button login-card-button" onClick={() => navigate(`/login?role=${card.url}`)}>{card.role}</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default LoginPortal;
