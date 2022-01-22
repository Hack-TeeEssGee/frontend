import Dashboard from "../components/dashboard";
import UilUserCircle from "@iconscout/react-unicons/icons/uil-user-circle";
import UilMusic from "@iconscout/react-unicons/icons/uil-music";
import UilSetting from "@iconscout/react-unicons/icons/uil-setting";
import UilBall from "@iconscout/react-unicons/icons/uil-volleyball";
import UilUsersAlt from "@iconscout/react-unicons/icons/uil-users-alt";
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import UilInfo from "@iconscout/react-unicons/icons/uil-info-circle";
import { useState, useEffect } from "react";
import onLogout from "../utils/logout";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-dropdown';
import { toast } from 'react-toastify';

const CertificateListWrapper = (props) => {

    const [certificateList, setCertificateList] = useState([]);

    useEffect(() => {

        axios.post(`${BACKEND_URL}/student/dashboard`, { email: JSON.parse(localStorage.getItem("student_metadata"))["email"] })
            .then((response) => setCertificateList(response.data.certificate_list))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="certificate-list-wrapper">
            {
                certificateList.map((certificate, index) => {

                    if (props.mode === certificate.category) {
                        return (
                            <div key={index} className="certificate">
                                <img alt="event-cert" src={certificate.event_image} />
                                <div>
                                    <div className="event-name">{certificate.name}</div>
                                    <div className="event-position">{certificate.position}</div>
                                </div>
                                <button className="button download-cert" onClick={() => window.open(`${BACKEND_URL}/student?id=${certificate.certificate_id}&email=${JSON.parse(localStorage.getItem("student_metadata"))["email"]}`, "_blank")}>Download Certificate</button>
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

    const [userGrievance, setUserGrievance] = useState("");
    const [userResolution, setUserResolution] = useState("");
    const [fileName, setFileName] = useState("No file selected");
    const [poster, setPoster] = useState(null);
    const [type, setType] = useState({});

    const typeList = ["Academic Department", "Payment", "Scholarship", "Extra Curricular", "Mental Health", "Other"];

    const fileUploader = (event) => {

        setFileName(event.target.files[0].name);
        setPoster(event.target.files[0]);
    }

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append('name', JSON.parse(localStorage.getItem("student_metadata"))["name"]);
        formData.append('email', JSON.parse(localStorage.getItem("student_metadata"))["email"]);
        formData.append('type', type);
        formData.append('description', userGrievance);
        formData.append('resolutions', userResolution);
        formData.append('image', poster)

        axios.post(`${BACKEND_URL}/student/grievence/`, formData, {})
            .then(res => { 
                console.log(res);
                toast.success('Event upload successful');
            })
            .catch (err=> { 
                console.log(err);
                toast.error('Upload error'); 
            });
        }

    return (
        <div className="grievance-form">
            <div className="grievance-name">
                <label className="type-label">Type of Grievance: </label>
                <Dropdown
                    options={typeList}
                    value={type}
                    placeholder="Select type of grievance"
                    onChange={setType}
                    className="dropdown"
                    controlClassName="dropdown-control"
                    placeholderClassName="dropdown-placeholder"
                    arrowClassName="dropdown-arrow"
                    menuClassName="dropdown-menu"
                />
            </div>
            <div className="grievance-content">
                <textarea cols="50" rows="8" placeholder="Type your grievance" value={userGrievance} onChange={(e) => { setUserGrievance(e.target.value) }} className="grievance-box">
                </textarea>
                <textarea cols="50" rows="8" placeholder="What attempts have you made to resolve this grievance up to now?" value={userResolution} onChange={(e) => { setUserResolution(e.target.value) }} className="grievance-box">
                </textarea>
                <label className="label">Upload File</label>
                <label htmlFor="file-upload" className="custom-file-upload">
                    &#8613; &nbsp; {fileName}
                </label>
                <input id="file-upload" type="file" onChange={(event) => fileUploader(event)} />

                <button className="button add-button" onClick={() => {handleSubmit()}}>Add +</button>
            </div>
        </div>
    )
}

const StudentProfile = () => {

    let navigate = useNavigate();

    const studentData = {
        name: "",
        email: ""
    };

    try {
        
        studentData.name = JSON.parse(localStorage.getItem("student_metadata"))["name"];
        studentData.email = JSON.parse(localStorage.getItem("student_metadata"))["email"];
        
    } catch (err) {

        //notify user to login again
        navigate("/");
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
        <SessionAuth requireAuth={true} redirectToLogin={() => navigate("/login?role=student")}>
            <div className="student-profile">
                <Dashboard
                    headerData={dashboardHeaderData}
                    listData={dashboardListData}
                    currentSelection={currentSelection}
                    changeSelection={setCurrentSelection}
                />
                <div className="container">
                    <div className="nav-button-wrapper">
                        <button className="button" onClick={() => navigate("/")}>HOME</button>
                        <button className="button" onClick={() => onLogout(navigate)}>LOGOUT</button>
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
