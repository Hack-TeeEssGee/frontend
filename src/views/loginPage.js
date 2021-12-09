import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoginPage = () => {

    const location = useLocation();
    const [role, setRole] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        setRole(urlParams.get("role"));
    }, [location.search]);

    return (
        <div className="login-page">
            This is {role} login page.
        </div>
    )
}

export default LoginPage;