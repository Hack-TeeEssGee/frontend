import StudentPic from "../../assets/student.png";
import { useEffect, useState } from "react";
import verifyEmail from "../../utils/verifyEmail";
import axios from "axios";
import { AUTH_URL } from "../../constants";
import Session from "supertokens-auth-react/recipe/session";
import { toast } from 'react-toastify';

Session.addAxiosInterceptors(axios);

const StudentLogin = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [code, setCode] = useState("");

    useEffect(() => {
        const tempEmail = localStorage.getItem("studentEmail");
        if (tempEmail !== null) {
            setUserEmail(tempEmail);
            setRememberMe(true);
        }
    }, [])

    const emailChangeHandler = (email) => {
        if(rememberMe) localStorage.setItem("studentEmail", email);
        setUserEmail(email);
    }

    const rememberMeChangeHandler = () => {
        if (!rememberMe) localStorage.setItem("studentEmail", userEmail);
        else localStorage.removeItem("studentEmail");
        setRememberMe(!rememberMe);
    }

    const sendOTP = () => {

        if (verifyEmail(userEmail)) {
            
            //send OTP to mail.
            axios.post(`${AUTH_URL}/otp`, { email: userEmail })
                .then((response) => setCode(response.data.Details))
                .catch((err) => console.log(err));
            toast.success('OTP sent');
        }
        else {
            //invalid email. notify user.
            toast.error('Please check your e-mail');
        }
    }

    const verifyUser = () => {

        //verify OTP.
        axios.post(`${AUTH_URL}/student/login`, {
            check: userEmail,
            otp: userPassword,
            verification_key: code
        })
            .then((response) => {
                console.log(response);
                const studentMetadata = {
                    email: response.data.email,
                    name: response.data.name,
                    roll_no: response.data.roll_no,
                }
                localStorage.setItem("student_metadata", JSON.stringify(studentMetadata));
                window.location.href = `${window.location.origin}`
                toast.success('Login successful');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Login error');
            });
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
            <button className="signin-button" onClick={() => sendOTP()}>Get OTP</button>
            <div className="invisible">
                Enter OTP sent to Institute Mail ID
            </div>
            <input type="password" value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}} className="enter-box">
            </input>
            <div className="remember-hoola-hoo">
            <input type="checkbox" checked={rememberMe} onChange={() => rememberMeChangeHandler()} id="studentRememberMe" className="remember-hoola-hoo" />
            <label className="checkbox-label" htmlFor="studentRememberMe">Remember Me</label>
            </div>
            <button className="signin-button" onClick={() => verifyUser()} >Sign In</button>
        </div>
        <div className="student-login-pic">
            <img src={StudentPic} alt="student"></img>
        </div>
      </div>
    );
  };
  
  export default StudentLogin;