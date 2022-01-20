import Dashboard from "../components/dashboard";
import ContactCard from "../components/contactCard";
import { UilGameStructure, UilMusic, UilSetting, UilVolleyball } from '@iconscout/react-unicons';
import tsgLogo from "../assets/tsg-logo.png";
import { useEffect, useState } from "react";

const sampleContactData = {
    "Office Bearers": [
        {
            "name": "Raghavendra Kaushik",
            "position": "President",
            "photo": "https://i.imgur.com/saBEwCK.jpg",
            "email": "cghosh828049@gmail.com",
            "phone": "+918018212895",
            "fb": "https://www.favebook.com",
            "insta": "https://www.instagram.com",
            "linkedin": "https://www.linkedin.com"
        },
    ],
    "Office Staff": [
        {
            "name": "Raghavendra Kaushik",
            "position": "Attendant",
            "photo": "https://i.imgur.com/saBEwCK.jpg",
            "email": "cghosh828049@gmail.com",
            "phone": "+918018212895",
            "fb": "https://www.favebook.com",
            "insta": "https://www.instagram.com",
            "linkedin": "https://www.linkedin.com"
        },
    ],
    "Secretaries": [
        {
            "name": "Raghavendra Kaushik",
            "position": "Secretary Academic Help",
            "photo": "https://i.imgur.com/saBEwCK.jpg",
            "email": "cghosh828049@gmail.com",
            "phone": "+918018212895",
            "fb": "https://www.favebook.com",
            "insta": "https://www.instagram.com",
            "linkedin": "https://www.linkedin.com"
        },
    ]
}

const TimelineList = (props) => {
    return (
        <div className="timeline-list">
            {
                props.listData.map((option, index) => {
                    if (index !== props.specialSelection) {
                        return (
                            <li key={index} className="timelien-option" isselected={String(props.currentSelection === index)} onClick={() => {props.changeSelection(index)}}>
                                <option.icon size={50} />
                                <div>{option.option}</div>
                            </li>
                        )
                    }
                    else {
                        return null;
                    }
                })
            }
        </div>

    )
}

const TimelineWrapper = () => {

    return (
        <div className="timeline-wrapper">{
            
        }</div>
    )
}

const Cdc = () => {

    const [contactList, setContactList] = useState({});

    useEffect(() => {
        setContactList(sampleContactData);
    }, [])

    const dashboardHeaderData = {
        title: "CDC Stats",
        subtitle: "",
        icon: tsgLogo,
        isImage: true
    }

    const dashboardListData = {
        defaultSelection: 0,
        specialSelection: -1, //Enter -1 for none
        listData: [
            {
                option: "Placements 2021",
                icon: UilSetting
            },
            {
                option: "Internship 2021",
                icon: UilSetting
            },
            {
                option: "Placements 2020",
                icon: UilSetting
            },
            {
                option: "Internships 2020",
                icon: UilSetting
            }
        ]
    }

    const [currentSelection, setCurrentSelection] = useState(dashboardListData.defaultSelection);

    var contactArray = [];

    if (currentSelection === 0) {
        console.log(contactList["Office Bearers"])
        contactArray = contactList["Office Bearers"];
    }
    else if (currentSelection === 1) {
        contactArray = contactList["Office Staff"];
    }
    else {
        contactArray = contactList["Secretaries"];
    }

    if (contactArray === undefined) contactArray = [];

    return (
        <div className="contacts">
            <Dashboard
                headerData={dashboardHeaderData}
                listData={dashboardListData}
                currentSelection={currentSelection}
                changeSelection={setCurrentSelection}
            />
            <div className="container">
                <div className="button-wrapper">
                    <div className="nav-button-wrapper">
                        <button className="button" onClick={() => window.location.href = `${window.location.origin}/quickinfo`}>GO BACK</button>
                    </div>
                </div>
                <div className="title"></div>

            </div>
        </div>
    )
}

export default Cdc;