import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logbar from "../components/logbar";
import OfficialLogin from "../components/login/official";
import StudentLogin from "../components/login/student"

const LoginPage = () => {

    const location = useLocation();
    const [role, setRole] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        setRole(urlParams.get("role"));
    }, [location.search]);

    return (
        <div className="login-page">
            <Logbar />
            {role === "student" ? <StudentLogin /> : <OfficialLogin />}
        </div>
    )
}

export default LoginPage;