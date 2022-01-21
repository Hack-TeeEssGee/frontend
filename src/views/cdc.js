import Dashboard from "../components/dashboard";
import { UilSetting } from '@iconscout/react-unicons';
import tsgLogo from "../assets/tsg-logo.png";
import { useEffect, useState } from "react";

const sampleContactData = [];

const timelineData = [
    1, 2, 3, 4, 5, 6, "Total"
]   

const TimelineList = (props) => {
    return (
        <div className="timeline-list">
            <div className="label">Week:</div>
            {
                props.listData.map((index) => {
                    return (
                        <li key={index} className="timeline-option" isselected={String(props.currentSelection === index)} onClick={() => {props.changeSelection(index)}}>
                            { index }
                        </li>
                    )
                }
            )}
        </div>
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
    const [currentWeekSelection, setCurrentWeekSelection] = useState(0);

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
        <div className="cdc">
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
                <div className="timeline">
                    <TimelineList 
                    listData={timelineData}
                    currentSelection={currentWeekSelection}
                    changeSelection={setCurrentWeekSelection}
                    />    
                </div>

            </div>
        </div>
    )
}

export default Cdc;