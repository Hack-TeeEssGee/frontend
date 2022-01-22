import Dashboard from "../components/dashboard";
import ContactCard from "../components/contactCard";
import { UilMusic, UilSetting, UilVolleyball } from '@iconscout/react-unicons';
import tsgLogo from "../assets/tsg-logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../constants';
import axios from 'axios';

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
        if (localStorage.getItem("contactList") !== null) setContactList(JSON.parse(localStorage.getItem("contactList")));
        axios.get(`${BACKEND_URL}/tsg/office/`)
            .then((response) => {
                setContactList(response.data)
            })
            .catch((err) => console.log(err));
    }, [])

    // console.log(contactList)
    localStorage.setItem("contactList", JSON.stringify(contactList));

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
        contactArray = contactList["TSG Staff"];
    }
    else {
        contactArray = contactList["Secretary"];
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
                    <button className="button" onClick={() => navigate("/quick-info")}>GO BACK</button>
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