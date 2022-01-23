import { UilEnvelope, UilPhone, UilGlobe } from '@iconscout/react-unicons';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const sampleFacultyData = [{
    "name": "Raghavendra Kaushik",
    "position": "President, TSG",
    "photo": "https://i.imgur.com/saBEwCK.jpg",
    "dept": "Department of Computer Science and Engineering",
    "research-area": "Networking",
    "email": "cghosh828049@gmail.com",
    "phone": "+918018212895",
    "website": "http://google.com"
},{
    "name": "Raghavendra Kaushik",
    "position": "President, TSG",
    "photo": "https://i.imgur.com/saBEwCK.jpg",
    "dept": "Department of Computer Science and Engineering",
    "research-area": "Networking",
    "email": "cghosh828049@gmail.com",
    "phone": "+918018212895",
    "website": "http://google.com"
}, {
    "name": "Raghavendra Kaushik",
    "position": "President, TSG",
    "photo": "https://i.imgur.com/saBEwCK.jpg",
    "dept": "Department of Computer Science and Engineering",
    "research-area": "Networking",
    "email": "cghosh828049@gmail.com",
    "phone": "+918018212895",
    "website": "http://google.com"
}];

const FacultyCard = (props) => {

    return (
        <div className='faculty-card'>
            <div className='faculty-personal'>
                <div className="faculty-img">
                    <img src={props.photo} alt="Profile photo"/>
                </div>
                <div className="faculty-name">
                    {props.name}
                </div>
            </div>
            <div className="faculty-details-wrapper">
                <div className="faculty-details">{props.position}</div>
                <div className="faculty-details">{props.dept}</div>
                <div className="faculty-details">Research Area: {props["research-area"]}</div>
            </div>
            <div className="faculty-handle">
                <button onClick={() => window.location.href=`mailto:${props.email}`}><UilEnvelope color="purple" size={40} /></button>
                <button onClick={() =>  {navigator.clipboard.writeText(`${props.phone}`); toast.success('Phone number copied to clipboard'); }} ><UilPhone size={40} color="orangered" /></button>
                <button onClick={() => window.location.href=`${props.website}`} ><UilGlobe size={40} color="grey" /></button>
            </div>
        </div>
    )
}

const Faculty = () => {

    const [facultyList, setFacultyList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        setFacultyList(sampleFacultyData);
    }, [])

    return (
        <div className="faculty">
            <div className="nav-button-wrapper">
                <button type="button" class="button" onClick={() => navigate("/quickinfo")}>Go Back</button>
            </div>
            {facultyList.map((faculty) => {
                return(<FacultyCard {...faculty} />)
            })}
        </div >
    )
}

export default Faculty;