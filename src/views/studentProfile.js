import Dashboard from "../components/dashboard";
import UilUserCircle from "@iconscout/react-unicons/icons/uil-user-circle";
import UilMusic from "@iconscout/react-unicons/icons/uil-music";
import UilSetting from "@iconscout/react-unicons/icons/uil-setting";
import UilBall from "@iconscout/react-unicons/icons/uil-volleyball";
import UilUsersAlt from "@iconscout/react-unicons/icons/uil-users-alt";
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import UilInfo from "@iconscout/react-unicons/icons/uil-info-circle";
import { useState } from "react";
import sampleCertificateData from "../assets/sampleCertificateData.json";
import onLogout from "../utils/logout";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

const CertificateListWrapper = (props) => {

    return (
        <div className="certificate-list-wrapper">
            {
                sampleCertificateData.map((certificate, index) => {

                    if (props.mode === certificate.category) {
                        return (
                            <div key={index} className="certificate">
                                <img alt="event-cert" src={certificate.certLink} />
                                <div>
                                    <div className="event-name">{certificate.eventName}</div>
                                    <div className="event-position">{certificate.position}</div>
                                </div>
                                <button className="button download-cert" onClick={() => window.open(certificate.certLink, "_blank")}>Download Certificate</button>
                            </div>
                        )
                    }
                    else {
                        return (null);
                    }
                })
            }
        </div>
    )
}

const CertificateUploader = () => {

    return (
        <div className="certificate-uploader">
            <input type="text" className="type-1" placeholder="Enter name of event" >
            </input>
            <input type="text" className="type-1" placeholder="Enter Position" >
            </input>
            <label htmlFor="file-upload" className="custom-file-upload">
                &#8613; &nbsp; Upload Certificate File
            </label>
            <input id="file-upload" type="file" />
            <button className="button add-button">Add +</button>
        </div>
    )
}

const GrievanceForm = () => {

    const [userName, setUserName] = useState("");
    const [userRoll, setUserRoll] = useState("");
    const [userGrievance, setUserGrievance] = useState("");

    return (
        <div className="grievance-form">
            <div className="grievance-name">
                <input type="text" placeholder="Enter your name" value={userName} onChange={(e) => { setUserName(e.target.value) }} className="input-box">
                </input>
                <input type="text" placeholder="Enter your roll number" value={userRoll} onChange={(e) => { setUserRoll(e.target.value) }} className="input-box">
                </input>
            </div>
            <div className="grievance-content">
                <textarea cols="50" rows="8" placeholder="Type your grievance" value={userGrievance} onChange={(e) => { setUserGrievance(e.target.value) }} className="grievance-box">
                </textarea>
                <button className="button add-button">Add +</button>
            </div>
        </div>
    )
}

const StudentProfile = () => {

    const studentData = {
        name: "",
        email: ""
    };

    try {
        
        studentData.name = JSON.parse(localStorage.getItem("student_metadata"))["name"];
        studentData.email = JSON.parse(localStorage.getItem("student_metadata"))["email"];
        
    } catch (err) {

        //notify user to login again
        window.location.href = `${window.location.origin}`
    }

    const dashboardHeaderData = {
        title: studentData.name,
        subtitle: studentData.email,
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
        <SessionAuth requireAuth={true} redirectToLogin={() => window.location.href = `${window.location.origin}/login?role=student`}>
            <div className="student-profile">
                <Dashboard
                    headerData={dashboardHeaderData}
                    listData={dashboardListData}
                    currentSelection={currentSelection}
                    changeSelection={setCurrentSelection}
                />
                <div className="container">
                    <div className="nav-button-wrapper">
                        <button className="button" onClick={() => window.location.href = `${window.location.origin}/`}>HOME</button>
                        <button className="button" onClick={() => onLogout()}>LOGOUT</button>
                    </div>
                    <div className="title">{title}</div>
                    <BodyContent
                        mode={dashboardListData.listData[currentSelection].option}
                    />
                </div>
            </div>
        </SessionAuth>
    )
}

export default StudentProfile;
