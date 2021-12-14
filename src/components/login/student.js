import StudentPic from "../../assets/student.png";
import { useEffect, useState } from "react";

const StudentLogin = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

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

    return (
      <div className="student-login-portal">
        <div className="login-wrapper">
            <div className="heading">
                WELCOME TO KGPverse!
            </div>
            <div className="invisible">
                Enter Your Institute Mail ID
            </div>
            <input type="email" value={userEmail} onChange={(e) => {emailChangeHandler(e.target.value)}} className="enter-box">
            </input> 
            <button className="signin-button">Get OTP</button>
            <div className="invisible">
                Enter OTP sent to Institute Mail ID
            </div>
            <input type="password" value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}} className="enter-box">
            </input>
            <div className="remember-hoola-hoo">
            <input type="checkbox" checked={rememberMe} onChange={() => rememberMeChangeHandler()} id="officialRememberMe" className="remember-hoola-hoo" />
            <label class="checkbox-label" for="officialRememberMe">Remember Me</label>
            </div>
            <button className="signin-button">Sign In</button>
        </div>
        <div className="student-login-pic">
            <img src={StudentPic} alt="student"></img>
        </div>
      </div>
    );
  };
  
  export default StudentLogin;