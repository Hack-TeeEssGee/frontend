import Dashboard from "../components/dashboard";
import { UilGraduationCap, UilUserCircle, UilGameStructure } from '@iconscout/react-unicons';
import { useState, useMemo, useEffect } from "react";
import onLogout from "../utils/logout";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import TableComponent from "../components/table";
import { toast } from 'react-toastify';


const CareerCards = (props) => {
    console.log(eval(props.career))
    return (
        <div className="career-card-list">
            {
                props.career.map((career, index) => {
                    return (<div className="career-card"><div className="career-title">
                        {career.Name}
                        </div>
                        <div className="career-desc"> {career.Description}</div>
                    </div>
                    )
                })
            }
        </div>

    )
}

const BillReimbursement = () => {

    const [noteList, setNoteList] = useState([]);

    useEffect(() => {

        if (localStorage.getItem("noteList") !== null) setNoteList(JSON.parse(localStorage.getItem("noteList")));
        axios.get(`${BACKEND_URL}/info/academic-point/`)
            .then((response) => {

                console.log(response.data)
                setNoteList(response.data.data)
            })
            .catch((err) => console.log(err));

        // toast.info("Click on a card to explore more.");
    }, []);

    localStorage.setItem("noteList", JSON.stringify(noteList));


    const data = useMemo(() => [...noteList], [noteList]);

    const columns = useMemo(() => [
        {
            Header: "S.No",
            accessor: "S.No"
        },
        {
            Header: "Description",
            accessor: "Name"
        },
        {
            Header: "Link",
            accessor: "Link"
        }
    ], []);

    return (
        <div className="bill-reimbursement">
            <TableComponent data={data} columns={columns} />
        </div>
    )
}

const StudentPoint = () => {

    let navigate = useNavigate();

    const [careerList, setCareerList] = useState([]);

    useEffect(() => {

        if (localStorage.getItem("careerList") !== null) setCareerList(JSON.parse(localStorage.getItem("careerList")));
        axios.get(`${BACKEND_URL}/info/career-point/`)
            .then((response) => {

                console.log(response.data)
                setCareerList(response.data.data)
            })
            .catch((err) => console.log(err));

        // toast.info("Click on a card to explore more.");
    }, []);

    localStorage.setItem("careerList", JSON.stringify(careerList));

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
        specialSelection: -1, //Enter -1 for none
        listData: [
            {
                option: "Academic Point",
                icon: UilGraduationCap
            },
            {
                option: "Career Point",
                icon: UilGameStructure
            }
        ]
    }

    const [currentSelection, setCurrentSelection] = useState(dashboardListData.defaultSelection);

    var title, BodyContent;

    if (currentSelection == 0 ) {
        title = "ACADEMIC POINT";
        BodyContent = BillReimbursement;
    }
    else if (currentSelection === 1) {
        title = "CAREER POINT";
        BodyContent = CareerCards;
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
                        career={JSON.parse(localStorage.getItem("careerList"))}
                    />
                </div>
            </div>
        </SessionAuth>
    )
}

export default StudentPoint;
