import Dashboard from "../components/dashboard";
import ContactCard from "../components/contactCard";
import { UilMusic, UilSetting, UilVolleyball } from '@iconscout/react-unicons';
import tsgLogo from "../assets/tsg-logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const ContactsWrapper = (props) => {

    return (
        <div className="contacts-wrapper">{
            props.contactArray.map((contact) => {
                return (<ContactCard {...contact} />)
            })
        }</div>
    )
}

const Contacts = () => {

    const [contactList, setContactList] = useState({});

    let navigate = useNavigate();

    useEffect(() => {
        setContactList(sampleContactData);
    }, [])

    const dashboardHeaderData = {
        title: "TSG Contacts",
        subtitle: "",
        icon: tsgLogo,
        isImage: true
    }

    const dashboardListData = {
        defaultSelection: 0,
        specialSelection: -1, //Enter -1 for none
        listData: [
            {
                option: "Office Bearers",
                icon: UilSetting
            },
            {
                option: "Office Staff",
                icon: UilMusic
            },
            {
                option: "Secretaries",
                icon: UilVolleyball
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
                <div className="nav-button-wrapper">
                    <button className="button" onClick={() => navigate("/quickinfo")}>GO BACK</button>
                </div>
                <div className="title">CONTACTS</div>
                <ContactsWrapper
                    mode={dashboardListData.listData[currentSelection].option}
                    contactArray={contactArray}
                />
            </div>
        </div>
    )
}

export default Contacts;