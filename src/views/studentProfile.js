import Dashboard from "../components/dashboard";
import UilUserCircle from "@iconscout/react-unicons/icons/uil-user-circle";
import UilMusic from "@iconscout/react-unicons/icons/uil-music";
import UilSetting from "@iconscout/react-unicons/icons/uil-setting";
import UilBall from "@iconscout/react-unicons/icons/uil-volleyball";
import UilUsersAlt from "@iconscout/react-unicons/icons/uil-users-alt";
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import UilInfo from "@iconscout/react-unicons/icons/uil-info-circle";
import { useState } from "react";

const CertificateListWrapper = () => {

    return (
        <div className="certificate-list-wrapper">

        </div>
    )
}

const CertificateUploader = () => {

    return (
        <div className="certificate-uploader">

        </div>
    )
}

const GrievanceForm = () => {

    return (
        <div className="grievance-form">

        </div>
    )
}

const StudentProfile = () => {

    const dashboardHeaderData = {
        title: "Chirag Ghosh",
        subtitle: "chiragghosh@kgpian.iitkgp.ac.in",
        icon: UilUserCircle
    }

    const dashboardListData = {
        defaultSelection: 0,
        specialSelection: 5, //Enter -1 for none
        listData: [
            {
                option: "Technology",
                icon: UilSetting
            },
            {
                option: "Social and Cultural",
                icon: UilMusic
            },
            {
                option: "Sports and Games",
                icon: UilBall
            },
            {
                option: "Students' Welfare",
                icon: UilUsersAlt
            },
            {
                option: "Others",
                icon: UilStar
            },
            {
                option: "Student's Grievance Form",
                icon: UilInfo
            }
        ]
    }

    const [currentSelection, setCurrentSelection] = useState(dashboardListData.defaultSelection);

    var title, BodyContent;

    if (currentSelection >= 0 && currentSelection <= 3) {
        title = "EVENTS PARTICIPATED";
        BodyContent = CertificateListWrapper;
    }
    else if (currentSelection === 4) {
        title = "UPLOAD CERTIFICATE";
        BodyContent = CertificateUploader;
    }
    else {
        title = "GRIEVANCE FORM";
        BodyContent = GrievanceForm;
    }

    return (
        <div className="student-profile">
            <Dashboard
                headerData={dashboardHeaderData}
                listData={dashboardListData}
                currentSelection={currentSelection}
                changeSelection={setCurrentSelection}
            />
            <div className="container">
                <button onClick={() => window.location.href=`${window.location.origin}/`}>HOME</button>
                <div className="title">{title}</div>
                <BodyContent/>
            </div>
        </div>
    )
}

export default StudentProfile;