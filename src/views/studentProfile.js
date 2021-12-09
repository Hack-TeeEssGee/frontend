import Dashboard from "../components/dashboard";
import UilUserCircle from "@iconscout/react-unicons/icons/uil-user-circle";

const StudentProfile = () => {

    const dashboardHeaderData = {
        title: "Chirag Ghosh",
        subtitle: "chiragghosh@kgpian.iitkgp.ac.in",
        icon: UilUserCircle
    }

    return (
        <div className="student-profile">
            <Dashboard
                headerData={dashboardHeaderData}
            />
        </div>
    )
}

export default StudentProfile;