import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import StudentPic from "../../assets/student.png";

const StudentLogin = () => {
    return (
      <div className="student-login-portal">
        <div className="login-wrapper">
            <div className="heading">
                WELCOME TO KGPverse!
            </div>
            <div className="invisible">
                Enter Your Institute Mail ID
            </div>
            <div className="enter-box">
                dasananya8303@gmail.com
            </div>
            <button className="signin-button">Get OTP</button>
            <div className="invisible">
                Enter OTP sent to Institute Mail ID
            </div>
            <div className="enter-box">
                **********
                <div className="image-eye">
                    <UilEyeSlash size={30}/>
                </div>
            </div>
            <div className="remember-hoola-hoo">
                Remember me
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