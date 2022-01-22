import { UilEnvelope, UilPhone, UilGlobe } from '@iconscout/react-unicons';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


const sampleFacultyData = {
    "name": "Raghavendra Kaushik",
    "position": "President, TSG",
    "photo": "https://i.imgur.com/saBEwCK.jpg",
    "dept" : "Department of Computer Science and Engineering",
    "research-area" : "Networking",
    "email": "cghosh828049@gmail.com",
    "phone": "+918018212895",
    "website" : "http://google.com"
}

const Faculty = () => {

    const [contactList, setContactList] = useState({});

    useEffect(() => {
        setContactList(sampleFacultyData);
    }, [])

    return (
        <div className="faculty">
            <div className="nav-button-wrapper">
                <button type="button" class="button" onClick={() => window.location.href=`${window.location.origin}/`}>Go Back</button>
            </div>
            <div className="faculty-img">
                <img src={sampleFacultyData.photo} alt="Profile photo"/>
            </div>
            <div className="faculty-name">
                {sampleFacultyData.name}
            </div>
            <div className="faculty-details">
                <div className="faculty-details-wrapper">{sampleFacultyData.position}</div>
                <div className="faculty-details-wrapper">{sampleFacultyData.dept}</div>
                <div className="faculty-details-wrapper">Research Area: {sampleFacultyData["research-area"]}</div>
            </div>
            <div className="faculty-handle">
                <button onClick={() => window.location.href=`mailto:${sampleFacultyData.email}`}><UilEnvelope color="purple" size={40} /></button>
                <button onClick={() =>  {navigator.clipboard.writeText(`${sampleFacultyData.phone}`); toast.success('Phone number copied to clipboard'); }} color="orangered"><UilPhone size={40} /></button>
                <button onClick={() => window.location.href=`${sampleFacultyData.website}`} color="lightblue"><UilGlobe size={40} /></button>
            </div>
        </div >
    )
}

export default Faculty;