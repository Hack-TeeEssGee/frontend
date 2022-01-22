import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OfficialLogin from "../components/login/official";
import StudentLogin from "../components/login/student"

const LoginPage = () => {

    const [role, setRole] = useState("");

    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        setRole(urlParams.get("role"));
    }, [location.search]);

    return (
        <div className="login-page">
            <div className="nav-button-wrapper">
                <button className="button" onClick={() => navigate("/")}>HOME</button>
            </div>
            {role === "student" ? <StudentLogin /> : <OfficialLogin role={role} />}
        </div>
    )
}

export default LoginPage;