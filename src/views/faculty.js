import { UilEnvelope, UilPhone, UilFacebookF, UilInstagram, UilGlobe } from '@iconscout/react-unicons';
import { useEffect, useState } from "react";

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
                <a href={`mailto:${sampleFacultyData.email}`}><UilEnvelope color="purple" size={40} /></a>
                <a href={sampleFacultyData.phone} color="orangered"><UilPhone size={40} /></a>
                <a href={sampleFacultyData.website} color="lightblue"><UilGlobe size={40} /></a>
            </div>
        </div >
    )
}

export default Faculty;