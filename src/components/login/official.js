import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import OfficialPic from "../../assets/official.png";

const OfficialLogin = () => {
    return (
      <div className="official-login-portal">
        <div className="login-wrapper">
            <div className="heading">
                WELCOME TO KGPverse!
            </div>
            <div className="invisible">
                Enter Your Username
            </div>
            <div className="enter-box">
                dasananya8303@gmail.com
            </div>
            <div className="invisible">
                Enter your Password
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
        <div className="official-login-pic">
            <img src={OfficialPic} alt="official"></img>
        </div>
      </div>
    );
  };
  
  export default OfficialLogin;