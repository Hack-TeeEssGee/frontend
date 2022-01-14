import { useEffect, useState } from "react"
import { UilSchedule, UilHistory, UilBill } from '@iconscout/react-unicons';
import Dashboard from "../components/dashboard";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { filterEvents } from "../utils/society";
import EventCard from "../components/eventCard";

const EventWrapper = (props) => {

    const [eventList, setEventList] = useState([]);

    useEffect(() => {

        axios.get(`${BACKEND_URL}/event/${props.society.id}`)
            .then((response) => setEventList(filterEvents(response.data.events, props.mode)))
            .catch((err) => console.log(err));
    }, [props]);



    return (
        <div className="event-wrapper">
            {eventList.map((event, index) => {

                return (
                    <EventCard key={index} event={event} />
                )
            })}
        </div>
    )
}

const BillReimbursement = () => {

    return (
        <div className="bill-reimbursement">
            Billing area
        </div>
    )
}

const SocietyPage = () => {

    const [society, setSociety] = useState({});

    let { accessTokenPayload } = useSessionContext();

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        
        const societyList = JSON.parse(localStorage.getItem("societyList"));
        setSociety(societyList[urlParams.get("index")]);
    }, [])

    const dashboardHeaderData = {
        title: society?.name,
        subtitle: society?.email,
        icon: society?.logo,
        isImage: true
    }

    const dashboardListData = {
        defaultSelection: 0,
        specialSelection: -1, //Enter -1 for none
        listData: [
            {
                option: "Upcoming Events",
                icon: UilSchedule
            },
            {
                option: "Past Events",
                icon: UilHistory
            }
        ]
    }

    if (accessTokenPayload.role === "tsg" || accessTokenPayload.role === "admin" || accessTokenPayload.role === "society") {
        dashboardListData.listData.push({
            option: "Bill Reimbursement Portal",
            icon: UilBill
        })
        dashboardListData.specialSelection = 2;
    }

    const [currentSelection, setCurrentSelection] = useState(dashboardListData.defaultSelection);

    var title, BodyContent;

    if (currentSelection === 0) {
        title = "UPCOMING EVENTS";
        BodyContent = EventWrapper;
    }
    else if (currentSelection === 1) {
        title = "PAST EVENTS";
        BodyContent = EventWrapper;
    }
    else {
        title = "BILL REIMBURSEMENT PORTAL";
        BodyContent = BillReimbursement;
    }

    return (
        <div className="society-page">
            <Dashboard
                headerData={dashboardHeaderData}
                listData={dashboardListData}
                currentSelection={currentSelection}
                changeSelection={setCurrentSelection}
            />
            <div className="container">
                <div className="nav-button-wrapper">
                    <button className="button" onClick={() => window.location.href = `${window.location.origin}/society-point`}>GO BACK</button>
                    {accessTokenPayload.role === "society" && <button className="button" onClick={() => window.location.href = `${window.location.origin}/events/upload?organiser=${society.name}`}>ADD EVENT</button>}
                </div>
                <div className="title">{title}</div>
                <BodyContent
                    mode={currentSelection}
                    society={society}
                />
            </div>
        </div>
    )
}

export default SocietyPage;