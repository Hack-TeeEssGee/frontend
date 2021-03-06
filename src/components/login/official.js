import OfficialPic from "../../assets/official.png";
import { useEffect, useState } from "react";
import verifyEmail from "../../utils/verifyEmail";
import axios from "axios";
import { AUTH_URL } from "../../constants";
import Session from "supertokens-auth-react/recipe/session";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

Session.addAxiosInterceptors(axios);

const OfficialLogin = (props) => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const role = props.role;

    let navigate = useNavigate();

    useEffect(() => {
        const tempEmail = localStorage.getItem("officialEmail");
        if (tempEmail !== null) {
            setUserEmail(tempEmail);
            setRememberMe(true);
        }
    }, [])

    const emailChangeHandler = (email) => {
        if(rememberMe) localStorage.setItem("officialEmail", email);
        setUserEmail(email);
    }

    const rememberMeChangeHandler = () => {
        if (!rememberMe) localStorage.setItem("officialEmail", userEmail);
        else localStorage.removeItem("officialEmail");
        setRememberMe(!rememberMe);
    }

    const verifyUser = () => {

        if (verifyEmail(userEmail)) {
            
            //verify email, password and role.
            axios.post(`${AUTH_URL}/official/login`, {
                email: userEmail,
                password: userPassword,
                role: role
            })
                .then((response) => {
                    navigate("/");
                    toast.success('Login successful');
                })
                .catch((err) => {
                    console.log(err);
                    toast.error('Login error');
                });
        }
        else {

            //invalid email. notify user
            toast.error('Please check your e-mail');
        }

        
    }

    return (
      <div className="official-login-portal">
        <div className="login-wrapper">
            <div className="heading">
                WELCOME TO KGPverse!
            </div>
            <div className="invisible">
                Enter Your Username
            </div>
            <input type="email" value={userEmail} onChange={(e) => {emailChangeHandler(e.target.value)}} className="enter-box">
            </input> 
            <br/><br/>
            <div className="invisible">
                Enter your Password
            </div>
            <input type="password" value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}} className="enter-box">
            </input>
                <div className="remember-hoola-hoo">
                <button className="button signin-button" onClick={() => verifyUser()}>Sign In</button>
                <input type="checkbox" checked={rememberMe} onChange={() => rememberMeChangeHandler()} id="officialRememberMe" className="remember-hoola-hoo" />
                <label className="checkbox-label" htmlFor="officialRememberMe">Remember Me</label>
            </div>
        </div>
        <div className="official-login-pic">
            <img src={OfficialPic} alt="official"></img>
        </div>
      </div>
    );
  };
  
  export default OfficialLogin;